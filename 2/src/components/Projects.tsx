import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Project } from '../types';

const projects: Project[] = [
  {
    title: 'ML Image Classification',
    description: 'Deep learning model for image classification using TensorFlow',
    category: 'ML',
    technologies: ['Python', 'TensorFlow', 'OpenCV'],
    imageUrl: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80',
    githubUrl: '#',
  },
  {
    title: 'E-commerce Platform',
    description: 'Full-stack e-commerce platform with React and Node.js',
    category: 'Frontend',
    technologies: ['React', 'Node.js', 'MongoDB'],
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
    githubUrl: '#',
    liveUrl: '#',
  },
];

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'ML' | 'Frontend'>('all');

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-8 text-center text-red-600 dark:text-red-500"
        >
          Projects
        </motion.h2>
        <div className="flex justify-center mb-8 space-x-4">
          {['all', 'ML', 'Frontend'].map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category as typeof activeCategory)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeCategory === category
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 hover:bg-red-200 dark:hover:bg-red-900'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
                  >
                    GitHub
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;