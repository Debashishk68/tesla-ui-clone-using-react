/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1080px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '648px'},
      // => @media (max-width: 639px) { ... }
      's':{'min':'330px'},
    },
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },
      blur: {
        xs: '2px',
      }
    ,
      backgroundImage: {
        'model-3':"url('./src/assets/Homepage-Model-3-Desktop-LHD-v2.avif')",
        'model-y':"url('./src/assets/Homepage-Model-Y-Desktop-Global.avif')",
        'model-x':"url('./src/assets/Homepage-Model-X-Desktop-v2.avif')",
        'model-s':"url('./src/assets/Homepage-Model-S-Desktop-v2.avif')",
        'cybertrkk':"url('./src/assets/Homepage-Cybertruck-Desktop.avif')",
        'solarpanels':"url('./src/assets/Homepage-SolarPanels-01-Desktop.avif')",
        'solarroof':"url('./src/assets/Homepage-SolarRoof-Desktop-Global.jfif')",
        'powerwall':"url('./src/assets/Homepage-Powerwall-01-Desktop.avif')",
        'accessories':"url('./src/assets/Homepage-Accessories-Desktop-NA-APAC.avif')"
      },
      keyframes: {
        dropdown: {
          '0%': { opacity: '0', transform: 'translateY(-560px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      animation: {
        dropdown: 'dropdown 1s ease-out',
      }
    }
      
    
  },
  plugins: [],
}