/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'heroesBackground': "url('./assets/background.jpg')",
      }),
      fontFamily: {
        'bangers': ['Bangers'],
      }

    },
    plugins: [],
  }
}
