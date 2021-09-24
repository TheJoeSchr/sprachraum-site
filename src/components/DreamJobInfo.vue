<template lang="pug">
section.dreamjobinfo(v-if='dreamjob')
  .flex.flex-wrap.mx-2.mb-6
    div.img.mx-auto(class='w-1/3')
      g-image.img(:src="require(`!!assets-loader!@jobs/${dreamjob.id}.jpg`)" class='md:mx-0 md:w-1/3 md:mb-0 md:pr-8' height=300 width="300" center="center" fit="inside")
    .px-4.mx-4(class='md:w-2/3 ')
      h2.text-xl.font-heading.font-semibold.text-center.mx-auto(class='md:text-4xl md:pt-0 md:text-left').
        {{ dreamjob.title }}
      h3.text-lg.font-heading.font-semibold.text-center.mx-auto.text-gray-600(class='md:text-4xl md:pt-0 md:text-left').
        {{ dreamjob.subtitle }}
      blockquote.text-sm
        .py-8(class='md:pl-0' v-if='dreamjob.description')
          .max-w-2xl.py-4.mx-auto
            p(v-html='toBr(dreamjob.description)')
  .more-info(class='md:mx-4')
    a.more.w-full.my-4(@click='toggleInfo')
      | {{ `More Infos  ${showInfo?'&times;':'&#8597;'}` }}
    div(class='flex flex-col')
      .column-section.py-4(v-if='showInfo' v-for='column in dreamjob.columns' :key='column.title' class='flex-none md:flex-1')
          h3.text-normal {{ column.title }}
          p.text-sm.text-gray-700
            ul
              li(v-for='item in column.content' :key='item') {{ item }}
</template>

<script>
import { toBr } from '~/helpers'

export default {
  name: 'DreamJobCard',
  props: ['value'],
  data() {
    const showInfo = false
    return { showInfo }
  },
  computed: {
    dreamjob: {
      get: function () {
        return this.value
      },
    },
  },
  methods: {
    toBr,
    toggleInfo() {
      this.showInfo = !this.showInfo
    },
  },
}
</script>

<style>
.img {
  background-position: center center; /* optional, center the image */
  background-repeat: no-repeat; /* optional, center the image */
  width: 300px;
  height: 300px;
}
</style>
