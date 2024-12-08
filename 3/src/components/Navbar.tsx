import React from 'react';
import { Home, User, Code2, FolderGit2, Mail, Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-700 theme-transition">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 font-bold text-xl text-black dark:text-white">Rajarshi's Portfolio</div>
          <div className="flex items-center space-x-8">
            <div className="hidden md:flex space-x-8">
              {[
                { icon: Home, text: 'Home', id: 'home' },
                { icon: User, text: 'About', id: 'about' },
                { icon: Code2, text: 'Skills', id: 'skills' },
                { icon: FolderGit2, text: 'Projects', id: 'projects' },
                { icon: Mail, text: 'Contact', id: 'contact' },
              ].map(({ icon: Icon, text, id }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="flex items-center space-x-1 text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-500 transition-colors"
                >
                  <Icon size={18} />
                  <span>{text}</span>
                </button>
              ))}
            </div>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5 text-red-600" />
              ) : (
                <Moon className="w-5 h-5 text-red-600" />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;