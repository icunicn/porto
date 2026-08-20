import { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './FloatingDock.css';

const items = [{ label: 'Experience', to: '/experience' }, { label: 'Products', view: 'products' }, { label: 'About', view: 'about' }];

export default function FloatingDock({ activeView, onPreview, onReset, onResume }) {
  const dockRef = useRef(null);
  const indicatorRef = useRef(null);
  const location = useLocation();
  const moveIndicator = (target) => {
    const dock = dockRef.current?.getBoundingClientRect();
    const rect = target.getBoundingClientRect();
    if (!dock || !indicatorRef.current) return;
    indicatorRef.current.style.transform = `translateX(${rect.left - dock.left}px)`;
    indicatorRef.current.style.width = `${rect.width}px`;
  };
  return <nav className="dock" ref={dockRef} aria-label="Primary navigation" onMouseLeave={onReset}>
    <span className="dock-indicator" ref={indicatorRef} aria-hidden="true" />
    {items.map((item) => item.to ? <Link key={item.label} className={location.pathname === item.to ? 'active' : ''} to={item.to} aria-current={location.pathname === item.to ? 'page' : undefined} onMouseEnter={(event) => moveIndicator(event.currentTarget)}>{item.label}</Link> : <button key={item.label} className={activeView === item.view ? 'active' : ''} type="button" onMouseEnter={(event) => { moveIndicator(event.currentTarget); onPreview?.(item.view); }} onFocus={(event) => { moveIndicator(event.currentTarget); onPreview?.(item.view); }} onClick={() => onPreview?.(item.view)}>{item.label}</button>)}
    <button type="button" onMouseEnter={(event) => moveIndicator(event.currentTarget)} onClick={() => onResume?.()}>Resume</button>
  </nav>;
}
