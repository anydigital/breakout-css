module.exports = {
  plugins: {
    'postcss-preset-env': {
      stage: 2,
      features: {
        'nesting-rules': true,
        'is-pseudo-class': true,
      },
      preserve: false,
    }
  }
}
