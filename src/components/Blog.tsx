import React from 'react';

const articles = [
  {
    title: 'Exploring Scalable Distributed Systems',
    link: '#'
  },
  {
    title: 'Leading Large Engineering Teams with Focus',
    link: '#'
  },
  {
    title: 'Cloud Infrastructure: Optimizations for Scale',
    link: '#'
  }
];

const Blog: React.FC = () => {
  return (
    <section id="writing" className="section-spacing section-border container-custom">
      <h2 className="section-title fade-in" data-delay="100">Technical Writing</h2>
      <div className="content-column">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {articles.map((article, index) => (
            <div 
              key={index} 
              className="fade-in p-4 rounded-lg hover:bg-[var(--hover)] transition-all duration-300" 
              data-delay={150 + (index * 50)}
            >
              <a 
                href={article.link} 
                className="text-lg group flex items-center h-full"
              >
                <span className="text-[var(--text)] group-hover:text-[var(--accent)] transition-all duration-300">
                  {article.title}
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

export default Blog;