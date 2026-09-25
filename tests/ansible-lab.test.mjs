import assert from "node:assert/strict";
import test from "node:test";
import {
  createLabState,
  isCompliant,
  labReducer,
} from "../src/app/lib/ansible-lab.ts";

test("check mode describes corrections without modifying any server", () => {
  const state = createLabState();
  const original = structuredClone(state);
  const preview = labReducer(state, { type: "check" });
  assert.equal(preview.report.changes.length, 3);
  assert.deepEqual(preview.hosts, original.hosts);
  assert.deepEqual(state, original);
  assert.equal(preview.hosts.filter(isCompliant).length, 1);
  assert.equal(preview.report.mode, "check");
});

test("apply converges the inventory, and a second run changes nothing", () => {
  const state = createLabState();
  const result = labReducer(state, { type: "apply" });
  assert.equal(result.report.changes.length, 3);
  assert.ok(result.hosts.every(isCompliant));
  assert.equal(state.hosts.filter(isCompliant).length, 1);
  const repeat = labReducer(result, { type: "apply" });
  assert.deepEqual(repeat.hosts, result.hosts);
  assert.equal(repeat.report.changes.length, 0);
  assert.equal(repeat.runs, 2);
  assert.equal(repeat.report.run, 2);
  assert.match(repeat.notice, /0 changement/);
});

test("an injected service drift is repaired without changing compliant servers", () => {
  const configured = labReducer(createLabState(), { type: "apply" });
  const drifted = labReducer(configured, { type: "stop-service" });
  assert.equal(drifted.hosts.filter(isCompliant).length, 2);
  assert.equal(drifted.report, null);
  const checked = labReducer(drifted, { type: "check" });
  assert.deepEqual(checked.hosts, drifted.hosts);
  const repaired = labReducer(checked, { type: "apply" });
  assert.deepEqual(repaired.report.changes, [
    { host: "app-02", field: "Service", before: "arrêté", after: "actif" },
  ]);
  assert.deepEqual(repaired.hosts, configured.hosts);
});

test("repeated previews and reset remain usable after any interaction", () => {
  const preview = labReducer(createLabState(), { type: "check" });
  const repeat = labReducer(preview, { type: "check" });
  assert.equal(repeat.report.run, 2);
  assert.deepEqual(repeat.report.changes, preview.report.changes);
  const drifted = labReducer(repeat, { type: "stop-service" });
  assert.equal(labReducer(drifted, { type: "apply" }).report.changes.length, 4);
  assert.deepEqual(labReducer(drifted, { type: "reset" }), createLabState());
});
