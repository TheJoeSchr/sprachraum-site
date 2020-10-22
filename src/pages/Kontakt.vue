<template lang="pug">
Layout
  section.py-12.px-4
    h2.text-3xl.text-center.mb-8.font-heading Kontaktiere uns!
    .flex.flex-wrap.items-center.-mx-6
      .w-full.px-6.mb-8(class='lg:w-1/2 lg:px-24 lg:mb-0')
        g-image(src='~/assets/placeholders/pictures/new_ideas.svg' alt='' width="600" height="900")
      .w-full.px-6(class='lg:w-1/2')
        h3.text-2xl.mb-2.font-heading Für weitere Auskünfte stehen wir gerne zur Verfügung
        br
        ul
          li.mb-2
            svg(class="inline-block w-8 h-8 pr-2" xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='#7AAA32')
              path(stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z')
            a(href='mailto:eli@workitaut.eu' class='hover:bg-primary-600 inline-block.py-4.px-8.mr-6.leading-none.text-black.bg-primary-500.rounded.shadow') EMAIL eli@workitaut.eu
          li.mb-2
            svg(class="inline-block w-8 h-8 pr-2" xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='#7AAA32')
              path(stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z')
            span.
              TEL +43 676 716 74 12 / AUT
          li.mb-2
            svg(class="inline-block w-8 h-8 pr-2" xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='#7AAA32')
              path(stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z')
            span.
              TEL +39 331 222 66 15 / IT

</template>
<style scoped>
h3 {
  @apply text-xl;
}
h4 {
  @apply text-lg;
}
</style>
