const path = require(`path`);

module.exports = {
  siteName: `Fressmaus zu Haus'`,
  plugins: [
    {
      use: 'gridsome-source-storyblok',
      options: {
        client: {
          accessToken: `Uy6KQR3Xtv5mi9jGi4vozwtt`,
        },
        params: {
          // resolve_links: 'story',
          // resolve_relations: 'post'
        },
      }
    },
    {
      use: 'gridsome-source-storyblok',
      options: {
        client: {
          accessToken: `Uy6KQR3Xtv5mi9jGi4vozwtt`,
        },
        /**
         The params field is an object that will pass to Storyblok JS SDK. With it, you can get a specific request to get the blog stories or anything you want.
         */
        params: {
          starts_with: 'blog/'
        },
        /**
         With the typeName you can specific what type you will use in GraphQL Data Layer for this request. In this case, the request that will get the blog stories will enter in GraphQL Layer as BlogEntry type
         */
        typeName: 'BlogEntry',
      }
    }

    /*

    { // landing_page example of manually loading
      use: path.resolve(`./src/plugins/source-storyblok`),
      options: {
        accessToken: `Uy6KQR3Xtv5mi9jGi4vozwtt`,
    }*/


  ],
};
