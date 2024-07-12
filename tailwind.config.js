/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{html,js}',
    './pages/**/*.{html,js}',
    './index.html'
  ],
  theme: {
    screens: {
      xsm: '480px',
      sm: '575px',
      md: '768px',
      lg: '1024px',
      xl: '1140px'
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        xsm:'480px',
        sm: '575px',
        md: '768px',
        lg: '1024px',
        xl: '1140px'
      },
    },
    extend: {
      fontFamily: {
      'aeonik': ["Aeonik", "sans-serif"],
      'inter': ["Inter", "sans-serif"],
      },
      colors:{
        'primary':'#292929',
        'secondary':'#BFBFBF',
        'dark_black':'#121212',
        'dark_orange':'#FF7500',
        'heading_color':'#BA764B',
        'light_gray' :'#717171',
        'gray_border':'#464646',
        'light_gray':'#999999',
        'light_gray2':'#A9A9A9',
      },
      padding:{
        '14px':'14px',
        '74px':'74px',
        '50px':'50px'
      },
      fontSize:{
        '50px':'50px',
        '45px':'45px'
      },
      lineHeight:{
        '58px': '58px',
        '22px':'22px'
      },
      letterSpacing: {
        '1%': '-0.01em' 
      },
      gap:{
        '70px':'70px'
      },
      width:{
        '50px':'50px'
      },
      height:{
        '50px':'50px'
      },
      margin:{
        '10px':'10px',
        '45px':'45px'
      }
    },
  },
  plugins: [],
}

