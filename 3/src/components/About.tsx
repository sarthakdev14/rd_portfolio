import React from 'react';
import { motion } from 'framer-motion';
import { FileDown } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-8 text-center dark:text-white">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img
                src="https://media.licdn.com/dms/image/v2/D5603AQH2M-YAs7SckA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1708091171732?e=2147483647&v=beta&t=imqz77DambWJFARPHV3JBFJy9httgKKWKBQglwHDfHA"
                alt="Coding workspace"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <div className="space-y-4">
                <p className="text-lg text-gray-600 dark:text-gray-300">
               Hey, I'm Rajarshi and I aspire to be a Full Stack Python Dev.
                    <p> Currently I'm in my 2nd year as a IT undergrad in Bangalore Institute of Technology.</p>
                  
                    <h4> Feel free to connect and reach out!</h4>
                </p>
              </div>
              <a
                href="https://docs.google.com/document/d/1NN6lGmrn4kNGup4-am3Xg-_BNKuVwS4MJg6nkWGQZUI/edit"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                <FileDown className="w-5 h-5 mr-2" />
                Download CV
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;