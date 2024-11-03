import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sora: 'Sora',
      },
      colors: {
        primary: '#9538E2'
      },
      backgroundImage: {
        banner: "url('/src/assets/img/banner.jpg')"
     }
    },
  },
  plugins: [
    (daisyui),
  ],
}

