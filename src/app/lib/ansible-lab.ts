export type LabHost = {
  name: string;
  config: "v1" | "v2";
  service: boolean;
};

export type LabReport = {
  mode: "check" | "apply";
  run: number;
  changes: { host: string; field: string; before: string; after: string }[];
};

export type LabState = {
  hosts: LabHost[];
  runs: number;
  report: LabReport | null;
  notice: string;
};

export type LabAction =
  { type: "check" | "apply" } | { type: "stop-service" } | { type: "reset" };

export function createLabState(): LabState {
  return {
    hosts: [
      { name: "app-01", config: "v1", service: false },
      { name: "app-02", config: "v2", service: true },
      { name: "app-03", config: "v2", service: false },
    ],
    runs: 0,
    report: null,
    notice:
      "Deux serveurs présentent des écarts. Prévisualisez les corrections ou appliquez le playbook.",
  };
}

export function isCompliant(host: LabHost) {
  return host.config === "v2" && host.service;
}

export function labReducer(state: LabState, action: LabAction): LabState {
  if (action.type === "reset") return createLabState();
  if (action.type === "stop-service") {
    return {
      ...state,
      hosts: state.hosts.map((host) =>
        host.name === "app-02" ? { ...host, service: false } : host,
      ),
      report: null,
      notice:
        "Service arrêté sur app-02. Appliquez le playbook pour le redémarrer sans modifier les serveurs déjà conformes.",
    };
  }

  const changes: LabReport["changes"] = [];
  for (const host of state.hosts) {
    if (host.config !== "v2") {
      changes.push({
        host: host.name,
        field: "Configuration",
        before: host.config,
        after: "v2",
      });
    }
    if (!host.service) {
      changes.push({
        host: host.name,
        field: "Service",
        before: "arrêté",
        after: "actif",
      });
    }
  }
  const count = changes.length;
  const changedHosts = new Set(changes.map((change) => change.host)).size;
  const summary = `${count} correction${count > 1 ? "s" : ""} sur ${changedHosts} serveur${changedHosts > 1 ? "s" : ""}`;
  return {
    hosts:
      action.type === "apply"
        ? state.hosts.map((host) => ({ ...host, config: "v2", service: true }))
        : state.hosts,
    runs: state.runs + 1,
    report: { mode: action.type, run: state.runs + 1, changes },
    notice:
      count === 0
        ? "0 changement. Les trois serveurs sont déjà conformes : c’est l’idempotence."
        : action.type === "check"
          ? `${summary} à prévoir. L’état des serveurs reste inchangé.`
          : `${summary} appliquée${count > 1 ? "s" : ""}. Les trois serveurs sont maintenant conformes.`,
  };
}
