'use client';

import React, { useState } from 'react';
import { 
  Cloud,  
  CheckCircle2,
  AlertCircle,
  Lightbulb,
  ArrowRight
} from 'lucide-react';

interface CaseStudy {
  title: string;
  context: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  metrics: {
    label: string;
    value: string;
  }[];
}

const CaseStudies: React.FC = () => {
  const [activeCase, setActiveCase] = useState<number>(0);

  const cases: CaseStudy[] = [
    {
      title: "Migration CRM vers Cloud Hybride",
      context: "Migration d'un CRM critique depuis une infrastructure on-premise vers une architecture cloud hybride GCP/OCI",
      challenge: "Maintenir la continuité de service pendant la migration tout en gérant des contraintes de sécurité et de performance",
      solution: "Mise en place d'une stratégie de migration progressive avec une architecture hybride, utilisant Terraform pour l'IaC et une approche GitOps pour les déploiements",
      results: [
        "Migration réussie sans interruption de service",
        "Réduction des coûts d'infrastructure de 30%",
        "Amélioration des temps de déploiement de 60%",
        "Mise en place d'un système de monitoring avancé"
      ],
      technologies: [
        "Google Cloud Platform",
        "Oracle Cloud Infrastructure",
        "Terraform",
        "GitLab CI/CD",
        "Kubernetes"
      ],
      metrics: [
        { label: "Données migrées", value: "10 TB" },
        { label: "Temps de migration", value: "3 mois" },
        { label: "Disponibilité maintenue", value: "99.99%" }
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-blue-400 mb-8">Études de Cas</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Navigation des cas */}
        <div className="lg:col-span-1 space-y-4">
          {cases.map((caseStudy, index) => (
            <button
              key={index}
              onClick={() => setActiveCase(index)}
              className={`w-full text-left p-4 rounded-lg transition-all ${
                activeCase === index 
                  ? 'bg-blue-500/10 border-l-4 border-blue-500' 
                  : 'bg-gray-900/50 hover:bg-gray-900/80'
              }`}
            >
              <h3 className="font-bold text-white">{caseStudy.title}</h3>
            </button>
          ))}
        </div>

        {/* Détails du cas */}
        <div className="lg:col-span-2 bg-gray-900/50 rounded-lg p-6">
          <div className="space-y-6">
            {/* Contexte */}
            <div>
              <h3 className="flex items-center gap-2 text-lg font-semibold text-blue-400 mb-2">
                <Cloud className="w-5 h-5" />
                Contexte
              </h3>
              <p className="text-gray-300">{cases[activeCase].context}</p>
            </div>

            {/* Challenge */}
            <div>
              <h3 className="flex items-center gap-2 text-lg font-semibold text-blue-400 mb-2">
                <AlertCircle className="w-5 h-5" />
                Challenge
              </h3>
              <p className="text-gray-300">{cases[activeCase].challenge}</p>
            </div>

            {/* Solution */}
            <div>
              <h3 className="flex items-center gap-2 text-lg font-semibold text-blue-400 mb-2">
                <Lightbulb className="w-5 h-5" />
                Solution
              </h3>
              <p className="text-gray-300">{cases[activeCase].solution}</p>
            </div>

            {/* Métriques */}
            <div className="grid grid-cols-3 gap-4 py-4">
              {cases[activeCase].metrics.map((metric, index) => (
                <div key={index} className="bg-gray-800 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-blue-400">{metric.value}</div>
                  <div className="text-sm text-gray-400">{metric.label}</div>
                </div>
              ))}
            </div>

            {/* Résultats */}
            <div>
              <h3 className="flex items-center gap-2 text-lg font-semibold text-blue-400 mb-2">
                <CheckCircle2 className="w-5 h-5" />
                Résultats
              </h3>
              <ul className="space-y-2">
                {cases[activeCase].results.map((result, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-300">
                    <ArrowRight className="w-4 h-4 text-blue-400" />
                    {result}
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2">
              {cases[activeCase].technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 rounded-full text-sm bg-blue-500/10 text-blue-400"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;