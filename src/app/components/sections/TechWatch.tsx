"use client";
import DepthSurface from "../motion/DepthSurface";
import Reveal from "../motion/Reveal";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const categories = ["Toutes", "Cloud", "DevOps", "Automatisation"] as const;
const sources = [
  {
    name: "Google Cloud Blog",
    category: "Cloud",
    url: "https://cloud.google.com/blog",
    description:
      "Architecture, infrastructure et actualités de l’écosystème Google Cloud.",
  },
  {
    name: "AWS News Blog",
    category: "Cloud",
    url: "https://aws.amazon.com/blogs/aws/",
    description:
      "Les annonces et les évolutions des services Amazon Web Services.",
  },
  {
    name: "Kubernetes Blog",
    category: "DevOps",
    url: "https://kubernetes.io/blog/",
    description:
      "Orchestration, pratiques opérationnelles et vie de la communauté Kubernetes.",
  },
  {
    name: "GitLab Blog",
    category: "DevOps",
    url: "https://about.gitlab.com/blog/",
    description:
      "CI/CD, collaboration et pratiques de développement et de livraison.",
  },
  {
    name: "Docker Blog",
    category: "DevOps",
    url: "https://www.docker.com/blog/",
    description:
      "Conteneurs, environnements de développement et outils Docker.",
  },
  {
    name: "HashiCorp Blog",
    category: "Automatisation",
    url: "https://www.hashicorp.com/blog",
    description:
      "Infrastructure as Code, Terraform et gestion du cycle de vie des infrastructures.",
  },
];

export default function TechWatch() {
  const [category, setCategory] =
    useState<(typeof categories)[number]>("Toutes");
  const filtered = sources.filter(
    (source) => category === "Toutes" || source.category === category,
  );
  return (
    <div className="container py-12">
      <div className="resource-filters" aria-label="Filtrer les sources">
        {categories.map((item) => (
          <button
            key={item}
            aria-pressed={category === item}
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <p className="sr-only" role="status">
        {filtered.length} sources affichées
      </p>
      <div className="resource-grid">
        {filtered.map((source, index) => (
          <Reveal key={source.name} delay={index % 3}>
            <DepthSurface
              as="a"
              className="resource-card"
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <h2>{source.name}</h2>
                <ArrowUpRight size={19} />
              </div>
              <p>{source.description}</p>
              <span>{source.category}</span>
            </DepthSurface>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
