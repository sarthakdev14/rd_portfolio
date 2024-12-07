import React from 'react';
import { Home, User, Code2, FolderGit2, Mail } from 'lucide-react';

const Navbar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 font-bold text-xl">Portfolio</div>
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
                className="flex items-center space-x-1 text-gray-600 hover:text-black transition-colors"
              >
                <Icon size={18} />
                <span>{text}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;