import React from 'react';
import { FileDown } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-16">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center text-red-600 dark:text-red-500"
        >
          About Me
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square overflow-hidden rounded-2xl shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
                alt="Profile"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute inset-0 ring-1 ring-red-600/20 rounded-2xl"></div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
              <p className="text-lg mb-6">
                I am a passionate developer with expertise in both frontend development and machine learning.
                My journey in tech has been driven by curiosity and a desire to create meaningful solutions
                that make a difference.
              </p>
              <p className="text-lg mb-6">
                With a strong foundation in computer science and years of practical experience,
                I specialize in building responsive web applications and implementing machine learning solutions.
              </p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <a
                  href="https://docs.google.com/document/d/1NN6lGmrn4kNGup4-am3Xg-_BNKuVwS4MJg6nkWGQZUI/edit?pli=1&tab=t.0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                >
                  <FileDown className="w-5 h-5 mr-2" />
                  Download CV
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;