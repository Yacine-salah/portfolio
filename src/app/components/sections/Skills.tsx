'use client';

import React, { useState } from 'react';
import { 
  Monitor, Terminal, Database, Shield, Cloud, 
  GitBranch, Server, Clock, LineChart, Save,
  Settings, Globe
} from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ElementType;
  skills: string[];
  color: string;
}

const VISIBLE_SKILLS = 4; // Nombre de compétences visibles par défaut

const Skills = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const skillCategories: SkillCategory[] = [
    {
      title: 'Systèmes d\'Exploitation',
      icon: Monitor,
      skills: ['Linux', 'AIX', 'Windows'],
      color: 'from-blue-500 to-blue-700'
    },
    {
      title: 'Scripting & Langages',
      icon: Terminal,
      skills: ['Shell', 'Korn Shell', 'Python', 'FastAPI', 'Groovy', 'YAML'],
      color: 'from-green-500 to-emerald-700'
    },
    {
      title: 'Cloud',
      icon: Cloud,
      skills: ['Google Cloud Platform (GCP)', 'Oracle Cloud Infrastructure (OCI)'],
      color: 'from-purple-500 to-indigo-700'
    },
    {
      title: 'DevOps Tools',
      icon: Settings,
      skills: ['Ansible', 'Docker', 'Jenkins', 'Terraform', 'Kubernetes', 'Vagrant'],
      color: 'from-orange-500 to-red-700'
    },
    {
      title: 'Bases de Données',
      icon: Database,
      skills: ['Oracle', 'SQL Server', 'MongoDB', 'BigQuery'],
      color: 'from-yellow-500 to-orange-700'
    },
    {
      title: 'Sécurité',
      icon: Shield,
      skills: ['SSL', 'SSH', 'Firewall iptables', 'Fail2ban'],
      color: 'from-red-500 to-rose-700'
    },
    {
      title: 'Versioning & CI/CD',
      icon: GitBranch,
      skills: ['GIT', 'Bitbucket', 'GitLab', 'GitHub', 'CI/CD'],
      color: 'from-pink-500 to-purple-700'
    },
    {
      title: 'Virtualisation',
      icon: Server,
      skills: ['VMware', 'VirtualBox'],
      color: 'from-teal-500 to-cyan-700'
    },
    {
      title: 'Ordonnancement',
      icon: Clock,
      skills: ['TNG', 'Autosys', 'Dollars Universe'],
      color: 'from-cyan-500 to-blue-700'
    },
    {
      title: 'Supervision',
      icon: LineChart,
      skills: ['Nimsoft', 'LogM', 'Grafana', 'Dynatrace'],
      color: 'from-indigo-500 to-violet-700'
    },
    {
      title: 'Sauvegarde',
      icon: Save,
      skills: ['TSM'],
      color: 'from-violet-500 to-purple-700'
    },
    {
      title: 'Web & Serveurs',
      icon: Globe,
      skills: ['WordPress', 'Apache', 'MySQL', 'PhpMyAdmin', 'WebSphere', 'Tomcat'],
      color: 'from-emerald-500 to-green-700'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => {
          const needsExpansion = category.skills.length > VISIBLE_SKILLS;
          const visibleSkills = activeCard === index ? category.skills : category.skills.slice(0, VISIBLE_SKILLS);

          return (
            <div
              key={index}
              className="relative group h-full"
              onClick={() => needsExpansion && setActiveCard(activeCard === index ? null : index)}
            >
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${category.color} rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000`} />
              <div className="relative bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-gray-700 transition-all duration-300 h-full flex flex-col">
                {/* Titre et icône */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color} bg-opacity-10`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{category.title}</h3>
                </div>
                
                {/* Compétences */}
                <div className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {visibleSkills.map((skill, idx) => (
                      <span
                        key={idx}
                        className={`px-3 py-1 rounded-full text-sm bg-gradient-to-r ${category.color} bg-opacity-10 text-white
                          transform transition-all duration-300 hover:scale-105`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bouton Voir plus - affiché uniquement si nécessaire */}
                {needsExpansion && (
                  <button 
                    className="mt-4 text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                  >
                    {activeCard === index ? 'Voir moins' : `Voir ${category.skills.length - VISIBLE_SKILLS} de plus`}
                    <svg 
                      className={`w-4 h-4 transition-transform duration-300 ${
                        activeCard === index ? 'rotate-180' : ''
                      }`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;