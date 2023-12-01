/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    screens: {
      xs: '450px',
      // => @media (min-width: 450px) { ... }

      sm: '575px',
      // => @media (min-width: 576px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '992px',
      // => @media (min-width: 992px) { ... }

      xl: '1200px',
      // => @media (min-width: 1200px) { ... }

      '2xl': '1400px',
      // => @media (min-width: 1400px) { ... }
    },
    extend: {
      colors: {
        current: 'currentColor',
        transparent: 'transparent',
        menugray: '#2e2e2e',
        language: '#242424',
        languagecolor: '#a6a6a6',
        graysplitbg: '#383838',
        gray2splitbg: '#222',
        gray3splitbg: '#404040',
        gray4splitbg: '#4c4c4c',
        darksplitbg: '#1a1a1a',
        secondarybtn: '#666',
        cardbg: '#212121',
        hero: '#4a4a55',
        h1title: '#e6e6e6',
        h1subtitle: '#ccc',
        border1: '#737373',
        browser: '#999',
        white: '#FFFFFF',
        black: '#090E34',
        dark: '#1D2144',
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        yellow: '#FBB040',
        'body-color': '#959CB1',
      },
      boxShadow: {
        signUp: '0px 5px 10px rgba(4, 10, 34, 0.2)',
        one: '0px 2px 3px rgba(7, 7, 77, 0.05)',
        sticky: 'inset 0 -1px 0 0 rgba(0, 0, 0, 0.1)',
      },
      backgroundImage: {
        'custom-gradient': "radial-gradient(64.14% 72.25% at 47.58% 31.75%, rgba(113,120,127,.52) 0%, rgba(255,255,255,0) 100%), linear-gradient(92.4deg, #26292c 14.67%, rgba(0,0,0,.48) 54.37%, rgba(26,34,40,.62) 92.49%), linear-gradient(#e3e6e8, #203746)",
      },
      borderColor: {
        'white-10': '#3a3a3a',
      },
      fontSize: {
        '7-75xl': ['5.75rem', 'inherit'],
        '5xl-inherit': ['3rem', 'inherit'],
        'base-none': ['1rem', '0.6'],
      },
      letterSpacing: {
        widester: '0.15em',
      },
      padding: {
        '61': '14.6rem',
        '14': '3.3rem',
      },
      spacing: {
        '46rem': '46rem',
      },
      maxHeight: {
        '30': '30rem',
      },
      width: {
        '3/4': '75%',
      },
      maxWidth: {
        '3/4': '85%',
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.custom-filter': {
          '-webkit-filter': 'invert(4) brightness(1.2)',
          'filter': 'invert(4) brightness(1.2)',
        },
      })
    },
  ],
}