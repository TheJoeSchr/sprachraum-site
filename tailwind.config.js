const plugin = require('tailwindcss/plugin')
module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      colors: {
        'brand-green': '#70A81D',
        'brand-yellow': '#FFDD00',
      },
    },
    container: {
      center: true,
    },
  },
  variants: {},
  plugins: [
    plugin(function ({
      addUtilities,
      addComponents,
      addBase,
      addVariant,
      e,
      prefix,
      theme,
      variants,
      config,
      postcss,
    }) {
      // Add your custom styles here
    }),
  ],
}
