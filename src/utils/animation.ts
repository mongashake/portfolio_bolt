export const setupAnimations = () => {
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target as HTMLElement;
        const delay = target.dataset.delay ? parseInt(target.dataset.delay) : 0;
        
        setTimeout(() => {
          target.classList.add('visible');
        }, delay);
        
        observer.unobserve(target);
      }
    });
  }, options);

  const elements = document.querySelectorAll('.fade-in');
  elements.forEach(el => observer.observe(el));
};