import React from 'react';
import { Music, Github, Twitter } from 'lucide-react';

const integrations = [
  {
    title: 'Currently Playing',
    icon: <Music size={24} />,
    description: 'Apple Music',
    link: '#',
    bgClass: 'bg-gradient-to-br from-pink-500 to-rose-500'
  },
  {
    title: 'Latest Commits',
    icon: <Github size={24} />,
    description: 'GitHub Activity',
    link: 'https://github.com/',
    bgClass: 'bg-gradient-to-br from-gray-700 to-gray-900'
  },
  {
    title: 'Recent Tweets',
    icon: <Twitter size={24} />,
    description: 'Twitter Feed',
    link: 'https://twitter.com/',
    bgClass: 'bg-gradient-to-br from-blue-400 to-blue-600'
  }
];

const Integrations: React.FC = () => {
  return (
    <section className="section-spacing container-custom">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {integrations.map((integration, index) => (
          <a
            key={index}
            href={integration.link}
            target="_blank"
            rel="noopener noreferrer"
            className="fade-in group"
            data-delay={100 + (index * 50)}
          >
            <div className={`${integration.bgClass} p-6 rounded-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-xl`}>
              <div className="flex items-center space-x-3 text-white">
                {integration.icon}
                <div>
                  <h3 className="font-medium">{integration.title}</h3>
                  <p className="text-sm opacity-80">{integration.description}</p>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Integrations;