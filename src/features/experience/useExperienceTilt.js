import { useCallback, useRef } from 'react';

export default function useExperienceTilt() {
  const tiltRef = useRef(null);
  const imageRef = useRef(null);

  const onPointerMove = useCallback((event) => {
    if (event.pointerType === 'touch' || !tiltRef.current || !imageRef.current) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    tiltRef.current.style.transition = 'none';
    imageRef.current.style.transition = 'none';
    tiltRef.current.style.transform = `rotateX(${-y * 12}deg) rotateY(${x * 20}deg) translate(${x * 15}px, ${y * 10}px)`;
    imageRef.current.style.filter = `grayscale(1) contrast(1.2) drop-shadow(${-x * 30}px ${20 - y * 20}px 40px rgba(0,0,0,.8))`;
  }, []);

  const onPointerLeave = useCallback(() => {
    if (!tiltRef.current || !imageRef.current) return;
    tiltRef.current.style.transition = '';
    imageRef.current.style.transition = '';
    tiltRef.current.style.transform = '';
    imageRef.current.style.filter = '';
  }, []);

  return { tiltRef, imageRef, onPointerMove, onPointerLeave };
}
