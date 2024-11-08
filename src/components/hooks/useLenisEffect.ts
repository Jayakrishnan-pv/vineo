'use client';
import Lenis from '@studio-freight/lenis';
import { useEffect } from 'react';

export function useLenisEffect() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 2,
      easing: t => Math.min(1, 1.001 - 2 ** (-10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
}
