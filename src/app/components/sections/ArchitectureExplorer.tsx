"use client";

import { useState, type CSSProperties } from "react";
import {
  Activity,
  ArrowUpRight,
  Boxes,
  Cloud,
  Code2,
  Database,
  FileCode2,
  GitBranch,
  ListTree,
  Network,
  ScanLine,
  Server,
  Settings2,
  Terminal,
  Workflow,
} from "lucide-react";

const architectures = [
  {
    label: "Automatisation",
    title: "Une infrastructure pilotée par Ansible.",
    number: "01",
    file: "ansible / architecture",
    project: "Projet Thales",
    href: "#case-studies/thales",
    description:
      "Une solution full Ansible pour les infrastructures des contrôleurs aériens. Développée au sein d’une équipe de quatre personnes.",
    nodes: [
      {
        name: "Inventaire",
        kind: "SOURCE",
        icon: ListTree,
        detail:
          "Décrire les machines et les regrouper pour appliquer la bonne configuration au bon environnement.",
        tags: ["Hôtes", "Groupes", "Variables"],
      },
      {
        name: "Ansible",
        kind: "ORCHESTRATION",
        icon: Workflow,
        detail:
          "Exprimer l’état attendu dans des playbooks et des rôles réutilisables, puis exécuter les tâches sur les cibles.",
        tags: ["Playbooks", "Rôles", "YAML"],
      },
      {
        name: "Configuration",
        kind: "ÉTAT ATTENDU",
        icon: FileCode2,
        detail:
          "Rendre la configuration explicite et reproductible : services, fichiers et paramètres système.",
        tags: ["Templates", "Services"],
      },
      {
        name: "Systèmes",
        kind: "INFRASTRUCTURE",
        icon: Server,
        detail:
          "Appliquer les opérations sur les infrastructures et conserver une approche commune entre les environnements.",
        tags: ["SysOps", "Infrastructure"],
      },
      {
        name: "Contrôle",
        kind: "VÉRIFICATION",
        icon: ScanLine,
        detail:
          "Vérifier le résultat et ne modifier que ce qui doit l’être. Le mini-lab plus bas illustre ce principe d’idempotence.",
        tags: ["Conformité", "Idempotence"],
      },
    ],
  },
  {
    label: "Cloud hybride",
    title: "Relier GCP, OCI et la chaîne de livraison.",
    number: "02",
    file: "cloud / architecture",
    project: "Projet Carrefour",
    href: "#case-studies/crm",
    description:
      "Migration d’un CRM vers une architecture hybride Google Cloud et Oracle Cloud, avec Terraform et GitLab CI/CD.",
    nodes: [
      {
        name: "GitLab",
        kind: "CODE & PIPELINES",
        icon: GitBranch,
        detail:
          "Versionner le code et structurer les étapes de validation et de déploiement dans une chaîne CI/CD.",
        tags: ["Git", "CI/CD"],
      },
      {
        name: "Terraform",
        kind: "INFRASTRUCTURE AS CODE",
        icon: Boxes,
        detail:
          "Décrire les ressources dans le code pour rendre leur création, leur évolution et leur revue reproductibles.",
        tags: ["IaC", "Plan", "Apply"],
      },
      {
        name: "GCP",
        kind: "CLOUD",
        icon: Cloud,
        detail:
          "Faire évoluer les ressources applicatives dans Google Cloud Platform au sein de l’architecture hybride.",
        tags: ["Google Cloud", "Applications"],
      },
      {
        name: "OCI",
        kind: "CLOUD",
        icon: Database,
        detail:
          "Intégrer Oracle Cloud Infrastructure à l’architecture cible et à la gestion de ses ressources.",
        tags: ["Oracle Cloud", "Données"],
      },
      {
        name: "Supervision",
        kind: "EXPLOITATION",
        icon: Activity,
        detail:
          "Observer le fonctionnement des environnements et disposer de signaux utiles pour l’exploitation.",
        tags: ["Monitoring", "Production"],
      },
    ],
  },
  {
    label: "Observabilité",
    title: "Faire circuler les signaux utiles.",
    number: "03",
    file: "dataops / observability",
    project: "Expérience Servier",
    href: "#experience",
    description:
      "Monitoring sur GCP, gestion des alertes et intégrations Python dans une équipe DataOps.",
    nodes: [
      {
        name: "GCP",
        kind: "ENVIRONNEMENT",
        icon: Cloud,
        detail:
          "Collecter les informations de fonctionnement des services et de l’infrastructure Google Cloud.",
        tags: ["GCP", "DataOps"],
      },
      {
        name: "Signaux",
        kind: "OBSERVABILITÉ",
        icon: Activity,
        detail:
          "Croiser les logs et les alertes pour comprendre ce qui se passe et organiser la réponse opérationnelle.",
        tags: ["Cloud Logging", "Grafana"],
      },
      {
        name: "Python API",
        kind: "INTÉGRATION",
        icon: Code2,
        detail:
          "Développer une API FastAPI pour la gestion des alertes Grafana et leur intégration dans Centreon.",
        tags: ["Python", "FastAPI"],
      },
      {
        name: "Centreon",
        kind: "SUPERVISION",
        icon: Network,
        detail:
          "Rattacher les informations utiles à la supervision existante et faciliter leur exploitation.",
        tags: ["Supervision", "Alertes"],
      },
      {
        name: "ServiceNow",
        kind: "SUIVI",
        icon: Settings2,
        detail:
          "Rattacher les alertes aux processus de suivi opérationnel pour faciliter leur prise en charge.",
        tags: ["Incidents", "Suivi"],
      },
    ],
  },
];
const positions = [
  { x: 13.5, y: 50 },
  { x: 45, y: 50 },
  { x: 81, y: 23 },
  { x: 81, y: 50 },
  { x: 81, y: 77 },
];
const paths = [
  "M108 210H360",
  "M360 210H445Q475 210 475 180V127Q475 97 505 97H648",
  "M360 210H648",
  "M360 210H445Q475 210 475 240V293Q475 323 505 323H648",
];

export default function ArchitectureExplorer() {
  const [active, setActive] = useState(0);
  const [selected, setSelected] = useState(1);
  const [hovered, setHovered] = useState<number | null>(null);
  const architecture = architectures[active];
  const detail = architecture.nodes[selected];
  const highlighted = hovered ?? selected;
  return (
    <div className="architecture-explorer">
      <div className="architecture-toolbar">
        <div className="architecture-file">
          <Terminal size={14} />
          <span>{architecture.file}</span>
        </div>
        <div
          className="architecture-switch"
          role="group"
          aria-label="Choisir une architecture"
        >
          {architectures.map((item, index) => (
            <button
              key={item.label}
              aria-pressed={active === index}
              onClick={() => {
                setActive(index);
                setSelected(1);
                setHovered(null);
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
      <div className="architecture-workspace">
        <div className="topology">
          <span className="topology-label">
            SCHÉMA DE PRINCIPE / {architecture.number}
          </span>
          <span className="topology-axis" aria-hidden="true">
            Y ↑
          </span>
          <svg
            className="topology-wires"
            viewBox="0 0 800 420"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            {paths.map((d, i) => (
              <g key={d}>
                <path d={d} className="wire-base" />
                <path
                  d={d}
                  className={`wire-signal ${highlighted === 1 || highlighted === i + 1 || (i === 0 && highlighted === 0) ? "is-active" : ""}`}
                />
              </g>
            ))}
          </svg>
          <div className="topology-nodes">
            {architecture.nodes.map((node, index) => (
              <button
                key={index}
                className={`topology-node ${index === 1 ? "node-controller" : ""}`}
                style={
                  {
                    "--node-x": `${positions[index].x}%`,
                    "--node-y": `${positions[index].y}%`,
                  } as CSSProperties
                }
                aria-pressed={selected === index}
                aria-controls="architecture-inspector"
                onClick={() => setSelected(index)}
                onPointerEnter={() => setHovered(index)}
                onPointerLeave={() => setHovered(null)}
                onFocus={() => setHovered(index)}
                onBlur={() => setHovered(null)}
              >
                <node.icon size={index === 1 ? 27 : 21} strokeWidth={1.3} />
                <strong>{node.name}</strong>
                <span>{node.kind}</span>
                <i className="node-port" aria-hidden="true" />
              </button>
            ))}
          </div>
          <div className="topology-legend">
            <span>
              <i /> COMPOSANT SÉLECTIONNÉ
            </span>
            <span>
              CLIQUER POUR EXPLORER <ArrowUpRight size={11} />
            </span>
          </div>
        </div>
        <aside
          className="architecture-inspector"
          id="architecture-inspector"
          aria-live="polite"
          aria-atomic="true"
        >
          <div className="inspector-id">
            <span>DÉTAIL DU COMPOSANT</span>
            <span>0{selected + 1}</span>
          </div>
          <detail.icon size={30} strokeWidth={1.2} />
          <h3>{detail.name}</h3>
          <p>{detail.detail}</p>
          <div className="inspector-tags">
            {detail.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <div className="inspector-project">
            <span>{architecture.project}</span>
            <a href={architecture.href}>
              Voir le contexte <ArrowUpRight size={15} />
            </a>
          </div>
        </aside>
      </div>
      <div className="architecture-caption">
        <h3>{architecture.title}</h3>
        <p>{architecture.description}</p>
      </div>
    </div>
  );
}
