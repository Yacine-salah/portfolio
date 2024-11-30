'use client';

import React, { useState } from 'react';
import { Newspaper, ExternalLink, RefreshCw } from 'lucide-react';

interface Article {
  title: string;
  source: string;
  date: string;
  link: string;
  category: 'devops' | 'cloud' | 'security' | 'automation';
}

// Exemple d'articles (normalement ces données viendraient d'une API avec de vrais flux RSS)
const articles: Article[] = [
  {
    title: "Nouvelles fonctionnalités de Google Cloud pour l'IA",
    source: "Google Cloud Blog",
    date: "30 Nov 2024",
    link: "https://cloud.google.com/blog",
    category: 'cloud'
  },
  {
    title: "Les meilleures pratiques DevOps en 2024",
    source: "DevOps.com",
    date: "29 Nov 2024",
    link: "https://devops.com",
    category: 'devops'
  },
  // ... plus d'articles
];

const TechWatch: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const categories = ['all', 'devops', 'cloud', 'security', 'automation'];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-blue-400">Veille Technologique</h2>
        <button 
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 hover:bg-blue-500/20 transition-colors"
          onClick={() => {/* Fonction pour rafraîchir les flux */}}
        >
          <RefreshCw className="w-4 h-4" />
          Actualiser
        </button>
      </div>

      {/* Filtres de catégories */}
      <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full capitalize whitespace-nowrap ${
              selectedCategory === category
                ? 'bg-blue-500 text-white'
                : 'bg-gray-800 hover:bg-gray-700'
            }`}
          >
            {category === 'all' ? 'Tous' : category}
          </button>
        ))}
      </div>

      {/* Grille d'articles */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles
          .filter(article => selectedCategory === 'all' || article.category === selectedCategory)
          .map((article, index) => (
            <a
              key={index}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition-colors border border-gray-800 hover:border-blue-500"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-sm text-blue-400 mb-2 block">{article.source}</span>
                  <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                    {article.title}
                  </h3>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-400" />
              </div>
              <div className="flex justify-between items-center mt-4">
                <span className="text-sm text-gray-400">{article.date}</span>
                <span className="text-sm px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 capitalize">
                  {article.category}
                </span>
              </div>
            </a>
          ))}
      </div>

      {/* Sources des flux */}
      <div className="mt-12 p-6 bg-gray-900 rounded-lg">
        <h3 className="text-xl font-semibold text-blue-400 mb-4 flex items-center gap-2">
          <Newspaper className="w-5 h-5" />
          Sources suivies
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            "Google Cloud Blog",
            "AWS News Blog",
            "DevOps.com",
            "The New Stack",
            "Kubernetes Blog",
            "HashiCorp Blog",
            "GitLab Blog",
            "Docker Blog"
          ].map((source, index) => (
            <div key={index} className="flex items-center gap-2 text-gray-300">
              <div className="w-2 h-2 rounded-full bg-blue-400"></div>
              {source}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechWatch;