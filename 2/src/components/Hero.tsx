import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold mb-4 text-red-600 dark:text-red-500"
        >
          Welcome to My Portfolio
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl mb-8"
        >
          Full Stack Developer & ML Enthusiast
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex justify-center space-x-6 mb-8"
        >
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 dark:hover:text-red-500 transition-colors">
            <Github className="w-8 h-8" />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 dark:hover:text-red-500 transition-colors">
            <Linkedin className="w-8 h-8" />
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 dark:hover:text-red-500 transition-colors">
            <Twitter className="w-8 h-8" />
          </a>
        </motion.div>
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          href="https://bento.me/rajarshi"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
        >
          Other Profiles
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;