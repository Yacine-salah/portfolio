"use client";
import { useRef } from "react";
import Image from "next/image";
import { m, useScroll, useTransform } from "motion/react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Asterisk,
  BookOpen,
  MapPin,
  Plus,
} from "lucide-react";
import Reveal from "../motion/Reveal";
import DepthSurface from "../motion/DepthSurface";
import MagneticLink from "../motion/MagneticLink";
import { useMotionSettings } from "../motion/MotionProvider";
import InfraPlayground from "./InfraPlayground";
import AnsibleDemo from "./AnsibleDemo";

const career = [
  {
    company: "Thales",
    role: "Ingénieur SysOps",
    detail: "Automatisation Ansible · équipe de 4",
    current: true,
  },
  {
    company: "Servier",
    role: "Ingénieur Cloud / DataOps",
    detail: "GCP · Infrastructure as Code · observabilité",
  },
  {
    company: "Carrefour",
    role: "Ingénieur Cloud DevOps",
    detail: "Cloud hybride · CI/CD · release management",
  },
  {
    company: "BNP Paribas",
    role: "Chef de projet technique",
    detail: "Coordination technique · production",
  },
];
export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const { enabled } = useMotionSettings();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -35]);
  const stampRotate = useTransform(scrollYProgress, [0, 1], [-10, 32]);
  return (
    <>
      <section
        className="hero shell"
        ref={heroRef}
        aria-labelledby="hero-title"
      >
        <div className="hero-topline">
          <p className="eyebrow">
            YACINE SALAH — INGÉNIEUR CLOUD, DEVOPS & SYSOPS
          </p>
          <span className="hero-edition">PORTFOLIO / 2026</span>
        </div>
        <div className="hero-layout">
          <div className="hero-copy">
            <m.h1 id="hero-title" style={{ y: enabled ? titleY : 0 }}>
              DU CODE.
              <br />
              <em>au concret.</em>
              <span className="title-period" aria-hidden="true">
                *
              </span>
            </m.h1>
            <div className="hero-introduction">
              <span className="intro-line" aria-hidden="true" />
              <p>
                Les bonnes idées méritent
                <br />
                des <strong>infrastructures qui tiennent.</strong>
                <br />
                Je construis le lien entre les deux.
              </p>
            </div>
            <div className="hero-actions">
              <MagneticLink
                href="#case-studies"
                className="button button-primary"
              >
                Explorer mes projets <ArrowUpRight size={18} />
              </MagneticLink>
              <a href="mailto:yacine.salah77@gmail.com" className="text-link">
                Faisons connaissance <ArrowUpRight size={17} />
              </a>
            </div>
            <div className="hero-note">
              <m.span
                className="hero-stamp"
                style={{ rotate: enabled ? stampRotate : -10 }}
                aria-hidden="true"
              >
                <Asterisk size={27} />
                <span>
                  MADE OF
                  <br />
                  CODE & CAFÉ
                </span>
              </m.span>
              <span>
                De la curiosité.
                <br />
                Du collectif. Et du concret.
              </span>
            </div>
          </div>
          <InfraPlayground />
        </div>
        <div className="hero-bottom">
          <span>
            <MapPin size={13} /> BONDOUFLE, FRANCE
          </span>
          <button
            onClick={() =>
              document
                .getElementById("selected-work")
                ?.scrollIntoView({ behavior: enabled ? "smooth" : "instant" })
            }
          >
            LA SUITE, PAR ICI <ArrowDown size={17} />
          </button>
          <span>CONCEVOIR. AUTOMATISER. FIABILISER.</span>
        </div>
      </section>
      <div className="company-strip">
        <div className="shell company-inner">
          <p>
            UNE EXPÉRIENCE
            <br />
            <span>CONSTRUITE CHEZ</span>
          </p>
          <span>THALES</span>
          <span className="company-servier">Servier.</span>
          <span>Carrefour</span>
          <span className="company-bnp">BNP PARIBAS</span>
          <span>Orange</span>
        </div>
      </div>
      <section
        className="shell work-section section-space"
        id="selected-work"
        aria-labelledby="work-title"
      >
        <Reveal className="section-heading">
          <div>
            <p className="eyebrow">01 / QUELQUES TERRAINS DE JEU</p>
            <h2 id="work-title">
              Du sérieux.
              <br />
              <em>Jamais ennuyeux.</em>
            </h2>
          </div>
          <p className="section-aside">
            Des systèmes critiques aux projets personnels.
            <br />
            Trois façons de transformer une idée.
          </p>
        </Reveal>
        <div className="project-gallery">
          <Reveal className="project-main">
            <DepthSurface
              as="a"
              href="#case-studies/thales"
              className="project-poster poster-thales"
              aria-label="Découvrir le projet Thales : infrastructure full Ansible"
            >
              <div className="poster-top">
                <span>01 / THALES</span>
                <ArrowUpRight size={25} />
              </div>
              <div className="thales-art" aria-hidden="true">
                <span className="poster-big-type">
                  PLAY.
                  <br />
                  BOOK.
                  <br />
                  <span>REPEAT.</span>
                </span>
                <div className="orbit-symbol">
                  <span />
                  <span />
                  <span />
                  <Asterisk size={88} strokeWidth={1} />
                </div>
                <span className="art-label">
                  HUMAN TEAM.
                  <br />
                  AUTOMATED SYSTEMS.
                </span>
              </div>
              <div className="poster-bottom">
                <div>
                  <span className="poster-category">
                    SYSOPS / AUTOMATISATION
                  </span>
                  <h3>
                    Une infrastructure.
                    <br />
                    Toute la force d’Ansible.
                  </h3>
                </div>
                <span className="poster-count">
                  4<span>PERSONNES</span>
                </span>
              </div>
              <p className="poster-description">
                Une solution full Ansible pour l’infrastructure des contrôleurs
                aériens, développée en équipe.
              </p>
            </DepthSurface>
          </Reveal>
          <Reveal className="project-secondary" delay={1}>
            <DepthSurface
              as="a"
              href="#case-studies/crm"
              className="project-poster poster-cloud"
              aria-label="Découvrir le projet Carrefour : migration CRM vers GCP et OCI"
            >
              <div className="poster-top">
                <span>02 / CARREFOUR</span>
                <ArrowUpRight size={25} />
              </div>
              <div className="cloud-art" aria-hidden="true">
                <span className="cloud-node">GCP</span>
                <span className="cloud-connection">
                  <Plus size={27} />
                </span>
                <span className="cloud-node">OCI</span>
              </div>
              <div className="poster-bottom">
                <div>
                  <span className="poster-category">CLOUD HYBRIDE / CI/CD</span>
                  <h3>
                    Un CRM.
                    <br />
                    Un nouvel horizon.
                  </h3>
                </div>
                <span className="project-circle">
                  <ArrowRight size={22} />
                </span>
              </div>
            </DepthSurface>
          </Reveal>
          <Reveal className="project-personal" delay={2}>
            <DepthSurface
              as="a"
              href="https://whytheblockchain.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-poster poster-blockchain"
              aria-label="Découvrir Why the Blockchain — nouvel onglet"
            >
              <div className="poster-top">
                <span>03 / PROJET PERSONNEL</span>
                <ArrowUpRight size={25} />
              </div>
              <div className="blockchain-art" aria-hidden="true">
                <span>
                  WHY<span className="why-star">*</span>
                </span>
                <em>the blockchain?</em>
              </div>
              <div className="poster-bottom">
                <h3>La curiosité se partage.</h3>
                <span className="poster-category">WEB3 / TRANSMISSION</span>
              </div>
            </DepthSurface>
          </Reveal>
        </div>
        <a href="#case-studies" className="work-all-link">
          Les coulisses des projets <ArrowUpRight size={19} />
        </a>
      </section>
      <section className="about-section" aria-labelledby="about-title">
        <div className="shell about-grid">
          <Reveal className="about-portrait">
            <div className="portrait-paper">
              <p className="eyebrow">L’HUMAIN DERRIÈRE LE CODE</p>
              <Image
                src="/images/photo-profil.png"
                alt="Yacine Salah"
                width={299}
                height={358}
                sizes="(max-width: 760px) 260px, 330px"
              />
              <span className="portrait-signature">Yacine.</span>
              <span className="portrait-pin" aria-hidden="true">
                +
              </span>
            </div>
            <span className="portrait-caption">
              INGÉNIEUR. CURIEUX. TOUJOURS EN MOUVEMENT.
            </span>
          </Reveal>
          <Reveal className="about-copy">
            <p className="eyebrow">02 / MA FAÇON DE FAIRE</p>
            <h2 id="about-title">
              La tête dans
              <br />
              le cloud.
              <br />
              <em>Les pieds sur terre.</em>
            </h2>
            <p>
              Je suis Yacine. J’aime comprendre les systèmes, simplifier ce qui
              se répète et construire avec les autres. Mon terrain : le cloud,
              l’automatisation et les environnements de production.
            </p>
            <div className="about-principles">
              <span>
                <span>01</span>Concevoir pour durer.
              </span>
              <span>
                <span>02</span>Automatiser avec méthode.
              </span>
              <span>
                <span>03</span>Transmettre pour avancer.
              </span>
            </div>
            <a href="#skills" className="text-link">
              Découvrir mes outils <ArrowUpRight size={19} />
            </a>
          </Reveal>
        </div>
      </section>
      <section
        className="shell lab-section section-space"
        aria-labelledby="lab-title"
      >
        <Reveal className="lab-copy">
          <p className="eyebrow">03 / UN PEU DE PRATIQUE</p>
          <h2 id="lab-title">
            Moins de clics.
            <br />
            <em>Plus de maîtrise.</em>
          </h2>
          <p>
            L’automatisation, c’est aussi savoir ne rien changer quand tout est
            déjà conforme. Lancez ce mini-scénario Ansible, puis relancez-le :
            la différence est là.
          </p>
          <span className="lab-handnote">
            À vous de jouer <ArrowUpRight size={30} strokeWidth={1} />
          </span>
        </Reveal>
        <Reveal delay={1}>
          <AnsibleDemo />
        </Reveal>
      </section>
      <section className="career-section" aria-labelledby="career-title">
        <div className="shell section-space">
          <Reveal className="section-heading">
            <div>
              <p className="eyebrow">04 / LE PARCOURS</p>
              <h2 id="career-title">
                Différents univers.
                <br />
                <em>Le même engagement.</em>
              </h2>
            </div>
            <a href="#experience" className="text-link">
              Le parcours complet <ArrowUpRight size={18} />
            </a>
          </Reveal>
          <div className="career-list">
            {career.map((item, index) => (
              <Reveal key={item.company}>
                <a href="#experience" className="career-row">
                  <span className="career-index">0{index + 1}</span>
                  <h3>
                    {item.company}
                    {item.current && (
                      <span className="career-current">EN POSTE</span>
                    )}
                  </h3>
                  <div>
                    <h4>{item.role}</h4>
                    <p>{item.detail}</p>
                  </div>
                  <ArrowUpRight size={24} />
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section
        className="shell knowledge-section section-space"
        aria-labelledby="knowledge-title"
      >
        <Reveal>
          <p className="eyebrow">05 / LA CURIOSITÉ, ÇA S’ENTRETIENT</p>
          <h2 id="knowledge-title">
            Toujours
            <br />
            <em>en exploration.</em>
          </h2>
          <p>
            Lire, écrire, expérimenter.
            <br />
            Et faire circuler ce qu’on apprend.
          </p>
        </Reveal>
        <div className="knowledge-links">
          <a
            href="https://www.amazon.fr/dp/B0CGWN1PCK"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BookOpen size={24} />
            <span>
              <strong>Mon livre DevOps</strong>
              <small>Du terrain aux pages · Amazon</small>
            </span>
            <ArrowUpRight size={23} />
            <span className="sr-only">Nouvel onglet</span>
          </a>
          <a
            href="https://www.cloudskillsboost.google/public_profiles/c3800e34-0c7d-44d8-9ee7-418a32cb2389"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="knowledge-number">G</span>
            <span>
              <strong>Apprendre, encore.</strong>
              <small>Mon parcours Google Skills</small>
            </span>
            <ArrowUpRight size={23} />
            <span className="sr-only">Nouvel onglet</span>
          </a>
          <a href="#tech-watch">
            <Asterisk size={27} />
            <span>
              <strong>Garder un temps d’avance.</strong>
              <small>Mes sources de veille</small>
            </span>
            <ArrowUpRight size={23} />
          </a>
        </div>
      </section>
    </>
  );
}
