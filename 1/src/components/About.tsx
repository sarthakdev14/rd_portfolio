import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img
                src="https://media.licdn.com/dms/image/v2/D5603AQH2M-YAs7SckA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1708091171732?e=2147483647&v=beta&t=imqz77DambWJFARPHV3JBFJy9httgKKWKBQglwHDfHA"
                alt="Coding workspace"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-4">
              <p className="text-lg text-gray-600">
              <p>Education:</p>
              Currently I'm in my 2nd year as a IT undergrad in Bangalore Institute of Technology.


              Feel free to connect and reach out!
              </p>
              <p className="text-lg text-gray-600">
                With a strong foundation in computer science and years of practical experience,
                I specialize in building scalable web applications and implementing machine learning solutions.
              </p>
              <p className="text-lg text-gray-600">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                or sharing my knowledge through technical writing.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;