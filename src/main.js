// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
require('typeface-unica-one')
require('typeface-d-din')

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  head.meta.push({
    charset: 'utf-8',
  })
  head.meta.push({
    name: 'viewport',
    content: 'width=device-width, initial-scale=1, shrink-to-fit=no',
  })
  head.meta.push({
    name: 'description',
    content: '',
  })
  head.meta.push({
    name: 'author',
    content: '',
  })
}
