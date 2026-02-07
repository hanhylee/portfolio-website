import React, { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

interface NavbarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', value: 'home' },
    { name: 'About', value: 'about' },
    { name: 'Experience', value: 'experience' },
    { name: 'Projects', value: 'projects' },
    { name: 'Publications', value: 'publications' },
    { name: 'Blog', value: 'blog' },
  ];

  const handleNavClick = (page: string) => {
    onNavigate(page);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center cursor-pointer" onClick={() => handleNavClick('home')}>
            <span className="text-xl font-bold text-gray-900 tracking-tight">Han<span className="text-primary">Lee</span></span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.value)}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  currentPage === link.value ? 'text-primary' : 'text-gray-600'
                }`}
              >
                {link.name}
              </button>
            ))}
            <div className="h-6 w-px bg-gray-200 mx-2"></div>
            <div className="flex space-x-4">
              <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-gray-900">
                <Github size={20} />
              </a>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-blue-700">
                <Linkedin size={20} />
              </a>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="text-gray-500 hover:text-red-600">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white border-b border-gray-200 shadow-lg">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.value)}
                className={`block w-full text-left px-4 py-3 rounded-md text-base font-medium transition-colors duration-200 ${
                  currentPage === link.value
                    ? 'bg-blue-50 text-primary'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;