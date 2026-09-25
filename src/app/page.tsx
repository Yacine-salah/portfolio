"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Linkedin } from "lucide-react";
import {
  MotionProvider,
  MotionPreference,
} from "@/app/components/motion/MotionProvider";
import PageTransition from "@/app/components/motion/PageTransition";
import MagneticLink from "@/app/components/motion/MagneticLink";
import Navigation from "@/app/components/layout/Navigation";
import Hero from "@/app/components/sections/Hero";
import Skills from "@/app/components/sections/Skills";
import Experience from "@/app/components/sections/Experience";
import Education from "@/app/components/sections/Education";
import CaseStudies from "@/app/components/sections/CaseStudies";
import TechWatch from "@/app/components/sections/TechWatch";
import type { TabType } from "@/app/types";

const tabIds: TabType[] = [
  "home",
  "skills",
  "experience",
  "education",
  "case-studies",
  "tech-watch",
];
const headings: Record<
  Exclude<TabType, "home">,
  { index: string; title: string; text: string }
> = {
  skills: {
    index: "01 / EXPERTISE",
    title: "Expertise technique.",
    text: "Du système à la plateforme cloud, les technologies avec lesquelles je construis et fais évoluer les infrastructures.",
  },
  experience: {
    index: "02 / PARCOURS",
    title: "Expériences en production.",
    text: "Des systèmes critiques aux plateformes cloud : un parcours au croisement de la technique, des équipes et de la production.",
  },
  "case-studies": {
    index: "03 / PROJETS",
    title: "Projets d’infrastructure.",
    text: "Un regard sur les enjeux, les choix techniques et les résultats de mes projets.",
  },
  education: {
    index: "04 / FORMATION",
    title: "Formation & apprentissage.",
    text: "Des bases solides en systèmes et réseaux, enrichies par une pratique continue du cloud.",
  },
  "tech-watch": {
    index: "05 / VEILLE",
    title: "Veille technique.",
    text: "Mes sources pour suivre les évolutions du cloud, du DevOps et de l’automatisation.",
  },
};

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabType>("home");
  const [activeCase, setActiveCase] = useState(0);
  const mainRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const syncHash = (event?: HashChangeEvent) => {
      const [section, project] = window.location.hash.slice(1).split("/");
      const hash = section as TabType;
      setActiveTab(tabIds.includes(hash) ? hash : "home");
      setActiveCase(project === "crm" ? 1 : 0);
      window.scrollTo({ top: 0, behavior: "instant" });
      if (event) mainRef.current?.focus({ preventScroll: true });
    };
    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, []);
  return (
    <MotionProvider>
      <a
        className="skip-link"
        href="#main-content"
        onClick={(event) => {
          event.preventDefault();
          mainRef.current?.focus();
        }}
      >
        Aller au contenu
      </a>
      <Navigation activeTab={activeTab} />
      <main ref={mainRef} id="main-content" tabIndex={-1} className="site-main">
        <PageTransition pageKey={activeTab}>
          {activeTab === "home" ? (
            <Hero />
          ) : (
            <div className="detail-page">
              <div className="shell detail-intro">
                <p className="eyebrow">{headings[activeTab].index}</p>
                <h1>{headings[activeTab].title}</h1>
                <p>{headings[activeTab].text}</p>
              </div>
              {activeTab === "skills" && <Skills />}
              {activeTab === "experience" && <Experience />}
              {activeTab === "education" && <Education />}
              {activeTab === "case-studies" && (
                <CaseStudies activeCase={activeCase} />
              )}
              {activeTab === "tech-watch" && <TechWatch />}
            </div>
          )}
        </PageTransition>
      </main>
      <footer className="site-footer">
        <div className="shell">
          <div className="footer-top">
            <div>
              <p className="eyebrow">CONTACT / YACINE SALAH</p>
              <h2>
                Parlons de votre
                <br />
                <span>architecture.</span>
              </h2>
            </div>
            <MagneticLink
              href="mailto:yacine.salah77@gmail.com"
              className="contact-circle"
              label="Écrire à Yacine Salah"
            >
              <ArrowUpRight size={36} />
            </MagneticLink>
          </div>
          <div className="footer-bottom">
            <a className="brand footer-brand" href="#home">
              <Image
                src="/brand/ys-mark.svg"
                alt="Logo YS"
                width={36}
                height={36}
              />
              <span>YACINE SALAH</span>
            </a>
            <a href="mailto:yacine.salah77@gmail.com">
              yacine.salah77@gmail.com
            </a>
            <span>Bondoufle, Île-de-France</span>
            <MotionPreference />
            <a
              href="https://www.linkedin.com/in/yacine-salah-a0bb3176/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn — nouvel onglet"
            >
              <Linkedin size={19} />
            </a>
          </div>
        </div>
      </footer>
    </MotionProvider>
  );
}
