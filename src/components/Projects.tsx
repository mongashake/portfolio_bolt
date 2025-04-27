import React from 'react';

const projects = [
  {
    title: 'Enterprise Data Platform',
    link: '#'
  },
  {
    title: 'Real-Time Analytics Framework',
    link: '#'
  },
  {
    title: 'Creative Systems Experiments',
    link: '#'
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="section-spacing section-border container-custom">
      <h2 className="section-title fade-in" data-delay="100">Featured Projects</h2>
      <div className="content-column">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="fade-in p-4 rounded-lg hover:bg-[var(--hover)] transition-all duration-300" 
              data-delay={150 + (index * 50)}
            >
              <a 
                href={project.link} 
                className="text-lg group flex items-center h-full"
              >
                <span className="text-[var(--text)] group-hover:text-[var(--accent)] transition-all duration-300">
                  {project.title}
                </span>
                <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;