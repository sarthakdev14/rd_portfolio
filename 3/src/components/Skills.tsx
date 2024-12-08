import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Brain } from 'lucide-react';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiNextdotjs, SiRedux, SiPython, SiPostgresql, SiMongodb, SiTensorflow, SiPytorch, SiScikitlearn } from 'react-icons/si';
import { MdPhotoCamera } from 'react-icons/md';

const SkillCard = ({ title, icon: Icon, skills }: { title: string; icon: any; skills: { name: string, icon: React.ReactNode }[] }) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg transition-colors duration-300">
    <div className="flex items-center mb-4">
      <Icon className="w-6 h-6 text-red-600 mr-2" />
      <h3 className="text-xl font-semibold dark:text-white">{title}</h3>
    </div>
    <ul className="space-y-2">
      {skills.map((skill) => (
        <li key={skill.name} className="flex items-center text-gray-600 dark:text-gray-300">
          {skill.icon}
          <span className="ml-2">{skill.name}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Skills = () => {
  const skillsets = [
    {
      title: "Frontend Development",
      icon: Code,
      skills: [
        { name: "React", icon: <FaReact /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "Redux", icon: <SiRedux /> }
      ]
    },
    {
      title: "Backend Development",
      icon: Database,
      skills: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Python", icon: <SiPython /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "REST APIs", icon: <SiMongodb /> } // Placeholder icon for REST APIs
      ]
    },
    {
      title: "Machine Learning",
      icon: Brain,
      skills: [
        { name: "TensorFlow", icon: <SiTensorflow /> },
        { name: "PyTorch", icon: <SiPytorch /> },
        { name: "Scikit-learn", icon: <SiScikitlearn /> },
        { name: "Computer Vision", icon: <MdPhotoCamera /> },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-12 text-center dark:text-white">My Tech Stack:</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {skillsets.map((skillset) => (
              <SkillCard key={skillset.title} {...skillset} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
