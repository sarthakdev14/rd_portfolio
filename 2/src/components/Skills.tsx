import React from 'react';
import { Code2, Database, Brain } from 'lucide-react';
import { motion } from 'framer-motion';
import { TechCard } from '../types';

const techCards: TechCard[] = [
  {
    title: 'Frontend Development',
    description: 'React, TypeScript, Tailwind CSS, Next.js',
    icon: <Code2 className="w-8 h-8" />,
  },
  {
    title: 'Backend Development',
    description: 'Node.js, Python, PostgreSQL, MongoDB',
    icon: <Database className="w-8 h-8" />,
  },
  {
    title: 'Machine Learning',
    description: 'TensorFlow, PyTorch, Scikit-learn',
    icon: <Brain className="w-8 h-8" />,
  },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center text-red-600 dark:text-red-500"
        >
          My Tech Stack
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {techCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="text-red-600 dark:text-red-500 mb-4">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{card.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;