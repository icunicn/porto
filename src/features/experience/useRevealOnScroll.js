import { useEffect } from 'react';

export default function useRevealOnScroll(containerRef) {
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return undefined;
    const targets = container.querySelectorAll('.reveal, .stagger-reveal');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      targets.forEach((element) => element.classList.add('visible'));
      return undefined;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

    targets.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [containerRef]);
}
