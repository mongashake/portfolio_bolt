import React from 'react';
import { useTheme } from '../context/ThemeContext';

const experiences = [
  {
    title: 'Staff Software Engineer',
    period: '2021 — Present',
    description: 'Leading cloud infrastructure optimization and distributed data engineering initiatives.'
  },
  {
    title: 'Senior Software Engineer',
    period: '2019 — 2021',
    description: 'Scaled large-scale data platforms and contributed to critical backend system improvements.'
  },
  {
    title: 'Software Engineer',
    period: '2017 — 2019',
    description: 'Developed microservices architecture and implemented data processing pipelines.'
  }
];

const Experience: React.FC = () => {
  const { theme } = useTheme();

  return (
    <section id="experience" className="section-spacing section-border container-custom">
      <h2 className="section-title fade-in" data-delay="100">Professional Journey</h2>
      <div className="content-column">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className={`p-4 rounded-lg transition-all duration-300 fade-in cursor-default ${
                theme === 'light' 
                  ? 'hover:bg-[#f0f9f1] text-gray-800 bg-white' 
                  : 'hover:bg-[#2d2d45] text-gray-100 bg-[#1f1f35]'
              }`}
              data-delay={150 + (index * 50)}
            >
              <h3 className="text-lg font-medium">{exp.title}</h3>
              <p className={`mb-2 ${
                theme === 'light' ? 'text-gray-600' : 'text-gray-300'
              }`}>{exp.period}</p>
              <p className={`text-sm ${
                theme === 'light' ? 'text-gray-700' : 'text-gray-200'
              }`}>{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;