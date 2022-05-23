<template lang="pug">
section.dreamjobinfo(v-if='dreamjob')
  .flex.flex-wrap.mx-2.mb-6
    div.img.mx-auto(class='w-1/3')
      g-image.img.block(:src="require(`!!assets-loader!@jobs/${dreamjob.id}.jpg`)" class='md:mx-1 md:w-2/3 md:mb-0 md:pr-8' height="300" width="300" fit="inside")
    .px-4.mx-4(class='md:w-2/3 ')
      h2.text-lg.font-heading.font-semibold.text-center.mx-auto(class='md:text-3xl md:pt-0 md:text-left').
        {{dreamjob.title}}
      h3.text-base.font-heading.font-semibold.text-center.mx-auto.text-gray-600(class='md:text-xl md:pt-0 md:text-left').
        {{dreamjob.subtitle}}
      blockquote.text-sm
        .pt-8(class='md:pl-0' v-if='dreamjob.description')
          .max-w-2xl.py-2.mx-auto
            p(v-html='toBr(dreamjob.description)')
      a.more.w-full.text-center.my-2.text-lg.font-bold.underline(@click='toggleInfo')
        button.text-gray-700.background-transparent.font-bold.uppercase.py-1.text-xs.border.border-solid.rounded.px-4.py-2(class='focus:outline-none hover:bg-brand-green hover:text-white' type='button')
          svg(v-if='!showInfo' xmlns='http://www.w3.org/2000/svg' fill='none' viewbox='0 0 24 24' stroke='currentColor' class='inline-block w-8 h-6 pr-2')
            path(stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 13l-7 7-7-7m14-8l-7 7-7-7')
          svg(v-if='showInfo' xmlns='http://www.w3.org/2000/svg' fill='none' viewbox='0 0 24 24' stroke='currentColor' class='inline-block w-8 h-6 pr-2')
            path(stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M5 11l7-7 7 7M5 19l7-7 7 7')
          span scopri di piu
  .more-info(class='md:mx-4')
    div(class='flex flex-col')
      .column-section.py-4(v-if='showInfo' v-for='column in dreamjob.columns' :key='column.title' class='flex-none md:flex-1')
        h3.text-normal {{column.title}}
        p.text-sm.text-gray-700
          ul
            li(v-for='item in column.content' :key='item') {{item}}
</template>

<script>
import {toBr} from '~/helpers'

export default {
  name: 'DreamJobCard',
  props: ['value'],
  data() {
    const showInfo = false
    return {showInfo}
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

<style scoped>
.img {
  background-position: center center; /* optional, center the image */
  background-repeat: no-repeat; /* optional, center the image */
  width: 300px;
  /*
  height: 300px;
  */
}
</style>
