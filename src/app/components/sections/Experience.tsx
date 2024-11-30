'use client';

import React from 'react';
import ExperienceCard from './ExperienceCard';


// Définition de l'interface pour le mapping des couleurs
interface CompanyColors {
    [key: string]: string;
  }

const Experience = () => {
  // Données des expériences
  const experiences = [
    // Première expérience (Servier)
    {
      title: "Ingénieur Cloud / DataOps",
      company: "SERVIER",
      period: "SEPT 2023 - AUJOURD'HUI",
      description: "Dans une équipe de 6 DataOps au sein d'une dataFactory, prise en charge de l'optimisation du monitoring sur Google Cloud Platform (GCP) et rattachement des alertes sur ServiceNow.",
      achievements: [
        "Optimisation de l'infrastructure GCP en utilisant Terraform - Infrastructure As Code (IaC)",
        "Implémentation de tests automatisés dans les pipelines Terraform pour assurer la fiabilité des déploiements",
        "Mise en place d'un système de pods (Kubernetes) toujours disponibles pour les GitLab Runners, assurant la résilience et la performance des pipelines CI/CD",
        "Développement d'une API FastAPI en PYTHON pour la gestion des alertes Grafana et l'intégration dans Centreon",
        "Conception d'un système de logging avancé adapté à l'environnement GCP, utilisant Cloud Logging pour une meilleure observabilité",
        "Sécurisation de l'ensemble de l'infrastructure et des communications API en utilisant les meilleures pratiques de GCP",
        "Rédaction de documentation et de MindMap sur Confluence"
      ],
      environment: [
        "Gitlab", "Terraform", "Docker", "Kubernetes", "Grafana",
        "Google Cloud Platform", "Python", "CI/CD runners", "Centreon",
        "ServiceNow", "JIRA", "Confluence"
      ]
    },
    // Deuxième expérience (Carrefour)
    {
      title: "Ingénieur Cloud Devops",
      company: "CARREFOUR",
      period: "SEPT 2021 - OCT 2023",
      description: "Release Manager / Prendre en charge l'architecture (OPS) et le CI/CD dans une équipe AGILE de 4 Développeurs, 1 productOwner, 1 testeur QA et 1 ScrumMaster",
      achievements: [
        "Mise en œuvre d'une méthodologie DEVOPS visant à optimiser la gestion des opérations et des déploiements sur les divers environnements",
        "Mise en place de GIT sur Bitbucket puis GITLAB et création d'un processus de livraison automatisée",
        "Migration vers le cloud du CRM Unica depuis les serveurs IBM vers Google Cloud Platform et des bases de données IBM vers Oracle Cloud Infrastructure",
        "Mise en place des permissions et création des comptes de service sur GCP IAM",
        "Mise en place des environnements de DEV/UAT/PREPROD et PROD sur GCP",
        "Installation de datasecure sur les serveurs BDD hébergé par OCI (Oracle Cloud Infrastructure)",
        "Installation de l'application et des différents modules sur les serveurs GCP",
        "Coordination de la migration : élaboration du scénario de transition et supervision des activités à exécuter par les équipes respectives pour le déploiement en production",
        "Débogage et analyse de logs des erreurs rencontrées coté systèmes / application",
        "Débogage des erreurs rencontrées coté Base De Données",
        "Former l'équipe à l'exploitation pour prendre en charge totalement dans l'équipe la partie OPS de l'application",
        "Ordonnancement des différents batchs sur Dollars Universe",
        "Création des documentations et du dossier d'exploitation sur Confluence",
        "Communication en anglais avec le support indien de l'éditeur sur la résolution des différentes erreurs rencontrées du progiciel",
        "Conception et création de scripts Bash et Python (Automatisation, User Stories, Tech Stories etc…)",
        "Garant de la gestion lors des phases de Préprod et Production des versions"
      ],
      environment: [
        "CRM Unica", "Jira", "Confluence", "Bitbucket", "Git", "GitLab",
        "Jenkins", "Tomcat", "Oracle", "Google Cloud Platform",
        "Oracle Cloud Infrastructure", "Linux", "Dollars Universe", "LogM",
        "Shell", "Python", "SQL", "Terraform"
      ]
    },
    {
        title: "Chef de projet technique",
        company: "BNP PARIBAS",
        period: "JAN 2018 - AVR 2021",
        description: "Chef de projet technique dans une équipe de 20 personnes au sein de l'entité IPS/FGAT. Mise en production d'une dizaines d'applications (durée d'un projet : de 3 à 6 mois)",
        achievements: [
          "Validation des environnements techniques",
          "Mise en place des Jalons/deadline pour les différentes phases des projets : Mise en qualif / mise en production / mise en service",
          "Préparation des environnements techniques (hors production, production, Backup)",
          "Validation des Dossiers d'Exploitation et d'Installation (DEI)",
          "Installation de l'application sur les différents environnements à partir des dossiers d'installation",
          "Installation des procédures d'exploitation",
          "Préparation des consignes au pilotage et la supervision",
          "Test de passage des applications en qualif",
          "Mise en production des applications",
          "Assure la période de garantie lors d'une mise en service",
          "Réalisation des actions de mise en œuvre",
          "Mise à jour de la fiche projet et des reportings associés chaque semaine en UO",
          "Communication régulière sur l'état d'avancement et les éventuels blocages du projet",
          "Mise en place de scripts Shell pour Autosys afin d'automatiser certaines actions de l'équipe"
        ],
        environment: [
          "Linux Redhat 6/7",
          "TSM",
          "AIX",
          "Windows Server 2012",
          "Nimsoft",
          "WebSphere",
          "Oracle",
          "SQL Server",
          "Exadata",
          "Autosys",
          "Shell",
          "3245 Serveurs AIX/Linux",
          "106 Serveurs Windows"
        ]
      },
      {
        title: "Ingénieur production",
        company: "BNP PARIBAS",
        period: "MARS 2017 - JAN 2018",
        description: "Chef d'équipe adjoint de l'équipe Problème constituée de 4 personnes. Responsable du run et du maintien en conditions opérationnelles des applications en production.",
        achievements: [
          "Gestion des problèmes",
          "Gestion courante des outils de consignes pour le pilotage",
          "Assurer le run et le maintien en conditions opérationnelles des applications en production",
          "Supervision d'une équipe de 4 personnes"
        ],
        environment: [
          "Linux Redhat 6/7",
          "TSM",
          "AIX",
          "Windows Server 2012",
          "Nimsoft",
          "WebSphere",
          "Oracle",
          "SQL Server",
          "Exadata",
          "Autosys",
          "Shell",
          "3245 Serveurs AIX/Linux",
          "106 Serveurs Windows"
        ]
      },
      {
        title: "Ingénieur Systèmes et Sécurité",
        company: "SIEGE D'UMANIS",
        period: "JUIN 2015 - AOUT 2015",
        description: "Pour finir mon contrat pro, j'ai été placé au sein de la cellule informatique d'Umanis à temps plein 1 mois.",
        achievements: [
          "Mise en place d'un nouveau serveur web plus sécurisé pour héberger www.umanis.com",
          "Mise en place des composants sur le serveur web"
        ],
        environment: [
          "Postfix",
          "FTP (ProFtpd)",
          "PhpMyAdmin",
          "MySQL",
          "Protection SSH",
          "Protection fail2ban",
          "Firewall Iptables"
        ]
      },
      {
        title: "Ingénieur Réseaux",
        company: "ORANGE",
        period: "JAN 2014 - JUIN 2015",
        description: "Apprenti Ingénieur Réseau au sein de l'équipe Infrastructure Réseau et Backbone (IRB) de 15 personnes.",
        achievements: [
          "Etudes et configurations sur le DataCenter \"GREENWICH\" d'Orange : un data-center conçu et construit en Normandie spécialement pour être plus écologique et économique",
          "Rédaction d'un mémoire sur les Enjeux du Green-IT dans l'informatique",
          "Déplacement sur site/DataCenter pour installation et configuration d'équipements",
          "Programmation de Template pour les configurations sur Excel"
        ],
        environment: [
          "Cisco",
          "Juniper",
          "VLAN",
          "QFabric",
          "Excel"
        ]
      },
      {
        title: "Analyste d'exploitation",
        company: "BNP PARIBAS",
        period: "SEPT 2012 - JAN 2014",
        description: "Analyste d'exploitation de support niveau 2 en environnement UNIX / Windows sur des applications des domaines BDDF et FGAT.",
        achievements: [
          "Traitement des incidents au sein de la cellule Front Office",
          "Supervision des alertes",
          "Traitement des tickets d'incidents",
          "Reprise des chaines de jobs incidentées",
          "Arrêt / relance des produits Oracle, Websphere, Essbase",
          "Analyse des incidents de transferts de fichiers"
        ],
        environment: [
          "Unix/Linux",
          "Windows",
          "TNG",
          "Oracle",
          "Websphere",
          "CFT",
          "TSM",
          "NSM"
        ]
      }
    ];
  
    // Fonction améliorée pour les gradients de couleur
    const getCompanyClass = (company: string): string => {
        const colorMap: CompanyColors = {
          'SERVIER': 'from-blue-500 to-purple-500',
          'CARREFOUR': 'from-blue-600 to-cyan-500',
          'BNP PARIBAS': 'from-green-500 to-emerald-500',
          'SIEGE D\'UMANIS': 'from-orange-500 to-amber-500',
          'ORANGE': 'from-[#ff7900] to-[#f16e00]',
          'DEFAULT': 'from-gray-500 to-slate-500'
        };
    
        return Object.prototype.hasOwnProperty.call(colorMap, company) 
          ? colorMap[company] 
          : colorMap['DEFAULT'];
      };
    
      return (
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-blue-400 mb-8">Parcours Professionnel</h2>
          
          <div className="relative space-y-8">
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-orange-500 hidden lg:block" />
            
            {experiences.map((experience, index) => (
              <div key={index} className="lg:pl-8 relative">
                <div className="absolute left-[-4px] top-0 w-2 h-2 rounded-full bg-blue-500 hidden lg:block" />
                
                <ExperienceCard 
                  {...experience} 
                  colorGradient={getCompanyClass(experience.company)}
                />
              </div>
            ))}
          </div>
        </div>
      );
    };
    
    export default Experience;