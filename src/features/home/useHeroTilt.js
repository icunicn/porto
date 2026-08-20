import { useCallback, useRef } from 'react';

export default function useHeroTilt() {
  const cardRef = useRef(null);
  const onPointerMove = useCallback((event) => {
    if (event.pointerType === 'touch' || !cardRef.current) return;
    const box = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - box.left) / box.width - .5;
    const y = (event.clientY - box.top) / box.height - .5;
    cardRef.current.style.transform = `rotateX(${-y * 9}deg) rotateY(${x * 11}deg) translateZ(10px)`;
  }, []);
  const onPointerLeave = useCallback(() => { if (cardRef.current) cardRef.current.style.transform = ''; }, []);
  return { cardRef, onPointerMove, onPointerLeave };
}
