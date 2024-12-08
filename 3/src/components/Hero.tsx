import React from 'react';
import { Github, Linkedin, Twitter, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 pt-16 theme-transition">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 dark:text-white">
            Hi, I'm <span className="text-red-600">Rajarshi</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Full Stack Python Dev | Frontend Developer
          </p>
          
          <div className="flex justify-center space-x-6 mb-8">
            {[
              { icon: Github, href: 'https://github.com/rajarshidattapy', label: 'GitHub' },
              { icon: Linkedin, href: 'https://linkedin.com/in/rajarshidatta05', label: 'LinkedIn' },
              { icon: Twitter, href: 'https://twitter.com/yourusername', label: 'Twitter' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
                aria-label={label}
              >
                <Icon className="w-6 h-6 text-red-600" />
              </a>
            ))}
          </div>

          <a
            href="https://bento.me/rajarshi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-black dark:bg-red-600 text-white rounded-full hover:bg-red-600 dark:hover:bg-red-700 transition-colors"
          >
            <span>Other Profiles</span>
            <ExternalLink className="ml-2 w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;