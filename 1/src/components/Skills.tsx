import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Brain } from 'lucide-react';

const SkillCard = ({ title, icon: Icon, skills }: { title: string; icon: any; skills: string[] }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg">
    <div className="flex items-center mb-4">
      <Icon className="w-6 h-6 text-blue-600 mr-2" />
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
    <ul className="space-y-2">
      {skills.map((skill) => (
        <li key={skill} className="text-gray-600">{skill}</li>
      ))}
    </ul>
  </div>
);

const Skills = () => {
  const skillsets = [
    {
      title: "Frontend Development",
      icon: Code,
      skills: ["React.js", "TypeScript", "Tailwind CSS", "Next.js", "Redux"]
    },
    {
      title: "Backend Development",
      icon: Database,
      skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "REST APIs"]
    },
    {
      title: "Machine Learning",
      icon: Brain,
      skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Computer Vision", "NLP"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-12 text-center">My Tech Stack</h2>
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