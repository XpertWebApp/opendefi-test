/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    "./pages/**/*.{ts,tsx}",
    "./public/**/*.html", 
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {},
    fontFamily: {
      Karla: ['Karla', 'sans-serif'],
    },
    colors: { 
      transparent: 'transparent',
      'black': '#000000',
      'white': '#ffffff',
      'primary': '#0089FF',
      'gray-9': '#0f172a',
      'gray-4': '#9ca3af',
      'gray-2': '#f9fafb'
    }
  },
  plugins: [],
}
