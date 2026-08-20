import { useRef } from 'react';
import BrandHeader from '../../components/BrandHeader/BrandHeader';
import FloatingDock from '../../components/FloatingDock/FloatingDock';
import { principles, timeline } from './experienceContent';
import useRevealOnScroll from './useRevealOnScroll';
import useExperienceTilt from './useExperienceTilt';
import '../../styles/experience.css';

export default function ExperiencePage() {
  const pageRef = useRef(null);
  const { tiltRef, imageRef, onPointerMove, onPointerLeave } = useExperienceTilt();
  useRevealOnScroll(pageRef);

  return (
    <div className="experience-page" ref={pageRef}>
      <BrandHeader />
      <div className="ambient-light" aria-hidden="true" />

      <main className="experience-main">
        <section className="experience-section experience-hero">
          <div className="hero-visual reveal" onPointerMove={onPointerMove} onPointerLeave={onPointerLeave}>
            <div className="hero-shadow" aria-hidden="true" />
            <div className="hero-tilt" ref={tiltRef}>
              <img
                ref={imageRef}
                src="https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?auto=format&fit=crop&w=800&q=80"
                alt="Abstract blue three-dimensional form"
              />
            </div>
          </div>
          <div className="reveal">
            <p className="eyebrow">Experience</p>
            <h1>Beyond the pixels.</h1>
            <p className="hero-subtitle">The human side of the engineering process.</p>
          </div>
        </section>

        <section className="experience-section statement reveal">
          <p>
            I build digital experiences from the logic underneath them. As a{' '}
            <strong>programmer and data enthusiast</strong>, I enjoy turning complex problems into
            reliable, useful systems—then making those systems feel clear to the people who use them.
          </p>
        </section>

        <section className="experience-section">
          <h2 className="section-label reveal">Working principles</h2>
          <div className="principles stagger-reveal">
            {principles.map((principle) => (
              <article key={principle.number}>
                <span>{principle.number}</span>
                <h3>{principle.title}</h3>
                <p>{principle.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="experience-section">
          <h2 className="section-label reveal">Selected experience</h2>
          <div className="timeline stagger-reveal">
            {timeline.map((entry) => (
              <article key={`${entry.period}-${entry.title}`}>
                <p className="timeline-period">{entry.period}</p>
                <div>
                  <h3>{entry.title}</h3>
                  <p className="timeline-org">{entry.org}</p>
                  <p>{entry.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="experience-section quote reveal">
          <blockquote>&ldquo;The details are not the details. They make the design.&rdquo;</blockquote>
        </section>
      </main>

      <section className="closing reveal">
        <h2>If any of this resonates, let&rsquo;s talk.</h2>
        <a href="mailto:mkharisi2004@gmail.com">Start a conversation</a>
      </section>

      <FloatingDock />
    </div>
  );
}
