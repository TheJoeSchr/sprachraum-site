<template lang="pug">
Layout
  section.py-12.px-4
    h2.text-3xl.text-center.mb-8.font-heading Kontaktiere uns!
    .flex.flex-wrap.items-center.-mx-6
      .w-full.px-6.mb-8(class='lg:w-1/2 lg:px-24 lg:mb-0')
        img(src='placeholders/pictures/new_ideas.svg' alt='')
      .w-full.px-6(class='lg:w-1/2')
        h3.text-2xl.mb-2.font-heading Für weitere Auskünfte stehen wir gerne zur Verfügung
        ul
          li.mb-2
            span 
              a(href='mailto:eli@workitaut.eu') EMAIL eli@workitaut.eu
          li.mb-2
            span.
              TEL +43 676 716 74 12 / AUT
          li.mb-2
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
