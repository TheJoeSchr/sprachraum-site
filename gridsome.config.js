// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  chainWebpack(config) {
    config.mode('development')
  },
  siteName: 'Sprachraum',
  templates: {},
  plugins: [
    {
      use: 'gridsome-plugin-i18n',
      options: {
        locales: [
          // locales list
          'it-it',
          'de-de',
        ],
        pathAliases: {
          // path segment alias for each locales
          'it-it': 'it',
          'de-de': 'de',
        },
        fallbackLocale: 'de-de', // fallback language
        defaultLocale: 'de-de', // default language
        enablePathRewrite: false, // rewrite path with locale prefix, default: true
        rewriteDefaultLanguage: false, // rewrite default locale, default: true
        messages: {},
      },
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Kurse',
        path: './src/content/**/*.yaml',
      },
    },
    {
      use: 'gridsome-plugin-tailwindcss',
      options: {
        tailwindConfig: './tailwind.config.js',
        presetEnvConfig: {},
        shouldImport: true,
        shouldTimeTravel: true,
      },
    },
    {
      use: 'gridsome-plugin-purgecss',
      // default options, the following will be included if you don't provide anything
      options: {
        content: [
          './src/**/*.vue',
          './src/**/*.js',
          './src/**/*.jsx',
          './src/**/*.pug',
          './src/**/*.md',
        ],
        defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
      },
    },
    {
      use: 'gridsome-plugin-pug',
      options: {
        pug: {
          /* Options for `pug-plain-loader` */
        },
        pugLoader: {
          /* Options for `pug-loader` */
        },
      },
    },
  ],
}
