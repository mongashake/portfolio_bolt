import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="section-spacing section-border container-custom">
      <div className="content-column text-center fade-in" data-delay="100">
        <h2 className="section-title">About</h2>
        <p className="text-base md:text-lg text-[var(--text)]">
          I'm a Bangalore-based Staff Software Engineer specializing in distributed systems, 
          cloud infrastructure, and technical leadership. I'm passionate about 
          creating robust, scalable solutions — while exploring personal growth, 
          creative evolution, and future global collaborations.
        </p>
      </div>
    </section>
  );
};

export default About;