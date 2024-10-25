import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'glass-bottle': 'url(\'/assets/images/glass-bottle.png\')',
        'vineo-logo': 'url(\'/assets/images/vineo-logo.svg\')',
        'home-background': 'url(\'/Bannerr (3) 2.png\')',
      },
      backgroundSize: {
        'image-size': '600px',
      },
      color: {
        'custom-color': '#F78A79',
      },
      height: {
        '90p': '93%',
      },
      width: {
        '2k': '2000px',
      },
      screens: {
        'lg-c': '1280px',
        'md-c': '860px',
        'sm-c': '300px',
      },
    },
  },
  plugins: [],
} satisfies Config;
