const path = require(`path`);

module.exports = {
  siteName: `Building a Static Site with Storyblok and Gridsome`,
  plugins: [
    {
      use: 'gridsome-source-storyblok',
      options: {
        client: {
        accessToken: `Uy6KQR3Xtv5mi9jGi4vozwtt`,
        }
      }
    }
  ],
};
