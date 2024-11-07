import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'glass-bottle': 'url(\'/assets/images/glass-bottle.png\')',
        'vineo-logo': 'url(\'/assets/images/vineo-logo.svg\')',
        'home-background': 'url(\'/assets/images/homebg.png\')',
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
        'tab': '1000px',
        '90p': '50%',
      },
      screens: {
        'lg-c': '1280px',
        'md-c': '560px',
        'sm-c': '300px',
      },
    },
  },
  plugins: [],
} satisfies Config;
