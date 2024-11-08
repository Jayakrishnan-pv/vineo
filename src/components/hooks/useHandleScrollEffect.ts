'use client';
import { useEffect } from 'react';

export function useHandleScrollEffect() {
  useEffect(() => {
    let timeoutId: string | number | NodeJS.Timeout | undefined;

    const handleScroll = () => {
      document.body.classList.add('scrolling');
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        document.body.classList.remove('scrolling');
      }, 1000);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);
}
