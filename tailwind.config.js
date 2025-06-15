/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',       // ✅ covers layout.tsx, page.tsx, etc.
    './src/components/**/*.{js,ts,jsx,tsx}', // ✅ if you’re using a components folder
    './src/**/*.{js,ts,jsx,tsx}',            // ✅ catch-all to ensure everything is covered
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
