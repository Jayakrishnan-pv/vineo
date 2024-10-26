'use client';

import '@/styles/global.css';

import { enUS, frFR } from '@clerk/localizations';
import { ClerkProvider } from '@clerk/nextjs';
import Lenis from '@studio-freight/lenis';
import { useEffect } from 'react';
import { register } from 'swiper/element/bundle';

import { AppConfig } from '@/utils/AppConfig';

register();

export default function AuthLayout(props: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  let clerkLocale = enUS;
  let signInUrl = '/sign-in';
  let signUpUrl = '/sign-up';
  let dashboardUrl = '/dashboard';

  if (props.params.locale === 'fr') {
    clerkLocale = frFR;
  }

  if (props.params.locale !== AppConfig.defaultLocale) {
    signInUrl = `/${props.params.locale}${signInUrl}`;
    signUpUrl = `/${props.params.locale}${signUpUrl}`;
    dashboardUrl = `/${props.params.locale}${dashboardUrl}`;
  }
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

  return (
    <div>
      <ClerkProvider
        localization={clerkLocale}
        signInUrl={signInUrl}
        signUpUrl={signUpUrl}
        signInFallbackRedirectUrl={dashboardUrl}
        signUpFallbackRedirectUrl={dashboardUrl}
      >
        {props.children}
      </ClerkProvider>
    </div>
  );
}
