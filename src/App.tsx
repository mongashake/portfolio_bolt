import React, { useEffect } from 'react';
import Header from './components/Header';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Integrations from './components/Integrations';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { setupAnimations } from './utils/animation';

function App() {
  useEffect(() => {
    setupAnimations();
  }, []);

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--text)]">
      <Header />
      <Integrations />
      <Experience />
      <Projects />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;