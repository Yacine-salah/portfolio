'use client';

import React, { useState } from 'react';
import { 
  Building2, 
  Calendar, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle2, 
  Briefcase, 
  Wrench // Remplacé Tool par Wrench
} from 'lucide-react';


interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  environment: string[];
  colorGradient: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  company,
  period,
  description,
  achievements,
  environment,
  colorGradient
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  //const [showTech, setShowTech] = useState(false);

  return (
    <div className="w-full">
      <div className="relative group">
      <div className={`absolute -inset-0.5 bg-gradient-to-r ${colorGradient} rounded-lg blur opacity-30 group-hover:opacity-75 transition duration-1000`} />
        
        <div className="relative bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-gray-700 transition-all duration-300">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Building2 className="w-5 h-5 text-blue-400" />
                <h3 className="text-xl font-bold text-blue-400">{company}</h3>
              </div>
              <h4 className="text-lg text-white">{title}</h4>
            </div>
            
            <div className="flex items-center gap-2 text-gray-400">
              <Calendar className="w-4 h-4" />
              <span>{period}</span>
            </div>
          </div>

          <p className="mt-4 text-gray-300 leading-relaxed">
            {description}
          </p>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-4 flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
          >
            {isExpanded ? (
              <>Voir moins <ChevronUp className="w-4 h-4" /></>
            ) : (
              <>Voir les réalisations <ChevronDown className="w-4 h-4" /></>
            )}
          </button>

          {isExpanded && (
            <div className="mt-6 space-y-6 animate-fadeIn">
              <div className="space-y-3">
                <h5 className="flex items-center gap-2 text-white font-semibold">
                  <Briefcase className="w-4 h-4 text-blue-400" />
                  Réalisations principales
                </h5>
                <ul className="space-y-2">
                  {achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3">
                <h5 className="flex items-center gap-2 text-white font-semibold">
                  <Wrench className="w-4 h-4 text-blue-400" /> {/* Changé ici */}
                  Environnement technique
                </h5>
                <div className="flex flex-wrap gap-2">
                  {environment.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 rounded-full text-sm bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;