module.exports = {
       content: [
              "./pages/**/*.{js,ts,jsx,tsx}",
              "./components/**/*.{js,ts,jsx,tsx}",
              "./styles/**/*.{css,scss,sass}",
       ],
       theme: {
              extend: {

                     colors: {
                            'darkBlue': "#0c4a6e",
                            'white': "#ffff",
                            'lightBlue': "#38bdf8"
                     },

                     screens: {
                            'md': '769px'
                     },
                     fontFamily: {
                            'sans': ['Montserrat', 'sans-serif']

                     }
              },
       },
       plugins: [
              require('@tailwindcss/forms'),
              require('@tailwindcss/typography'),
              require('@tailwindcss/aspect-ratio'),
              require('@tailwindcss/line-clamp')
       ],
}
