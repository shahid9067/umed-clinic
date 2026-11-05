import { useEffect } from 'react';

export function useScrollReveal() {
  useEffect(() => {
    document.documentElement.classList.add('js-reveal');

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
        el.classList.add('is-revealed');
      });
      return;
    }

    const revealAll = () => {
      document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
        el.classList.add('is-revealed');
      });
    };

    if (typeof IntersectionObserver !== 'undefined') {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-revealed');
              observer.unobserve(entry.target);
            }
          });
        },
        {
          rootMargin: '120px 0px 120px 0px',
          threshold: 0.05,
        }
      );

      document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
        observer.observe(el);
      });

      // Also reveal anything currently in viewport
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      document.querySelectorAll('.reveal-on-scroll:not(.is-revealed)').forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < windowHeight * 1.2) {
          el.classList.add('is-revealed');
        }
      });

      // Safety timeout: never leave content permanently hidden
      const timer = setTimeout(revealAll, 1200);

      return () => {
        observer.disconnect();
        clearTimeout(timer);
      };
    } else {
      revealAll();
    }
  }, []);
}
