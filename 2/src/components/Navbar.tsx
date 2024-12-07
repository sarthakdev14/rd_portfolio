import React from 'react';
import { Moon, Sun } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
  return (
    <nav className="fixed w-full top-0 z-50 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 text-red-600 dark:text-red-500 font-bold text-xl">
            Portfolio
          </div>
          <div className="flex space-x-8">
            <a href="#home" className="hover:text-red-600 dark:hover:text-red-500 transition-colors">Home</a>
            <a href="#about" className="hover:text-red-600 dark:hover:text-red-500 transition-colors">About</a>
            <a href="#skills" className="hover:text-red-600 dark:hover:text-red-500 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-red-600 dark:hover:text-red-500 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-red-600 dark:hover:text-red-500 transition-colors">Contact</a>
          </div>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 transition-colors"
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;