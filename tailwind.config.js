/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-90': 'linear-gradient(135deg, var(--tw-gradient-stops))'
      },
      colors: {
        'primary': '#1F1F1F',
        'secondary': '#DE5A42',
        'whites': '#F3F1EC',
        'greenlight': '#9BCF53',
        'gray': '#787878'
      },
      fontFamily: {
         'modern-era-light': 'modern_era_light',
         'modern-era-regular': 'modern_era_regular',
         'modern-era-medium': 'modern_era_medium',
         'anton': ['Anton', 'sans-serif']
      }
    },
  },
  plugins: [],
}

