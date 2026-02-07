import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { Code, Database, Terminal } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="py-12 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">About Me</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Technical Skills
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Combining a passion for problem-solving with modern software engineering to build robust, data-driven applications.
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            {/* Languages */}
            <div className="relative group bg-slate-50 p-6 rounded-lg hover:shadow-md transition-shadow">
              <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                <Code className="h-6 w-6" aria-hidden="true" />
              </div>
              <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Languages</p>
              <div className="mt-2 ml-16 text-base text-gray-500">
                <div className="flex flex-wrap gap-2">
                  {PERSONAL_INFO.skills.languages.map(skill => (
                    <span key={skill} className="px-2 py-1 bg-white border border-gray-200 rounded text-sm text-gray-700">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Web Dev */}
            <div className="relative group bg-slate-50 p-6 rounded-lg hover:shadow-md transition-shadow">
              <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                <Terminal className="h-6 w-6" aria-hidden="true" />
              </div>
              <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Web Development</p>
              <div className="mt-2 ml-16 text-base text-gray-500">
                <div className="flex flex-wrap gap-2">
                  {PERSONAL_INFO.skills.web.map(skill => (
                    <span key={skill} className="px-2 py-1 bg-white border border-gray-200 rounded text-sm text-gray-700">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Tools & DB */}
            <div className="relative group bg-slate-50 p-6 rounded-lg hover:shadow-md transition-shadow">
              <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                <Database className="h-6 w-6" aria-hidden="true" />
              </div>
              <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Tools & Databases</p>
              <div className="mt-2 ml-16 text-base text-gray-500">
                <div className="flex flex-wrap gap-2">
                  {PERSONAL_INFO.skills.tools.map(skill => (
                    <span key={skill} className="px-2 py-1 bg-white border border-gray-200 rounded text-sm text-gray-700">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;