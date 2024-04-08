/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'papaya-whip': '#FDF0D5',
        'fire-brick': '#C1121F',
        'air-blue': '#669BBC',
        'barn-red': '#780000',
        'prussian-blue': '#003049'
      },
    }
  },
  plugins: []
};