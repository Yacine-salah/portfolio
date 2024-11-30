'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Book, Award, Calendar } from 'lucide-react';
import { education } from '@/app/data/portfolio';

const Education: React.FC = () => {
  const [hoveredEdu, setHoveredEdu] = useState<number | null>(null);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="space-y-8">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative group"
            onHoverStart={() => setHoveredEdu(index)}
            onHoverEnd={() => setHoveredEdu(null)}
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-20 group-hover:opacity-75 transition duration-1000"></div>
            <div className="relative bg-gray-900 p-6 rounded-lg border border-blue-500/20 hover:border-blue-500 transition-all duration-300">
              <div className="flex items-start gap-4">
                <motion.div 
                  className="bg-blue-500/20 p-3 rounded-lg"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Book className="w-6 h-6 text-blue-400" />
                </motion.div>
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-blue-400">{edu.degree}</h3>
                      <div className="text-gray-400 mb-2 flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {edu.period}
                      </div>
                    </div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredEdu === index ? 1 : 0 }}
                      className="flex items-center gap-2 text-blue-400"
                    >
                      <Award className="w-5 h-5" />
                      {edu.school}
                    </motion.div>
                  </div>
                  <motion.p 
                    className="text-gray-300 mt-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {edu.details}
                  </motion.p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Education;