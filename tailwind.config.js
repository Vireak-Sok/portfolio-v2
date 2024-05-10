/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      aspectRatio: {
        '4/3': '4 / 3',
      },
      fontFamily: {
        'urbanist': ["Urbanist", "sans-serif"],
      },
      keyframes: {
        'letter-warp': {
          '0%, 100%': { letterSpacing: '2px' },
          '50%': { letterSpacing: '5px' },
        },
        'scrolling': {
          '0%': { opacity: 0, transform: 'translate(0, -15px)'},
          '100%': { opacity: 1, transform: 'translate(0, 8px)'}
        }
      },
      animation: {
        warp: 'letter-warp 1s ease-in-out infinite',
        scroll: 'scrolling 1s linear infinite',
      }
    },
  },
  plugins: [require("daisyui")],
};
