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
        primary: '#9538E2',
        secondary: '#9538E2',
        textPrimary: '#0B0B0B',
        textsecondary: '#09080F' 
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

