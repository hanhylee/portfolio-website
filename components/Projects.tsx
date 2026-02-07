import React from 'react';
import { PROJECTS } from '../constants';
import { Github, ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-10">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Portfolio</h2>
          <p className="mt-2 text-2xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
            Featured Projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {PROJECTS.map((project, index) => (
            <div key={index} className="flex flex-col bg-slate-50 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="p-6 flex-1">
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
                  <div className="flex space-x-2">
                    <a href={project.website} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-5 w-5 text-gray-400 hover:text-primary cursor-pointer" />
                    </a>
                  </div>
                </div>
                
                <p className="text-sm font-semibold text-primary mb-2 uppercase tracking-wider">{project.role}</p>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-white text-xs font-medium text-gray-600 border border-gray-200 rounded-md">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <ul className="space-y-2">
                  {project.description.map((desc, i) => (
                    <li key={i} className="text-gray-600 text-sm flex items-start">
                      <span className="mr-2 mt-1.5 h-1.5 w-1.5 bg-primary rounded-full flex-shrink-0"></span>
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;