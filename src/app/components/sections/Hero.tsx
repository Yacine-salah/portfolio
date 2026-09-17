import PortraitScene from "../motion/PortraitScene";
import Reveal from "../motion/Reveal";
import DepthSurface from "../motion/DepthSurface";
import MagneticLink from "../motion/MagneticLink";
import PersonalProject from "./PersonalProject";
import AnsibleProject from "./AnsibleProject";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Award,
  BookOpen,
  Cloud,
  GitBranch,
  Layers3,
  MapPin,
  Network,
  ShieldCheck,
  Terminal,
} from "lucide-react";

const expertise = [
  {
    number: "01",
    icon: Cloud,
    title: "Architecture cloud",
    text: "Des infrastructures pensées pour durer. De la migration à l’optimisation, sur GCP et OCI.",
    tags: "GCP / OCI / TERRAFORM",
  },
  {
    number: "02",
    icon: GitBranch,
    title: "DevOps & automatisation",
    text: "Du code à la production, des déploiements reproductibles et des équipes qui avancent ensemble.",
    tags: "GITLAB CI/CD / KUBERNETES / DOCKER",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Fiabilité & observabilité",
    text: "Comprendre ce qui se passe, anticiper les incidents et garder la maîtrise des environnements.",
    tags: "GRAFANA / PYTHON / CLOUD LOGGING",
  },
];

export default function Hero() {
  return (
    <>
      <section className="hero shell" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="tiny-cross" aria-hidden="true">
              +
            </span>{" "}
            INGÉNIEUR CLOUD / DEVOPS / SYSOPS
          </p>
          <h1 id="hero-title">
            Le cloud.
            <br />
            Le code.
            <br />
            <span>Le concret.</span>
          </h1>
          <p className="hero-description">
            Je suis <strong>Yacine Salah.</strong> Je conçois des
            infrastructures fiables et j’automatise ce qui peut l’être. Pour que
            vos équipes se concentrent sur ce qui compte.
          </p>
          <div className="hero-actions">
            <MagneticLink
              href="#case-studies"
              className="button button-primary"
            >
              Explorer mes projets <ArrowUpRight size={18} />
            </MagneticLink>
            <a href="mailto:yacine.salah77@gmail.com" className="text-link">
              Faisons connaissance <ArrowRight size={17} />
            </a>
          </div>
          <div className="hero-location">
            <MapPin size={14} /> Bondoufle, Île-de-France{" "}
            <span aria-hidden="true">/</span> Cloud · DevOps · SysOps
          </div>
        </div>
        <PortraitScene />
        <div className="hero-bottom">
          <span>DE L’INFRASTRUCTURE À L’IMPACT</span>
          <button
            className="scroll-cue"
            onClick={() =>
              document.getElementById("expertise-preview")?.scrollIntoView({
                behavior: window.matchMedia("(prefers-reduced-motion: reduce)")
                  .matches
                  ? "instant"
                  : "smooth",
              })
            }
            aria-label="Découvrir mon expertise"
          >
            <ArrowDown size={17} />
          </button>
          <span>GCP / TERRAFORM / KUBERNETES</span>
        </div>
      </section>
      <div className="company-strip">
        <div className="shell company-inner">
          <p>
            MON PARCOURS
            <br />
            <span>AU SEIN DE LEURS ÉQUIPES</span>
          </p>
          <span className="company-name company-thales">THALES</span>
          <span className="company-name">
            Servier<span className="company-dot">.</span>
          </span>
          <span className="company-name company-carrefour">Carrefour</span>
          <span className="company-name company-bnp">BNP PARIBAS</span>
          <span className="company-name company-orange">Orange</span>
        </div>
      </div>
      <section
        className="shell section-space"
        id="expertise-preview"
        aria-labelledby="expertise-title"
      >
        <Reveal className="section-heading">
          <div>
            <p className="eyebrow">01 / CE QUE J’APPORTE</p>
            <h2 id="expertise-title">
              La complexité technique.
              <br />
              <span>Des solutions claires.</span>
            </h2>
          </div>
          <a href="#skills" className="text-link">
            Toute mon expertise <ArrowUpRight size={18} />
          </a>
        </Reveal>
        <div className="expertise-grid">
          {expertise.map((item, index) => (
            <Reveal key={item.number} delay={index}>
              <DepthSurface as="article" className="expertise-item">
                <div className="expertise-top">
                  <item.icon size={27} strokeWidth={1.5} />
                  <span>{item.number}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <div className="mono-tags">{item.tags}</div>
              </DepthSurface>
            </Reveal>
          ))}
        </div>
      </section>
      <section
        className="project-section section-space"
        aria-labelledby="project-title"
      >
        <div className="shell">
          <Reveal className="section-heading">
            <div>
              <p className="eyebrow">02 / DU TERRAIN, DU CONCRET</p>
              <h2 id="project-title">L’architecture prend vie.</h2>
            </div>
            <a href="#case-studies" className="text-link">
              Voir l’étude de cas <ArrowUpRight size={18} />
            </a>
          </Reveal>
          <AnsibleProject />
          <Reveal>
            <DepthSurface
              as="a"
              className="featured-project"
              href="#case-studies/crm"
              aria-label="Découvrir l’étude de cas : migration CRM vers le cloud hybride"
            >
              <div className="project-diagram" aria-hidden="true">
                <div className="diagram-topline">
                  <span>ARCHITECTURE / CLOUD HYBRIDE</span>
                  <Network size={17} />
                </div>
                <div className="diagram-source">
                  <Layers3 size={25} />
                  <span>
                    CRM UNICA<small>Infrastructure existante</small>
                  </span>
                </div>
                <div className="diagram-connector">
                  <span>MIGRATION & AUTOMATISATION</span>
                </div>
                <div className="diagram-targets">
                  <div>
                    <Cloud size={29} />
                    <strong>Google Cloud</strong>
                    <span>Applications</span>
                  </div>
                  <div>
                    <Terminal size={27} />
                    <strong>Oracle Cloud</strong>
                    <span>Données</span>
                  </div>
                </div>
                <div className="diagram-bottom">
                  <span>TERRAFORM</span>
                  <span>GITLAB CI/CD</span>
                  <span>OBSERVABILITÉ</span>
                </div>
              </div>
              <div className="project-copy">
                <span className="project-kicker">
                  CARREFOUR / CLOUD & DEVOPS
                </span>
                <h3>
                  Un CRM critique. <br />
                  Un nouveau terrain <br />
                  dans le cloud.
                </h3>
                <p>
                  Accompagner la migration d’une infrastructure on-premise vers
                  GCP et OCI, et repenser la chaîne de déploiement.
                </p>
                <div className="project-tags">
                  <span>Cloud hybride</span>
                  <span>Infrastructure as Code</span>
                  <span>CI/CD</span>
                </div>
                <span className="project-link">
                  Découvrir le projet <ArrowUpRight size={21} />
                </span>
              </div>
            </DepthSurface>
          </Reveal>
          <PersonalProject headingAs="h3" />
        </div>
      </section>
      <section className="shell section-space" aria-labelledby="career-title">
        <Reveal className="section-heading">
          <div>
            <p className="eyebrow">03 / MON FIL CONDUCTEUR</p>
            <h2 id="career-title">Faire avancer la production.</h2>
          </div>
          <a href="#experience" className="text-link">
            Le parcours complet <ArrowUpRight size={18} />
          </a>
        </Reveal>
        <div className="career-list">
          {[
            {
              company: "Thales",
              role: "Ingénieur SysOps",
              text: "Solution full Ansible pour l’infrastructure des contrôleurs aériens, développée en équipe de quatre.",
              tag: "SYSOPS & ANSIBLE",
            },
            {
              company: "Servier",
              role: "Ingénieur Cloud / DataOps",
              text: "Infrastructure as Code, observabilité et automatisation sur GCP.",
              tag: "CLOUD & DATA",
            },
            {
              company: "Carrefour",
              role: "Ingénieur Cloud DevOps",
              text: "Migration cloud hybride, CI/CD et release management.",
              tag: "CLOUD & DELIVERY",
            },
            {
              company: "BNP Paribas",
              role: "Chef de projet technique",
              text: "Coordination technique et mise en production d’applications.",
              tag: "PRODUCTION & PROJETS",
            },
          ].map((item, index) => (
            <Reveal key={item.company}>
              <a href="#experience" className="career-row">
                <span className="career-index">0{index + 1}</span>
                <h3>{item.company}</h3>
                <div>
                  <h4>{item.role}</h4>
                  <p>{item.text}</p>
                </div>
                <span className="career-tag">{item.tag}</span>
                <ArrowUpRight size={20} />
              </a>
            </Reveal>
          ))}
        </div>
      </section>
      <section
        className="shell knowledge-section"
        aria-labelledby="knowledge-title"
      >
        <div className="knowledge-copy">
          <p className="eyebrow">04 / APPRENDRE & TRANSMETTRE</p>
          <h2 id="knowledge-title">
            La connaissance
            <br />
            se partage.
          </h2>
          <p>
            Écrire sur le DevOps, continuer à se former et garder un œil sur les
            évolutions de notre métier.
          </p>
        </div>
        <div className="knowledge-links">
          <a
            href="https://www.amazon.fr/dp/B0CGWN1PCK"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BookOpen size={24} />
            <span>
              <strong>Mon livre DevOps</strong>
              <small>Du terrain aux pages. À découvrir sur Amazon.</small>
            </span>
            <ArrowUpRight size={20} />
          </a>
          <a
            href="https://www.cloudskillsboost.google/public_profiles/c3800e34-0c7d-44d8-9ee7-418a32cb2389"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Award size={24} />
            <span>
              <strong>Mon parcours Google Skills</strong>
              <small>Formations, badges et apprentissage continu.</small>
            </span>
            <ArrowUpRight size={20} />
          </a>
          <a href="#tech-watch">
            <Network size={24} />
            <span>
              <strong>Mes sources de veille</strong>
              <small>Cloud, DevOps et automatisation.</small>
            </span>
            <ArrowUpRight size={20} />
          </a>
        </div>
      </section>
    </>
  );
}
