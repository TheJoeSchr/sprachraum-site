<template lang="pug">
  section.minorhero
    .flex.flex-wrap.items-center.max-w-5xl.mx-auto.my-6
      .px-8.w-full(:class="{'order-1':!isLeft}" class='md:w-1/2 md:h-3/5')
        div(class='mr-auto pr-auto sm:max-w-sm w-full', fit='outside', width='350', height='350')
          g-link(:to='link' )
            slot
      .px-8(class='md:w-1/2 md:mb-0').align-top
        h2.text-2xl.mb-2.mt-8.font-heading(class="lg:text-4xl lg:mt-0" v-html='toBr(title)')
        h3.text-xl.text-gray-800.leading-tight.font-heading(class='md:py-4 md:my-4 md:text-xl md:pb-0' v-html="toBr(subtitle)")
        p.mb-4.text-gray-600.leading-relaxed(v-html='toBr(content)')
        g-link.text-primary-700(:to='link', class='hover:underline' v-if="link") {{ linkText }}
</template>

<script>
import {toBr} from '~/helpers'
export default {
  name: 'MinorHero',
  props: ['value'],
  data: function () {
    const {
      content = '',
      title = '',
      subtitle = '',
      link = '',
      linkText = '',
      isLeft = 'false',
    } = this.value
    return {content, title, subtitle, link, linkText, isLeft}
  },
  methods: {
    toBr,
  },
}
</script>
<style scoped>
.minorhero {
  @apply mb-8 shadow bg-white border rounded overflow-hidden;
}

@screen md {
  .minorhero {
    @apply mb-16;
  }
}
@screen lg {
  .minorhero {
    @apply py-0 px-8;
  }
}
</style>
