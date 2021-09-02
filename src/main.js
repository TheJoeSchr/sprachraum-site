// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
require('typeface-unica-one')
require('typeface-d-din')

import IT from '@/content/it/Interface.yaml'
import DE from '@/content/de/Interface.yaml'
export default function (Vue, { router, head, isClient, appOptions }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  // ...
  if (appOptions.i18n) {
    appOptions.i18n.setLocaleMessage('it-it', IT)
    appOptions.i18n.setLocaleMessage('de-de', DE)
  }

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
  head.meta.push({
    name: 'google-site-verification',
    content: 'jD3IP-RG3TCLjbunA_9wTwWERy2SRHXOO66Q8yj3s4I',
  })
}
