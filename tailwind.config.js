/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    screens: {
      'mobileS': '320px',
      'mobile': '500px',
      'tablet': '768px'
    },
    extend: {
      backgroundImage: {
        'background': "url('/public/Assets/background.png')"
      },
      backgroundSize: {
        'cov' : '100% 100% , contain'
      },
      boxShadow: {
        '3xl': '0px 0px 25px 0px rgba(0, 0, 0, 0.15)',
        '4xl': '0px 0px 35px 0px rgba(0, 0, 0, 0.25)'
      }
    },
  },
  plugins: [],
}
