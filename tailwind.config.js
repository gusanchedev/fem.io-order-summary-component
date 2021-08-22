module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "pale-blue": "hsl(225, 100%, 94%)",
        "bright-blue": "hsl(245, 75%, 52%)",
        "very-pale-blue": "hsl(225, 100%, 98%)",
        "desaturated-blue": "hsl(224, 23%, 55%)",
        "dark-blue": "hsl(223, 47%, 23%)",
      },
      boxShadow: {
        '3xl': '0px 13px 21px -5px hsl(225deg 80% 80%)',
        'card': '1px 27px 34px 0px hsl(225deg 100% 90%)',
      },
      fontFamily: {
        "red-hat-display": ['"Red Hat Display"', 'sans-serif'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
