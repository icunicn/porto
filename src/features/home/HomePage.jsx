import { useEffect, useState } from 'react';
import BrandHeader from '../../components/BrandHeader/BrandHeader';
import FloatingDock from '../../components/FloatingDock/FloatingDock';
import { defaultHero, heroViews } from './homeContent';
import useHeroTilt from './useHeroTilt';
import '../../styles/home.css';

export default function HomePage() {
  const [activeView, setActiveView] = useState(null);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);
  const { cardRef, onPointerMove, onPointerLeave } = useHeroTilt();
  const hero = activeView ? heroViews[activeView] : defaultHero;
  useEffect(() => { if (!toastVisible) return undefined; const timer = window.setTimeout(() => setToastVisible(false), 2200); return () => window.clearTimeout(timer); }, [toastVisible]);
  async function copyEmail() { try { await navigator.clipboard?.writeText('mkharisi2004@gmail.com'); } catch {} setToastVisible(true); }
  return <div className="home-page"><BrandHeader /><main className="hero" id="home"><section className="intro" aria-live="polite"><p className="eyebrow">Programmer &amp; Data Enthusiast</p><h1>{hero.title}</h1><p className="lede">{hero.copy}</p></section><section className="art-stage" aria-label="Featured project artwork" onPointerMove={onPointerMove} onPointerLeave={onPointerLeave}><div className="art-card" ref={cardRef}><img src="/assets/tes.jpeg" alt="Selected portfolio work" /><span className="sheen" aria-hidden="true" /><span className="art-label">Selected work<br /><b>01 — 04</b></span></div></section></main><div className="contact"><button type="button" onClick={copyEmail}>mkharisi2004@gmail.com</button><i aria-hidden="true" /><a href="mailto:mkharisi2004@gmail.com">Book a call</a></div><FloatingDock activeView={activeView} onPreview={setActiveView} onReset={() => setActiveView(null)} onResume={() => setResumeOpen(true)} /><div className={`toast ${toastVisible ? 'show' : ''}`} role="status">Email copied to clipboard.</div>{resumeOpen && <div className="dialog-backdrop" role="presentation" onMouseDown={() => setResumeOpen(false)}><section className="resume-dialog" role="dialog" aria-modal="true" aria-labelledby="resume-title" onMouseDown={(event) => event.stopPropagation()}><button className="close" type="button" aria-label="Close resume" onClick={() => setResumeOpen(false)}>×</button><p className="eyebrow">The short version</p><h2 id="resume-title">Designing what’s next.</h2><div className="resume-list"><p><b>Software &amp; Data Builder</b><span>2024—now</span></p><p><b>Programmer</b><span>Full-stack &amp; data work</span></p><p><b>Core skills</b><span>Web apps, data, systems</span></p></div><a className="download" href="mailto:mkharisi2004@gmail.com">Request full resume <span>↓</span></a></section></div>}</div>;
}
