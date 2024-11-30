'use client';

import React from 'react';
import { Home, Cpu, Briefcase, Book, FileText, Rss, LucideIcon } from 'lucide-react';
import type { TabType } from '@/app/types';

interface NavigationProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

interface TabItem {
  id: TabType;
  label: string;
  icon: LucideIcon  ; // ou LucideIcon si vous importez le type de lucide-react
}

const Navigation: React.FC<NavigationProps> = ({ activeTab, setActiveTab }) => {
  const tabs: TabItem[] = [
    { id: 'home', label: 'Accueil', icon: Home },
    { id: 'skills', label: 'Compétences', icon: Cpu },
    { id: 'experience', label: 'Expérience', icon: Briefcase },
    { id: 'education', label: 'Formation', icon: Book },
    { id: 'case-studies', label: 'Études de Cas', icon: FileText },
    { id: 'tech-watch', label: 'Veille Tech', icon: Rss  } 
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black/50 backdrop-blur-lg border-b border-blue-500/20 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold text-blue-400">Y.S</div>
          <div className="flex space-x-8">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                  activeTab === tab.id 
                    ? 'bg-blue-500 text-white' 
                    : 'hover:bg-blue-500/20'
                }`}
              >
                <tab.icon size={16} />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;