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
        'fifthBg': 'url(\'/assets/images/homepage/fifthBg.png\')',
        'footerGrad': 'linear-gradient(176.41deg, #FEFDFC 52.27%, #E0DBD2 77.73%, #E0DBD2 89.52%)',
      },
      backgroundSize: {
        'image-size': '600px',
      },
      backgroundColor: {
        'custom-color': '#f78a79',
        'card-bg': '#F78A79',
      },
      borderColor: {
        'custom-color': '#f78a79',
      },
      textColor: {
        'custom-color': '#f78a79',
      },
      color: {
        'custom-color': '#F78A79',
      },
      height: {
        '90p': '93%',
        '200p': '500px',
        '42': '420px',
      },
      width: {
        '2k': '2000px',
        'tab': '1000px',
        '90p': '90%',
        '30p': '300px',
        '50': '500px',
        '200p': '600px',
        '100p': '400px',
        '300p': '800px',
      },
      maxWidth: {
        '40': '350px',
        'custom': '1000px',
        '50': '400px',
        '60': '600px',
        '50p': '500px',
        '70': '800px',
        '2000': '2000px',
      },
      minWidth: {
        '60p': '400px',
      },
      minHeight: {
        '50p': '300px',
      },
      maxHeight: {
        '50': '700px',
        '40p': '400px',
      },
      screens: {
        'lg-c': '1280px',
        'md-c': '560px',
        'md-m': '700px',
        'sm-m': '420px',
        'sm-c': '300px',
      },
      spacing: {
        74: '250px',
        22: '70px',
        30: '800px',
      },
      backdropBlur: {
        xs: '1px',
      },
    },
  },
  plugins: [],
} satisfies Config;
