/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html, js}'],
  theme: {
    extend: {
      spacing: {
        'small': '5px',
        'gap': '10px',
        'trim-small': '15px',
        'box-spacing': '20px',
        'trim': '30px',
        'large': '50px',
        'x-large': '80px',
        'big': '100px',
        'x-big': '150px',
      },
      colors: {
        'dark-blue-01' : '#1C2431', // intro and email sign up background
        'dark-blue-02' : '#181F2A', // main background
        'dark-blue-03' : '#0B1523', // footer background
        'dark-blue-04' : '#202A3C', // testimonials background
        'cyan' : '#65E2D9', // inside call-to-action gradient
        'blue' : '#339ECC', // inside call-to-action gradient
        'red' : '#FF4242', // error
        'gray-01' : '#C3C3C3',
      },
    },
    fontFamily: {
      sans: ['Open Sans', 'sans-serif'],
      serif: ['Raleway', 'sans-serif']
    },
  },
  plugins: [],
}

