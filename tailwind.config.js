module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        proza: ["Proza"]
      }
    },
  },
  plugins: [require('@tailwindcss/forms'),require('@tailwindcss/typography')],
}