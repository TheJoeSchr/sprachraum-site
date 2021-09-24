<template lang="pug">
section(v-if='dreamjob')
  .flex.flex-wrap.mx-2.mb-6
    .w-full.h-80.bg-white.rounded-lg.overflow-hidden(class='group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1')
      h3.ml-1.text-sm.text-gray-500.bg-white {{ dreamjob.subtitle }}
      p.ml-1.text-base.font-semibold.text-gray-900 {{ dreamjob.title }}
      g-image.img(:src="require(`!!assets-loader!@jobs/${dreamjob.id}.jpg`)" height=300 width="300" center="bottom" fit="contain")
      <!-- div.img.w-full.h-full.object-center.object-cover(:class="dreamjob.id" ) -->
    <!-- .section-hero-img.mx-auto(class='md:mx-0 md:w-1/3 md:mb-0 md:pr-8' -->
    <!--                   :class='dreamjob.id' -->
    <!--                  ) -->
    <!-- .w-full.px-4.mx-4(class='md:w-1/2 ') -->
    <!--   h2.text-xl.font-heading.font-semibold.text-center.mx-auto(class='md:text-4xl md:pt-0 md:text-left'). -->
    <!--     {{ dreamjob.title }} -->
    <!--   h3.text-lg.font-heading.font-semibold.text-center.mx-auto.text-gray-600(class='md:text-4xl md:pt-0 md:text-left'). -->
    <!--     {{ dreamjob.subtitle }} -->
    <!--   blockquote.text-sm -->
    <!--     .py-8(class='md:pl-0' v-if='dreamjob.description') -->
    <!--       .max-w-2xl.py-4.mx-auto -->
    <!--         p(v-html='toBr(dreamjob.description)') -->
  //-.flex.flex-wrap.w-full(class='md:mx-4')
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
del {
  font-weight: bold;
}
.img {
  background-position: center center; /* optional, center the image */
  background-repeat: no-repeat; /* optional, center the image */
}
</style>
