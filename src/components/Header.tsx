import React from 'react';
import { Github, Twitter, Linkedin, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="py-16 container-custom">
      <div className="flex justify-end mb-4">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-[var(--hover)] transition-colors duration-300 text-[var(--accent)] hover:text-[var(--accent-hover)]"
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
        </button>
      </div>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="text-left fade-in" data-delay="0">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-2 text-[var(--text)]">
            Aditya Vikram Monga
          </h1>
          <h2 className="text-lg md:text-xl mb-3 text-[var(--secondary)]">
            Staff Software Engineer & Creative Technologist
          </h2>
          <p className="text-sm md:text-base text-[var(--text)] mb-4">
            Building scalable systems and creative solutions from Bangalore, India.
          </p>
          <div className="flex space-x-4">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="social-link github">
              <Github size={20} />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="social-link twitter">
              <Twitter size={20} />
            </a>
            <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer" className="social-link linkedin">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
        <div className="fade-in" data-delay="100">
          <p className="text-base md:text-lg text-[var(--text)]">
            I'm a Bangalore-based Staff Software Engineer specializing in distributed systems, 
            cloud infrastructure, and technical leadership. I'm passionate about 
            creating robust, scalable solutions — while exploring personal growth, 
            creative evolution, and future global collaborations.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;