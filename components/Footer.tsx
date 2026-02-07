import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-8 sm:py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <a href={PERSONAL_INFO.github} className="text-gray-400 hover:text-gray-500 p-2">
            <span className="sr-only">GitHub</span>
            <Github className="h-6 w-6" />
          </a>
          <a href={PERSONAL_INFO.linkedin} className="text-gray-400 hover:text-gray-500 p-2">
            <span className="sr-only">LinkedIn</span>
            <Linkedin className="h-6 w-6" />
          </a>
          <a href={`mailto:${PERSONAL_INFO.email}`} className="text-gray-400 hover:text-gray-500 p-2">
            <span className="sr-only">Email</span>
            <Mail className="h-6 w-6" />
          </a>
        </div>
        <div className="mt-8 md:mt-0 md:order-1">
          <p className="text-center text-base text-gray-400">
            &copy; {new Date().getFullYear()} Han Lee. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;