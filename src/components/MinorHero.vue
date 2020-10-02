<template lang="pug">
  section
    .flex.flex-wrap.items-center.max-w-5xl.mx-auto.my-6
      .px-8.w-full(:class="{'order-1':!isLeft}" class='md:w-1/2 md:h-3/5')
        .hidden.max-w-sm.mx-auto(class='md:block', fit='inside', width='250', height='250')
          g-link(:to='link' )
            slot
      .px-8(class='md:w-1/2 md:mb-0').align-top
        h3.text-2xl.mb-2.mt-8.font-heading(class="lg:text-4xl lg:mt-0") {{ title }}
        p.mb-4.text-gray-600.leading-relaxed.
          {{ content }}
        g-link.text-primary-700(:to='link', class='hover:underline') {{ linkText }}
</template>

<script>
export default {
  props: ['value'],
  data: function () {
    const {
      content = '',
      title = '',
      link = '',
      linkText = '',
      isLeft = 'false',
    } = this.value
    return { content, title, link, linkText, isLeft }
  },
}
</script>
