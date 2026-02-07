import React from 'react';
import { EXPERIENCE, EDUCATION } from '../constants';
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-10">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Journey</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Experience & Education
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Work Experience */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 flex items-center">
              <Briefcase className="mr-2 h-6 w-6 text-primary" /> Work Experience
            </h3>
            {EXPERIENCE.map((job, index) => (
              <div key={index} className="bg-white shadow rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">{job.role}</h4>
                    <p className="text-lg text-primary font-medium">{job.company}</p>
                  </div>
                  <span className="text-sm text-gray-500 whitespace-nowrap bg-gray-100 px-2 py-1 rounded">{job.period}</span>
                </div>
                <div className="flex items-center mt-2 text-sm text-gray-500 mb-4">
                  <MapPin className="h-4 w-4 mr-1" />
                  {job.location}
                </div>
                <ul className="list-disc list-outside ml-5 space-y-2 text-gray-600">
                  {job.achievements.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 flex items-center">
              <GraduationCap className="mr-2 h-6 w-6 text-primary" /> Education
            </h3>
            {EDUCATION.map((edu, index) => (
              <div key={index} className="bg-white shadow rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 border-l-4 border-primary">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">{edu.degree}</h4>
                    <p className="text-lg text-gray-700 font-medium">{edu.institution}</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center mt-2 text-sm text-gray-500 gap-3">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {edu.period}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {edu.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;