"use client";
import Reveal from "../motion/Reveal";
import DepthSurface from "../motion/DepthSurface";
import { useState } from "react";
import {
  Monitor,
  Terminal,
  Database,
  Shield,
  Cloud,
  GitBranch,
  Server,
  Clock,
  LineChart,
  Save,
  Settings,
  Globe,
  ChevronDown,
} from "lucide-react";
interface SkillCategory {
  title: string;
  icon: React.ElementType;
  skills: string[];
  color: string;
}
const VISIBLE_SKILLS = 4;
export default function Skills() {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const skillCategories: SkillCategory[] = [
    {
      title: "Systèmes d'Exploitation",
      icon: Monitor,
      skills: ["Linux", "AIX", "Windows"],
      color: "from-blue-500 to-blue-700",
    },
    {
      title: "Scripting & Langages",
      icon: Terminal,
      skills: ["Shell", "Korn Shell", "Python", "FastAPI", "Groovy", "YAML"],
      color: "from-green-500 to-emerald-700",
    },
    {
      title: "Cloud",
      icon: Cloud,
      skills: [
        "Google Cloud Platform (GCP)",
        "Oracle Cloud Infrastructure (OCI)",
      ],
      color: "from-purple-500 to-indigo-700",
    },
    {
      title: "DevOps Tools",
      icon: Settings,
      skills: [
        "Ansible",
        "Docker",
        "Jenkins",
        "Terraform",
        "Kubernetes",
        "Vagrant",
      ],
      color: "from-orange-500 to-red-700",
    },
    {
      title: "Bases de Données",
      icon: Database,
      skills: ["Oracle", "SQL Server", "MongoDB", "BigQuery"],
      color: "from-yellow-500 to-orange-700",
    },
    {
      title: "Sécurité",
      icon: Shield,
      skills: ["SSL", "SSH", "Firewall iptables", "Fail2ban"],
      color: "from-red-500 to-rose-700",
    },
    {
      title: "Versioning & CI/CD",
      icon: GitBranch,
      skills: ["GIT", "Bitbucket", "GitLab", "GitHub", "CI/CD"],
      color: "from-pink-500 to-purple-700",
    },
    {
      title: "Virtualisation",
      icon: Server,
      skills: ["VMware", "VirtualBox"],
      color: "from-teal-500 to-cyan-700",
    },
    {
      title: "Ordonnancement",
      icon: Clock,
      skills: ["TNG", "Autosys", "Dollars Universe"],
      color: "from-cyan-500 to-blue-700",
    },
    {
      title: "Supervision",
      icon: LineChart,
      skills: ["Nimsoft", "LogM", "Grafana", "Dynatrace"],
      color: "from-indigo-500 to-violet-700",
    },
    {
      title: "Sauvegarde",
      icon: Save,
      skills: ["TSM"],
      color: "from-violet-500 to-purple-700",
    },
    {
      title: "Web & Serveurs",
      icon: Globe,
      skills: [
        "WordPress",
        "Apache",
        "MySQL",
        "PhpMyAdmin",
        "WebSphere",
        "Tomcat",
      ],
      color: "from-emerald-500 to-green-700",
    },
  ];

  return (
    <div className="container py-12">
      <div className="skill-grid">
        {skillCategories.map((category, index) => {
          const expanded = activeCard === index;
          return (
            <Reveal key={category.title} delay={index % 3}>
              <DepthSurface as="article" className="skill-card">
                <h2>
                  <category.icon size={23} />
                  {category.title}
                </h2>
                <div className="skill-pills" id={`skills-${index}`}>
                  {(expanded
                    ? category.skills
                    : category.skills.slice(0, VISIBLE_SKILLS)
                  ).map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
                {category.skills.length > VISIBLE_SKILLS && (
                  <button
                    className="skill-expand"
                    aria-expanded={expanded}
                    aria-controls={`skills-${index}`}
                    onClick={() => setActiveCard(expanded ? null : index)}
                  >
                    {expanded
                      ? "Voir moins"
                      : `Voir ${category.skills.length - VISIBLE_SKILLS} de plus`}
                    <ChevronDown
                      size={15}
                      style={{
                        transform: expanded ? "rotate(180deg)" : undefined,
                      }}
                    />
                  </button>
                )}
              </DepthSurface>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
