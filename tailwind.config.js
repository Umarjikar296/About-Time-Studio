/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: { extend: { colors: { cream: '#F4F0E8', ink: '#171717', cobalt: '#315CFF' }, fontFamily: { display: ['var(--font-space-grotesk)'], body: ['var(--font-inter)'] } } },
  plugins: [],
};
