import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 text-center text-sm text-[var(--secondary)] border-t border-[var(--border)]">
      <div className="container-custom">
        <p>© {new Date().getFullYear()} Aditya Vikram Monga. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;