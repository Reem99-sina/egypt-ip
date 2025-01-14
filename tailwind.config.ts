import { colors } from './src/theme';
import type { Config } from 'tailwindcss';

import withMT from '@material-tailwind/react/utils/withMT';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors,
      screens: {
        '2xl': '1370px',
      },
      fontFamily: {
        sans: ['var(--font-shamel)', 'var(--font-codec)'],
      }, boxShadow: {
        'custom': 'rgba(237, 237, 255, 0.89) 1px 4px 77px 0px',
      },
    },

    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '4rem',
        '2xl': '4rem',
      },
    },

    fontWeight: {
      light: '300',
      normal: '400',
      bold: '500',
      black: '700',
    },
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function ({ addComponents }: { addComponents: (params: any) => void }) {
      addComponents({
        '.container': {
          '@screen xl': {
            maxWidth: '90%',
            paddingRight: '1rem',
            paddingLeft: '1rem',
          },
        },
       
        '.container-lg': {
          width: '100%',
          paddingRight: '0.5rem' /* 8px */,
          paddingLeft: '0.5rem' /* 8px */,

          '@media (min-width: 540px)': {
            maxWidth: '540px',
            paddingRight: '1rem' /* 16px */,
            paddingLeft: '1rem' /* 16px */,
          },

          '@media (min-width: 720px)': {
            maxWidth: '720px',
          },

          '@media (min-width: 960px)': {
            maxWidth: '960px',
            paddingRight: '2rem' /* 32px */,
            paddingLeft: '2rem' /* 32px */,
          },

          '@media (min-width: 1140px)': {
            maxWidth: '1140px',
            paddingRight: '2rem' /* 32px */,
            paddingLeft: '2rem' /* 32px */,
          },

          '@media (min-width: 1320px)': {
            maxWidth: '1320px',
            paddingRight: '2rem' /* 32px */,
            paddingLeft: '2rem' /* 32px */,
          },

          '@screen xl': {
            maxWidth: '1500px',
          },
        },
        '.container-mobile': {
          width: '100%',
          paddingRight: '0.5rem' /* 8px */,
          paddingLeft: '0.5rem' /* 8px */,

          '@media (max-width: 320px)': {
            maxWidth: '320px',
            paddingRight: '0.25rem' /* 4px */,
            paddingLeft: '0.25rem' /* 4px */,
          },

          '@media (min-width: 321px) and (max-width: 480px)': {
            maxWidth: '480px',
            paddingRight: '0.5rem' /* 8px */,
            paddingLeft: '0.5rem' /* 8px */,
          },

          '@media (min-width: 481px) and (max-width: 540px)': {
            maxWidth: '540px',
            paddingRight: '1rem' /* 16px */,
            paddingLeft: '1rem' /* 16px */,
          },

          '@media (min-width: 541px) and (max-width: 720px)': {
            maxWidth: '720px',
          },

          '@media (min-width: 721px) and (max-width: 960px)': {
            maxWidth: '960px',
            paddingRight: '1.5rem' /* 24px */,
            paddingLeft: '1.5rem' /* 24px */,
          },

          '@media (min-width: 961px) and (max-width: 1140px)': {
            maxWidth: '1140px',
            paddingRight: '2rem' /* 32px */,
            paddingLeft: '2rem' /* 32px */,
          },

          '@media (min-width: 1141px) and (max-width: 1320px)': {
            maxWidth: '1320px',
            paddingRight: '2rem' /* 32px */,
            paddingLeft: '2rem' /* 32px */,
          },

          '@media (min-width: 1321px) and (max-width: 1450px)': {
            maxWidth: '1450px',
          },
        },
      });
    },
    require('tailwind-scrollbar-hide'),
  ],
};

export default withMT(config);
