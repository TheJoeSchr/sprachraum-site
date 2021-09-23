<template lang="pug">
section.dreamjobinfo(v-if='dreamjob')
  .flex.flex-wrap.mx-2.mb-6
    //!--
      .img.mx-auto(class='md:mx-0 md:w-1/3 md:mb-0 md:pr-8'
                      :class='dreamjob.id'
                     )
    .w-full.px-4.mx-4(class='md:w-1/2 ')
      h2.text-xl.font-heading.font-semibold.text-center.mx-auto(class='md:text-4xl md:pt-0 md:text-left').
        {{ dreamjob.title }}
      h3.text-lg.font-heading.font-semibold.text-center.mx-auto.text-gray-600(class='md:text-4xl md:pt-0 md:text-left').
        {{ dreamjob.subtitle }}
      blockquote.text-sm
        .py-8(class='md:pl-0' v-if='dreamjob.description')
          .max-w-2xl.py-4.mx-auto
            p(v-html='toBr(dreamjob.description)')
  .flex.flex-wrap.w-full(class='md:mx-4')
    .column-section(v-for='column in dreamjob.columns' :key='column.title' class='md:-mx-4')
      h3.text-xl {{ column.title }}
      p.tx-sm.text-gray-700
        ul
          li(v-for='item in column.content' :key='item') {{ item }}
</template>

<script>
import { toBr } from '~/helpers'

export default {
  name: 'DreamJobCard',
  props: ['value'],
  data() {
    const dreamjob = this.value
    return { dreamjob }
  },
  methods: {
    toBr,
  },
}
</script>

<style>
  del { font-weight: bold; }
  .chef_de_partie {
    background-image: url('~@/assets/jobs/chef_de_partie.jpg?width=300&height=300');
  }
  .chef_de_rang {
    background-image: url('~@/assets/jobs/chef_de_rang.jpg?width=300&height=300');
  }
  .img {
    background-position: center center; /* optional, center the image */
  }
</style>
