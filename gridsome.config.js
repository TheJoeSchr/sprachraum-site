const path = require(`path`);

module.exports = {
  siteName: `Fressmaus zu Haus'`,
  plugins: [
    {
      use: 'gridsome-source-storyblok',
      options: {
        client: {
          accessToken: `Uy6KQR3Xtv5mi9jGi4vozwtt`,
        }
      }
    },
    {
      use: path.resolve(`./src/plugins/source-storyblok`),
      options: {
        accessToken: `Uy6KQR3Xtv5mi9jGi4vozwtt`,
      },
    },
  ],
};
