<template lang="pug">
  section
    g-link(:to='link' ).flex.flex-wrap.items-center.max-w-5xl.mx-auto.mb-8
      .pt-3.px-8.w-full(:class="{'order-1':isLeft}" class='md:w-1/2 md:h-3/5')
        .hidden.max-w-sm.mx-auto(class='md:block', fit='inside', width='250', height='250')
          slot
      .pt-3.px-8(class='md:w-1/2 md:mb-0')
        h3.text-2xl.mb-2.mt-8.font-heading {{ title }}
        p.mb-4.text-gray-600.leading-relaxed.
          {{ content }}
        g-link.text-primary-700(:to='link', class='hover:underline') {{ linkText }}
</template>

<script>
export default {
  props: ['value'],
  data: function () {
    const { content, title, link, linkText, isLeft } = this.value
    return { content, title, link, linkText, isLeft }
  },
}
</script>
