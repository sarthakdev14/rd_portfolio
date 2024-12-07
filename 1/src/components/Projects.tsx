import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ title, description, image, demoLink, githubLink }: {
  title: string;
  description: string;
  image: string;
  demoLink?: string;
  githubLink?: string;
}) => (
  <div className="bg-white rounded-xl overflow-hidden shadow-lg">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex space-x-4">
        {demoLink && (
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-blue-600 hover:text-blue-800"
          >
            <ExternalLink className="w-4 h-4 mr-1" />
            Demo
          </a>
        )}
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-600 hover:text-gray-800"
          >
            <Github className="w-4 h-4 mr-1" />
            Code
          </a>
        )}
      </div>
    </div>
  </div>
);

const Projects = () => {
  const mlProjects = [
    {
      title: "Image Classification Model",
      description: "Deep learning model for image classification using CNN architecture",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80",
      demoLink: "#",
      githubLink: "#"
    },
    {
      title: "NLP Sentiment Analysis",
      description: "Real-time sentiment analysis of social media posts",
      image: "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?auto=format&fit=crop&q=80",
      demoLink: "#",
      githubLink: "#"
    }
  ];

  const frontendProjects = [
    {
      title: "E-commerce Platform",
      description: "Modern e-commerce platform built with React and Redux",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80",
      demoLink: "#",
      githubLink: "#"
    },
    {
      title: "Task Management App",
      description: "Real-time collaborative task management application",
      image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80",
      demoLink: "#",
      githubLink: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
          
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8">Machine Learning Projects</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {mlProjects.map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-8">Frontend Projects</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {frontendProjects.map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;