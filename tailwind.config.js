module.exports = {
       content: [
              "./pages/**/*.{js,ts,jsx,tsx}",
              "./components/**/*.{js,ts,jsx,tsx}",
              "./styles/**/*.{css,scss,sass}",
       ],
        theme: {
    extend: {},
  },
 plugins: [
    require('@tailwindcss/forms'),
    // ...
  ]
}
