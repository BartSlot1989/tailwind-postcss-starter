/** @type {import('tailwindcss').Config} */
module.exports = {
    plugins: [
      require('tailwindcss-animated'),
      require('tailwindcss-daisy'),
    ],
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        screens: {
          sm: '480px',
          md: '768px',
          lg: '976px',
          xl: '1440px',
        },
        colors: {
          purple: {
            900: '#662D91',
          },
          yellow: {
            500: '#FCEA03',
          },
        },
        spacing: {
          '128': '32rem',
          '144': '36rem',
        }
      }
    }
  }