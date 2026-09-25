"use client";
import { useState } from "react";
import Image from "next/image";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  ChevronDown,
  Cloud,
  Code2,
  GitBranch,
  MapPin,
  Network,
  Terminal,
} from "lucide-react";
import Reveal from "../motion/Reveal";
import DepthSurface from "../motion/DepthSurface";
import MagneticLink from "../motion/MagneticLink";
import { useMotionSettings } from "../motion/MotionProvider";
import ArchitectureExplorer from "./ArchitectureExplorer";
import AnsibleDemo from "./AnsibleDemo";

const projects = [
  {
    index: "01",
    company: "THALES",
    title: "Automatiser une infrastructure de contrôle aérien.",
    description:
      "Développement d’une solution full Ansible pour gérer l’infrastructure des contrôleurs aériens, au sein d’une équipe de quatre personnes.",
    tags: ["Ansible", "SysOps", "Équipe de 4"],
    href: "#case-studies/thales",
    icon: Network,
  },
  {
    index: "02",
    company: "CARREFOUR",
    title: "Faire évoluer un CRM vers le cloud hybride.",
    description:
      "Migration depuis une infrastructure on-premise vers GCP et OCI. Infrastructure as Code, chaîne CI/CD et accompagnement de la mise en production.",
    tags: ["GCP / OCI", "Terraform", "GitLab CI/CD"],
    href: "#case-studies/crm",
    icon: Cloud,
  },
];
const career = [
  {
    company: "Thales",
    role: "Ingénieur SysOps",
    scope: "Automatisation des infrastructures",
    tech: "ANSIBLE",
  },
  {
    company: "Servier",
    role: "Ingénieur Cloud / DataOps",
    scope: "Cloud, observabilité et intégrations",
    tech: "GCP / PYTHON",
  },
  {
    company: "Carrefour",
    role: "Ingénieur Cloud DevOps",
    scope: "Migration hybride et livraison",
    tech: "GCP / OCI",
  },
  {
    company: "BNP Paribas",
    role: "Chef de projet technique",
    scope: "Coordination et mise en production",
    tech: "PRODUCTION",
  },
];

export default function Hero() {
  const { enabled } = useMotionSettings();
  const [labOpen, setLabOpen] = useState(false);
  return (
    <>
      <section id="home" className="hero shell" aria-labelledby="hero-title">
        <div className="hero-grid-lines" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div className="hero-layout">
          <div className="hero-copy">
            <p className="eyebrow hero-eyebrow">
              <span className="coral-square" /> YACINE SALAH / INGÉNIEUR
            </p>
            <h1 id="hero-title">
              INFRASTRUCTURE
              <br />
              <span className="hero-amp">&</span> <span>CLOUD</span>
              <span className="hero-period">.</span>
            </h1>
            <p className="hero-specialty">
              Architecture · Automatisation · Production
            </p>
            <p className="hero-description">
              Ingénieur SysOps chez <strong>Thales</strong>. Je conçois,
              automatise et exploite des infrastructures, des systèmes critiques
              aux plateformes cloud GCP et OCI.
            </p>
            <div className="hero-actions">
              <MagneticLink
                href="#case-studies"
                className="button button-primary"
              >
                Voir mes projets <ArrowUpRight size={17} />
              </MagneticLink>
              <a href="mailto:yacine.salah77@gmail.com" className="text-link">
                Me contacter <ArrowUpRight size={16} />
              </a>
            </div>
            <div className="hero-context">
              <span>
                <MapPin size={12} /> Bondoufle, France
              </span>
              <span className="hero-divider" />
              <span>Cloud · DevOps · SysOps</span>
            </div>
          </div>
          <figure className="profile-figure">
            <DepthSurface className="profile-photo">
              <Image
                src="/images/yacine-portrait-studio.png"
                alt="Portrait professionnel de Yacine Salah"
                width={1122}
                height={1402}
                priority
                sizes="(max-width: 700px) 82vw, (max-width: 1100px) 36vw, 390px"
              />
              <span className="profile-corner corner-tl" />
              <span className="profile-corner corner-tr" />
              <span className="profile-corner corner-bl" />
              <span className="profile-corner corner-br" />
            </DepthSurface>
            <figcaption>
              <strong>Yacine Salah</strong>
              <span>INGÉNIEUR SYSOPS — THALES</span>
            </figcaption>
            <span className="profile-edge-label" aria-hidden="true">
              INFRASTRUCTURE / CLOUD / AUTOMATION
            </span>
          </figure>
        </div>
        <div className="hero-bottom">
          <span className="hero-stack">
            GCP <i>/</i> OCI <i>/</i> ANSIBLE <i>/</i> TERRAFORM <i>/</i>{" "}
            KUBERNETES
          </span>
          <button
            onClick={() =>
              document
                .getElementById("architecture")
                ?.scrollIntoView({ behavior: enabled ? "smooth" : "instant" })
            }
          >
            EXPLORER L’ARCHITECTURE <ArrowDown size={15} />
          </button>
        </div>
      </section>
      <section
        className="architecture-section shell section-space"
        id="architecture"
        aria-labelledby="architecture-title"
      >
        <Reveal className="section-heading">
          <div>
            <p className="eyebrow">ARCHITECTURE / VUE D’ENSEMBLE</p>
            <h2 id="architecture-title">Les systèmes, de l’intérieur.</h2>
          </div>
          <p className="section-aside">
            Trois approches issues de mon parcours.
            <br />
            Sélectionnez un composant pour l’explorer.
          </p>
        </Reveal>
        <Reveal>
          <ArchitectureExplorer />
        </Reveal>
      </section>
      <section className="projects-section" aria-labelledby="projects-title">
        <div className="shell section-space">
          <Reveal className="section-heading">
            <div>
              <p className="eyebrow">PROJETS SÉLECTIONNÉS</p>
              <h2 id="projects-title">Du code à l’infrastructure.</h2>
            </div>
            <a href="#case-studies" className="text-link">
              Toutes les études de cas <ArrowUpRight size={17} />
            </a>
          </Reveal>
          <div className="project-list">
            {projects.map((project) => (
              <Reveal key={project.company}>
                <a href={project.href} className="engineering-project">
                  <div className="project-identity">
                    <span className="project-index">/{project.index}</span>
                    <span>{project.company}</span>
                    <project.icon size={58} strokeWidth={0.8} />
                  </div>
                  <div className="project-summary">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="project-tags">
                      {project.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                  <span className="project-open">
                    <ArrowUpRight size={23} />
                    <span>ÉTUDE DE CAS</span>
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <a
              className="blockchain-project"
              href="https://whytheblockchain.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="chain-mark" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <div>
                <p className="eyebrow">PROJET PERSONNEL</p>
                <h3>Why the Blockchain</h3>
                <p>
                  Mon site pour comprendre la blockchain, les cryptomonnaies et
                  le Web3.
                </p>
              </div>
              <span className="blockchain-link">
                whytheblockchain.com <ArrowUpRight size={20} />
                <span className="sr-only"> — nouvel onglet</span>
              </span>
            </a>
          </Reveal>
        </div>
      </section>
      <section
        className="shell practice-section section-space"
        aria-labelledby="practice-title"
      >
        <Reveal className="practice-copy">
          <p className="eyebrow">MÉTHODE DE TRAVAIL</p>
          <h2 id="practice-title">
            Concevoir.
            <br />
            Automatiser.
            <br />
            <span>Exploiter.</span>
          </h2>
          <a href="#skills" className="text-link">
            Mon environnement technique <ArrowUpRight size={17} />
          </a>
        </Reveal>
        <div className="practice-details">
          <Reveal>
            <article>
              <span>01</span>
              <div>
                <h3>Penser l’architecture</h3>
                <p>
                  Comprendre les contraintes, les dépendances et les usages
                  avant de choisir les services. GCP, OCI et systèmes existants
                  font partie du même ensemble.
                </p>
              </div>
              <Cloud size={20} />
            </article>
          </Reveal>
          <Reveal>
            <article>
              <span>02</span>
              <div>
                <h3>Décrire l’infrastructure dans le code</h3>
                <p>
                  Utiliser Ansible et Terraform pour rendre les changements
                  reproductibles. Versionner, relire et intégrer les
                  déploiements dans une chaîne CI/CD.
                </p>
              </div>
              <GitBranch size={20} />
            </article>
          </Reveal>
          <Reveal>
            <article>
              <span>03</span>
              <div>
                <h3>Préparer la production</h3>
                <p>
                  Relier logs, supervision et alertes aux pratiques des équipes.
                  Documenter les choix pour faciliter l’exploitation et la
                  transmission.
                </p>
              </div>
              <Terminal size={20} />
            </article>
          </Reveal>
        </div>
      </section>
      <section className="lab-section shell" aria-label="Démonstration Ansible">
        <button
          className="lab-toggle"
          aria-expanded={labOpen}
          aria-controls="ansible-lab"
          onClick={() => setLabOpen(!labOpen)}
        >
          <span className="lab-toggle-icon">
            <Code2 size={22} />
          </span>
          <span>
            <strong>Remettre trois serveurs en conformité.</strong>
            <small>
              Prévisualiser, appliquer, puis simuler un service arrêté.
            </small>
          </span>
          <span className="lab-toggle-action">
            {labOpen ? "FERMER" : "OUVRIR LE LAB"}
            <ChevronDown size={17} />
          </span>
        </button>
        {labOpen && (
          <div id="ansible-lab" className="lab-content">
            <AnsibleDemo />
          </div>
        )}
      </section>
      <section
        className="shell career-section section-space"
        aria-labelledby="career-title"
      >
        <Reveal className="section-heading">
          <div>
            <p className="eyebrow">PARCOURS</p>
            <h2 id="career-title">Des environnements exigeants.</h2>
          </div>
          <a href="#experience" className="text-link">
            Détail des missions <ArrowUpRight size={17} />
          </a>
        </Reveal>
        <div className="career-list">
          {career.map((item, index) => (
            <Reveal key={item.company}>
              <a className="career-row" href="#experience">
                <span className="career-index">0{index + 1}</span>
                <h3>{item.company}</h3>
                <div>
                  <h4>{item.role}</h4>
                  <p>{item.scope}</p>
                </div>
                <span className="career-tech">{item.tech}</span>
                <ArrowUpRight size={20} />
              </a>
            </Reveal>
          ))}
        </div>
      </section>
      <section
        className="knowledge-section shell"
        aria-labelledby="resources-title"
      >
        <div>
          <p className="eyebrow">ÉCRIRE & APPRENDRE</p>
          <h2 id="resources-title">Notes de terrain.</h2>
        </div>
        <div className="knowledge-links">
          <a
            href="https://www.amazon.fr/dp/B0CGWN1PCK"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BookOpen size={21} />
            <span>
              <strong>Mon livre DevOps</strong>
              <small>Retours de pratique · Amazon</small>
            </span>
            <ArrowUpRight size={18} />
            <span className="sr-only">Nouvel onglet</span>
          </a>
          <a
            href="https://www.cloudskillsboost.google/public_profiles/c3800e34-0c7d-44d8-9ee7-418a32cb2389"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Cloud size={21} />
            <span>
              <strong>Google Skills</strong>
              <small>Formations et badges</small>
            </span>
            <ArrowUpRight size={18} />
            <span className="sr-only">Nouvel onglet</span>
          </a>
          <a href="#tech-watch">
            <ArrowRight size={21} />
            <span>
              <strong>Veille technique</strong>
              <small>Cloud, DevOps, automatisation</small>
            </span>
            <ArrowUpRight size={18} />
          </a>
        </div>
      </section>
    </>
  );
}
