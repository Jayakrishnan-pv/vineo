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
    },
  },
  plugins: [],
} satisfies Config;
