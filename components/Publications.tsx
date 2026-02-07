import React from 'react';
import { PUBLICATIONS } from '../constants';
import { BookOpen, ExternalLink, Calendar } from 'lucide-react';

const Publications: React.FC = () => {
  return (
    <div className="py-12 bg-white" id="publications">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-10">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Research</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Publications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PUBLICATIONS.map((pub) => (
            <div key={pub.id} className="bg-slate-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col h-full">
              <div className="flex-1">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">
                    <a href={pub.url} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                      {pub.title}
                    </a>
                  </h3>
                  <a href={pub.url} target="_blank" rel="noopener noreferrer" className="ml-4 text-gray-400 hover:text-primary transition-colors flex-shrink-0">
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </div>
                
                <p className="text-gray-600 mb-3 italic text-sm">{pub.authors.join(", ")}</p>
                
                <p className="text-gray-700 mb-4 text-sm leading-relaxed line-clamp-4">
                  {pub.abstract}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-200 mt-auto">
                <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-gray-500">
                  <div className="flex items-center">
                    <BookOpen className="h-4 w-4 mr-1" />
                    <span className="font-medium text-gray-700">{pub.journal}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{pub.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Publications;
