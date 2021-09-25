<template lang="pug">
section(v-if='dreamjob')
  .flex.flex-wrap.mx-2.mb-6
    .w-full.h-80.bg-white.rounded-lg.overflow-hidden(class='group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1')
      h3.ml-1.text-sm.text-gray-500.bg-white {{ dreamjob.subtitle }}
      p.ml-1.text-base.font-semibold.text-gray-900 {{ dreamjob.title }}
      div.img(width='300', height='300')
        g-image(:src="require(`!!assets-loader!@jobs/${dreamjob.id}.jpg`)" height=300 width="300" center="center" fit="cover")
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
  width: 300px;
  height: 300px;
}
</style>
