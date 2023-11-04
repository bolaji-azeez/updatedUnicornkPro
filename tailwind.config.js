/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  "/node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    
    colors: {},
    extend: {
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif']
      },
      boxShadow: {
        '4xl': '0 60px 60px -15px rgba(0, 0, 0.3, 0.5)',
      }
    },
    screens: {
      sm: { min: "300px", max: "767px" },
      // => @media (min-width: 640px and max-width: 767px) { ... }
      md: { min: "768px", max: "1023px" },
      // => @media (min-width: 768px and max-width: 1023px) { ... }
      lg: { min: "1024px", max: "1279px" },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }
      xl: { min: "1280px", max: "1535px" },
      // => @media (min-width: 1280px and max-width: 1535px) { ... }
      "2xl": { min: "1536px" },
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}
