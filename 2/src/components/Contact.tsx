import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center text-red-600 dark:text-red-500"
        >
          Contact Me
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
            <div className="flex items-center space-x-4">
              <Mail className="w-6 h-6 text-red-600 dark:text-red-500" />
              <span>email@example.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="w-6 h-6 text-red-600 dark:text-red-500" />
              <span>+1 234 567 890</span>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="w-6 h-6 text-red-600 dark:text-red-500" />
              <span>City, Country</span>
            </div>
          </motion.div>
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div>
              <label htmlFor="name" className="block mb-2">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2">Message</label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;