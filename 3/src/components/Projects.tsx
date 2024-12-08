import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, X } from 'lucide-react';
import ProjectCarousel from './ProjectCarousel';

interface Project {
  title: string;
  description: string;
  image: string;
  demoLink?: string;
  githubLink?: string;
  details?: string;
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const mlProjects = [
    {
      title: "Image Classification Model",
      description: "Deep learning model for image classification using CNN architecture",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80",
      demoLink: "#",
      githubLink: "#",
      details: "A sophisticated image classification model built using TensorFlow and CNN architecture. Achieves 95% accuracy on test data."
    },
    {
      title: "NLP Sentiment Analysis",
      description: "Real-time sentiment analysis of social media posts",
      image: "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?auto=format&fit=crop&q=80",
      demoLink: "#",
      githubLink: "#",
      details: "Analyzes social media sentiment in real-time using BERT and transformers."
    },
    {
      title: "Recommendation System",
      description: "AI-powered content recommendation engine",
      image: "https://images.unsplash.com/photo-1518932945647-7a1c969f8be2?auto=format&fit=crop&q=80",
      demoLink: "#",
      githubLink: "#",
      details: "Collaborative filtering based recommendation system with matrix factorization."
    }
  ];

  const frontendProjects = [
    {
      title: "E-commerce Platform",
      description: "Modern e-commerce platform built with React and Redux",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80",
      demoLink: "#",
      githubLink: "#",
      details: "Full-featured e-commerce platform with cart management, user authentication, and payment integration."
    },
    {
      title: "Task Management App",
      description: "Real-time collaborative task management application",
      image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80",
      demoLink: "#",
      githubLink: "#",
      details: "Collaborative task management with real-time updates using WebSocket."
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media metrics",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
      demoLink: "#",
      githubLink: "#",
      details: "Comprehensive dashboard showing social media metrics and analytics."
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-12 text-center dark:text-white">Projects</h2>
          
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 dark:text-white">Machine Learning Projects</h3>
            <ProjectCarousel projects={mlProjects} onProjectClick={setSelectedProject} />
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-8 dark:text-white">Frontend Projects</h3>
            <ProjectCarousel projects={frontendProjects} onProjectClick={setSelectedProject} />
          </div>
        </motion.div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold dark:text-white">{selectedProject.title}</h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
                >
                  <X className="w-6 h-6 dark:text-white" />
                </button>
              </div>
              
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {selectedProject.details || selectedProject.description}
              </p>
              
              <div className="flex space-x-4">
                {selectedProject.demoLink && (
                  <a
                    href={selectedProject.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-red-600 hover:text-red-700"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Live Demo
                  </a>
                )}
                {selectedProject.githubLink && (
                  <a
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
                  >
                    <Github className="w-4 h-4 mr-1" />
                    View Code
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;