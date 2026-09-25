"use client";

import { useReducer } from "react";
import {
  ArrowRight,
  Check,
  Eye,
  Play,
  Power,
  RotateCcw,
  Server,
  Terminal,
} from "lucide-react";
import { createLabState, isCompliant, labReducer } from "@/app/lib/ansible-lab";

export default function AnsibleDemo() {
  const [state, dispatch] = useReducer(labReducer, undefined, createLabState);
  const compliant = state.hosts.filter(isCompliant).length;
  const report = state.report;
  const canStopService = state.hosts.find(
    (host) => host.name === "app-02",
  )?.service;

  return (
    <div
      className="ansible-demo"
      aria-label="Démonstration interactive d’automatisation"
    >
      <div className="demo-header">
        <Terminal size={17} aria-hidden="true" />
        <span>ANSIBLE / MISE EN CONFORMITÉ</span>
        <span className="demo-pill">SIMULATION</span>
      </div>
      <div className="demo-intro">
        <h3>Trois serveurs. Un état attendu.</h3>
        <p>
          Objectif : une configuration <strong>v2</strong> et un service{" "}
          <strong>actif</strong> sur chaque serveur.
        </p>
      </div>
      <div className="demo-inventory-heading">
        <span>ÉTAT ACTUEL</span>
        <strong>{compliant}/3 conformes</strong>
      </div>
      <ul className="demo-hosts" aria-label="État des serveurs simulés">
        {state.hosts.map((host) => (
          <li
            key={host.name}
            className={isCompliant(host) ? "is-compliant" : "has-drift"}
          >
            <div className="demo-host-name">
              <Server size={17} aria-hidden="true" />
              <strong>{host.name}</strong>
              <span>
                {isCompliant(host) ? (
                  <>
                    <Check size={12} aria-hidden="true" /> Conforme
                  </>
                ) : (
                  "À corriger"
                )}
              </span>
            </div>
            <dl>
              <div>
                <dt>Configuration</dt>
                <dd className={host.config === "v2" ? "" : "has-drift"}>
                  {host.config}
                </dd>
              </div>
              <div>
                <dt>Service</dt>
                <dd className={host.service ? "" : "has-drift"}>
                  {host.service ? "Actif" : "Arrêté"}
                </dd>
              </div>
            </dl>
          </li>
        ))}
      </ul>
      <div className="demo-actions">
        <button
          className="button button-primary"
          onClick={() => dispatch({ type: "apply" })}
        >
          <Play size={15} aria-hidden="true" />
          {compliant === 3 ? "Relancer le playbook" : "Appliquer le playbook"}
        </button>
        <button
          className="demo-secondary"
          onClick={() => dispatch({ type: "check" })}
        >
          <Eye size={15} aria-hidden="true" /> Prévisualiser
        </button>
      </div>
      <div
        className="demo-feedback"
        role="status"
        aria-live="polite"
        aria-atomic="true"
      >
        <div className="demo-feedback-label">
          {report ? (
            <>
              <span>
                {report.mode === "check" ? "APERÇU" : "EXÉCUTION"} #{report.run}
              </span>
              <strong>
                {report.changes.length}{" "}
                {report.mode === "check"
                  ? "à corriger"
                  : "changement" + (report.changes.length > 1 ? "s" : "")}
              </strong>
            </>
          ) : (
            <span>À VOUS DE JOUER</span>
          )}
        </div>
        <p>{state.notice}</p>
        {report && report.changes.length > 0 && (
          <ul
            className="demo-diff"
            aria-label={
              report.mode === "check"
                ? "Corrections prévues"
                : "Corrections appliquées"
            }
          >
            {report.changes.map((change) => (
              <li key={`${change.host}-${change.field}`}>
                <span>
                  <b>{change.host}</b> · {change.field}
                </span>
                <span>
                  <del>{change.before}</del>
                  <ArrowRight size={12} aria-hidden="true" />
                  <span className="sr-only"> vers </span>
                  <ins>{change.after}</ins>
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="demo-scenarios">
        <button
          className="demo-secondary"
          disabled={!canStopService}
          onClick={() => dispatch({ type: "stop-service" })}
        >
          <Power size={14} aria-hidden="true" /> Arrêter le service sur app-02
        </button>
        <button
          className="demo-reset"
          onClick={() => dispatch({ type: "reset" })}
        >
          <RotateCcw size={13} aria-hidden="true" /> Recommencer
        </button>
      </div>
      <p className="demo-note">
        Scénario fictif et local, indépendant du projet Thales.{" "}
        <a
          href="https://docs.ansible.com/projects/ansible/latest/playbook_guide/playbooks_checkmode.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Comprendre le mode check
          <span className="sr-only"> — nouvel onglet</span> ↗
        </a>
      </p>
    </div>
  );
}
