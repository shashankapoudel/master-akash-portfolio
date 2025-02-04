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
        'custom-1': '10px 10px 100px 10px',
        'custom-2': '10px 100px 100px 10px',
        'custom-3': '10px 100px 10px 10px',
        'custom-4': '10px 10px 10px 100px',
        'custom-5': '100px 10px 10px 100px',
        'custom-6': '100px 10px 10px 10px',
        'custom-1-sm': '10px 10px 50px 10px',
        'custom-2-sm': '10px 50px 50px 10px',
        'custom-3-sm': '10px 50px 10px 10px',
        'custom-4-sm': '10px 10px 10px 50px',
        'custom-5-sm': '50px 10px 10px 50px',
        'custom-6-sm': '50px 10px 10px 10px',
        'home-custom': '360px 10px 100px 100px',
        'home-custom-sm': '120px 10px 60px 60px',
        'card-custom': '120px 120px 120px 120px'
      },
    },
  },
  plugins: [],
}
