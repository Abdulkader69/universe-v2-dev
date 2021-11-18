module.exports = {
  mode: 'jit',
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#FFA600',
        siteBG: '#090D11',
        grayLight: '#A3A7A9',
        dark: '#10181E',
      },
      maxWidth: {
        'container': '1280px',
        'container-footer': '992px',
        'container-inner': '950px',
      },
      width: {
        'roadmap-cont-w': 'calc(100% - 10rem)',
        'w-calc-100-24': 'calc(100% - 24rem)',
        'w-calc-100-18': 'calc(100% - 18rem)',
        'w-calc-100-15': 'calc(100% - 15rem)',
      },
      padding: {'half-pd': 'calc(50% - 600px)'},
      boxShadow: {
        'gallery': '0px 0px 45px 15px rgb(151 82 238 / 60%)',
        'roadmap': '0px 15px 25px 10px rgba(151, 82, 238, 0.8)',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
