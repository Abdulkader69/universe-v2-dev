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
        'container': '1302px',
        'container-footer': '992px',
        'container-inner': '950px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
