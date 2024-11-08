import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'glass-bottle': 'url(\'/assets/images/glass-bottle.png\')',
        'vineo-logo': 'url(\'/assets/images/vineo-logo.svg\')',
        'home-background': 'url(\'/assets/images/homebg.png\')',
        'custom-gradient': 'linear-gradient(174.81deg, rgba(249, 246, 239, 0) -171.89%, rgba(247, 138, 121, 0.82) 15.79%, #F78A79 53.19%, #F78A79 95.25%)',
        'secondBg': 'url(\'/assets/images/homepage/secondbg.jpg\')',
      },
      backgroundSize: {
        'image-size': '600px',
      },
      backgroundColor: {
        'custom-color': '#f78a79',
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
      spacing: {
        74: '250px',
      },
    },
  },
  plugins: [],
} satisfies Config;
