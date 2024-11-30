'use client';

import React from 'react';
import Image from 'next/image';
import { Mail, MapPin, Linkedin, BookOpen, Award } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative overflow-hidden min-h-[calc(100vh-5rem)]">
      {/* Fond avec gradient - déplacé en dessous avec un z-index négatif */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 -z-10" />
      
      <div className="container mx-auto px-4 py-20 relative z-10"> {/* Ajout de z-10 */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Photo */}
          <div className="md:w-1/2">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000" />
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white/10">
                <Image
                  src="/images/photo-profil.png"
                  alt="Yacine SALAH - Ingénieur Cloud DevOps"
                  fill
                  priority
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="md:w-1/2 space-y-8">
            <div className="space-y-4">
              <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                Yacine SALAH 
              </h1>
              <h2 className="text-3xl text-blue-300">Ingénieur Cloud DevOps</h2>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://www.linkedin.com/in/yacine-salah-a0bb3176/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-[#0077B5]/10 hover:bg-[#0077B5]/20 rounded-full cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <Linkedin className="w-5 h-5 text-[#0077B5]" />
                  <span className="text-gray-300">LinkedIn</span>
                </div>
              </a>

              <a 
                href="https://www.cloudskillsboost.google/public_profiles/c3800e34-0c7d-44d8-9ee7-418a32cb2389"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-blue-500/10 hover:bg-blue-500/20 rounded-full cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">Google Skills</span>
                </div>
              </a>

              <a 
                href="https://www.amazon.fr/dp/B0CGWN1PCK"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-green-500/10 hover:bg-green-500/20 rounded-full cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Mon Livre DevOps</span>
                </div>
              </a>
            </div>

            {/* Contact */}
            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:yacine.salah77@gmail.com"
                className="inline-flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors"
              >
                <Mail className="text-blue-400" />
                yacine.salah77@gmail.com
              </a>
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="text-blue-400" />
                91090 Lisses, France
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                href="https://www.linkedin.com/in/yacine-salah-a0bb3176/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-center px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
              >
                Me Contacter
              </a>
              
              <a 
                href="https://www.cloudskillsboost.google/public_profiles/c3800e34-0c7d-44d8-9ee7-418a32cb2389"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-center px-8 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-full font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Voir mes certifications
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;