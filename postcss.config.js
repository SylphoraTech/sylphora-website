module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {
      flexbox: 'no-2009',
      grid: 'autoplace'
    },
    'postcss-preset-env': {
      browsers: 'last 2 versions',
      autoprefixer: { grid: true }
    }
  },
}