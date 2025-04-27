import React from 'react';
import { Mail, Linkedin, Github, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section-spacing section-border container-custom pb-24">
      <h2 className="section-title fade-in" data-delay="100">Let's Connect</h2>
      <div className="text-center content-column">
        <p className="mb-8 fade-in text-[var(--text)]" data-delay="150">
          Available for conversations and collaborations.
        </p>
        <div className="flex flex-col items-center space-y-4 fade-in" data-delay="200">
          <div className="flex items-center space-x-8">
            <a 
              href="mailto:contact@adityamonga.com" 
              className="flex items-center space-x-2 text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors duration-300"
            >
              <Mail size={18} />
              <span>Email</span>
            </a>
            <a 
              href="https://linkedin.com/in/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center space-x-2 text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors duration-300"
            >
              <Linkedin size={18} />
              <span>LinkedIn</span>
            </a>
          </div>
          <div className="flex items-center space-x-8">
            <a 
              href="https://github.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center space-x-2 text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors duration-300"
            >
              <Github size={18} />
              <span>GitHub</span>
            </a>
            <a 
              href="https://twitter.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center space-x-2 text-[var(--accent)] hover:text-[var--accent-hover)] transition-colors duration-300"
            >
              <Twitter size={18} />
              <span>Twitter</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;