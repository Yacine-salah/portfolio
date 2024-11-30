import { Database, Cloud, Users, Monitor, Server, Code } from 'lucide-react';
import type { Experience, Education, SkillCategory } from '../types';

export const experiences: Experience[] = [
  {
    title: "Ingénieur Cloud / DataOps",
    company: "Servier",
    period: "Sept 2023 - Aujourd'hui",
    description: "Optimisation du monitoring sur GCP, mise en place de l'infrastructure as code avec Terraform, développement API FastAPI",
    icon: Database,
    details: [
      "Optimisation de l'infrastructure GCP avec Terraform (IaC)",
      "Implémentation de tests automatisés dans les pipelines Terraform",
      "Mise en place d'un système de pods Kubernetes pour GitLab Runners",
      "Développement d'une API FastAPI en Python pour la gestion des alertes",
      "Conception d'un système de logging avancé sur GCP",
      "Sécurisation de l'infrastructure et des communications API",
      "Rédaction de documentation technique sur Confluence"
    ]
  },
  {
    title: "Ingénieur Système Cloud DevOps",
    company: "Carrefour",
    period: "Sept 2021 - Sept 2023",
    description: "Migration CRM vers GCP, mise en place CI/CD, gestion des environnements cloud",
    icon: Cloud,
    details: [
      "Migration du CRM Unica vers Google Cloud Platform",
      "Mise en place de GIT sur Bitbucket puis GitLab",
      "Création d'un processus de livraison automatisée",
      "Configuration des environnements DEV/UAT/PREPROD/PROD sur GCP",
      "Installation et configuration de datasecure sur OCI",
      "Coordination des équipes pour la migration en production",
      "Mise en place des pipelines CI/CD",
      "Formation des équipes à l'exploitation"
    ]
  },
  {
    title: "Chef de projet technique",
    company: "BNP Paribas",
    period: "Jan 2018 - Avril 2021",
    description: "Direction des équipes techniques, gestion de projets de mise en production",
    icon: Users,
    details: [
      "Direction d'une équipe de 20 personnes",
      "Mise en production d'une dizaine d'applications",
      "Validation des environnements techniques",
      "Gestion des jalons et deadlines des projets",
      "Préparation des environnements de production",
      "Installation et configuration des applications",
      "Supervision des déploiements",
      "Gestion de la période de garantie post-production"
    ]
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Cloud & DevOps',
    icon: Monitor,
    skills: ['GCP', 'OCI', 'Terraform', 'Docker', 'Kubernetes'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Systèmes & Réseaux',
    icon: Server,
    skills: ['Linux', 'AIX', 'Windows', 'Shell', 'Python'],
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Outils & Méthodes',
    icon: Code,
    skills: ['Jenkins', 'GitLab', 'Ansible', 'JIRA', 'ServiceNow'],
    color: 'from-green-500 to-emerald-500'
  }
];

export const education: Education[] = [
  {
    degree: "Master Expert en Informatique",
    school: "INGESUP - YNOV PARIS",
    period: "2013 - 2015",
    details: "Spécialisation en systèmes d'information"
  },
  {
    degree: "Licence Administration Systèmes et Réseaux",
    school: "IUT SENART/FONTAINEBLEAU",
    period: "2012 - 2013",
    details: "Formation professionnelle"
  }
];