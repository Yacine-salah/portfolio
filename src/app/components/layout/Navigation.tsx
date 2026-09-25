"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Menu, X } from "lucide-react";
import type { TabType } from "@/app/types";

const tabs: { id: TabType; label: string }[] = [
  { id: "home", label: "Accueil" },
  { id: "skills", label: "Expertise" },
  { id: "experience", label: "Parcours" },
  { id: "case-studies", label: "Projets" },
  { id: "education", label: "Formation" },
  { id: "tech-watch", label: "Veille" },
];

export default function Navigation({ activeTab }: { activeTab: TabType }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  return (
    <header
      className="site-header"
      onKeyDown={(event) => {
        if (event.key === "Escape" && menuOpen) {
          setMenuOpen(false);
          toggleRef.current?.focus();
        }
      }}
    >
      <div className="shell header-inner">
        <a
          href="#home"
          className="brand"
          aria-label="Yacine Salah — accueil"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/brand/ys-mark.svg"
            alt=""
            width={46}
            height={46}
            priority
          />
          <span>
            YACINE SALAH<span className="brand-caption">CLOUD & DEVOPS</span>
          </span>
        </a>
        <nav
          className={`main-nav ${menuOpen ? "is-open" : ""}`}
          id="main-navigation"
          aria-label="Navigation principale"
        >
          {tabs.map((tab) => (
            <a
              key={tab.id}
              href={`#${tab.id}`}
              aria-current={activeTab === tab.id ? "page" : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {tab.label}
            </a>
          ))}
          <a className="mobile-contact" href="mailto:yacine.salah77@gmail.com">
            Parlons de votre projet <ArrowUpRight size={16} />
          </a>
        </nav>
        <a className="header-contact" href="mailto:yacine.salah77@gmail.com">
          On échange <ArrowUpRight size={16} />
        </a>
        <button
          ref={toggleRef}
          className="menu-toggle"
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
}
