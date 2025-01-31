// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'marck-script': ['Marck Script', 'cursive'],
        'playfair-display': ['Playfair Script'],
        'poppins': ['Poppins'],
      },
      borderRadius: {
        'custom': '10px 10px 10px 100px',
        'home-custom': '360px 10px 100px 100px'
      },
    },
  },
  plugins: [],
}
