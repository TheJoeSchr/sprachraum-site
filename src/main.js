// This is the main.js file. Import global CSS and scripts here.
import '~/assets/blog.css'
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import DefaultLayout from '~/layouts/Default.vue'
import Page from '~/components/Page.vue'
import Post from '~/components/Post.vue'
import Teaser from '~/components/Teaser.vue'
import Feature from '~/components/Feature.vue'
import Grid from '~/components/Grid.vue'
import Richtext from "~/components/Richtext.vue"
import MediaBlock from "~/components/MediaBlock.vue"

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  // register components
  Vue.component('Page', Page)
  Vue.component('Post', Post)
  // Vue.component('landing_page', Page) //TODO: Create Landing page plugin
  Vue.component('Teaser', Teaser)
  Vue.component('Feature', Feature)
  Vue.component('Grid', Grid)
  Vue.component('Richtext', Richtext)
  Vue.component('MediaBlock', MediaBlock)
}
