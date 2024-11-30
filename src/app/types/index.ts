import { ElementType } from 'react';

export type TabType = 'home' | 'skills' | 'experience' | 'education' | 'case-studies' | 'tech-watch';
export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  icon: ElementType;
  details: string[];
}

export interface Education {
  degree: string;
  school: string;
  period: string;
  details: string;
}

export interface SkillCategory {
  title: string;
  icon: ElementType;
  skills: string[];
  color: string;
}