import React from 'react';
import { Github, Linkedin, Twitter, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 pt-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm <span className="text-blue-600">Rajarshi</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Full Stack Developer & Machine Learning Enthusiast
          </p>
          
          <div className="flex justify-center space-x-6 mb-8">
            {[
              { icon: Github, href: 'https://github.com/yourusername', label: 'GitHub' },
              { icon: Linkedin, href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
              { icon: Twitter, href: 'https://twitter.com/yourusername', label: 'Twitter' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
                aria-label={label}
              >
                <Icon className="w-6 h-6" />
              </a>
            ))}
          </div>

          <a
            href="https://bento.me/rajarshi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
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