import { useEffect } from 'react';

export function useScrollReveal() {
  useEffect(() => {
    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
        el.classList.add('is-revealed');
      });
      return;
    }

    // Mark as reveal-ready so CSS activates the initial opacity: 0 and translateY
    document.documentElement.classList.add('reveal-ready');

    const revealElement = (el: Element) => {
      el.classList.add('is-revealed');
    };

    const revealAll = () => {
      document.querySelectorAll('.reveal-on-scroll').forEach(revealElement);
    };

    if (typeof IntersectionObserver !== 'undefined') {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              revealElement(entry.target);
              observer.unobserve(entry.target);
            }
          });
        },
        {
          rootMargin: '0px 0px -40px 0px',
          threshold: 0.1,
        }
      );

      const elements = document.querySelectorAll('.reveal-on-scroll');
      elements.forEach((el) => {
        // If element is already in the viewport upon mount, reveal it immediately
        const rect = el.getBoundingClientRect();
        if (rect.top <= (window.innerHeight || document.documentElement.clientHeight)) {
          revealElement(el);
        } else {
          observer.observe(el);
        }
      });

      // Passive scroll listener for fast wheel scrolling
      const handleScroll = () => {
        const threshold = window.innerHeight * 0.95;
        document.querySelectorAll('.reveal-on-scroll:not(.is-revealed)').forEach((el) => {
          const rect = el.getBoundingClientRect();
          if (rect.top <= threshold) {
            revealElement(el);
            observer.unobserve(el);
          }
        });
      };

      window.addEventListener('scroll', handleScroll, { passive: true });

      // Safety timeout: ensure everything is visible after 2s regardless of scroll
      const safetyTimer = setTimeout(revealAll, 2000);

      return () => {
        observer.disconnect();
        window.removeEventListener('scroll', handleScroll);
        clearTimeout(safetyTimer);
      };
    } else {
      revealAll();
    }
  }, []);
}
