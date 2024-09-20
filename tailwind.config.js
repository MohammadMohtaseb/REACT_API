const flowbite = require('flowbite-react/tailwind');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',  // Adjust paths as needed
    './public/index.html',          // Include the HTML file if it's in the public directory
    flowbite.content(),             // Add Flowbite content paths
  ],
  theme: {
    extend: {},
  },
  plugins: [
    flowbite.plugin(),              // Add Flowbite plugin
  ],
};
