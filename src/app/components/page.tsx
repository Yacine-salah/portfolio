'use client';

import { useState } from 'react';
import Navigation from '@/app/components/layout/Navigation';
import Hero from '@/app/components/sections/Hero';
import Skills from '@/app/components/sections/Skills';
import Experience from '@/app/components/sections/Experience';
import Education from '@/app/components/sections/Education';
import CaseStudies from './sections/CaseStudies';
import TechWatch from './sections/TechWatch';
import type { TabType } from '@/app/types';

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabType>('home');

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="pt-20 min-h-screen">
        {activeTab === 'home' && <Hero />}
        {activeTab === 'skills' && <Skills />}
        {activeTab === 'experience' && <Experience />}
        {activeTab === 'education' && <Education />}
        {activeTab === 'case-studies' && <CaseStudies />}
        {activeTab === 'tech-watch' && <TechWatch />}
      </div>
    </main>
  );
}