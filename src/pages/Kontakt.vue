<template lang="pug">
Layout
  //-- Illustrations and Logos from: https://undraw.co/illustrations
  //-- Icons from: https://play.tailwindcss.com/ACDXw37h55
  section.py-12.px-4
    h2.text-3xl.text-center.mb-8.font-heading Kontaktiere uns!
    .flex.flex-wrap.items-center.-mx-6
      .w-full.px-6.mb-8(class='lg:w-1/2 lg:px-24 lg:mb-0')
        g-image(src='~/assets/placeholders/pictures/new_ideas.svg' alt='' width="600" height="900")
      .w-full.px-6(class='lg:w-1/2')
        h3.text-2xl.mb-2.font-heading Wenn ihr Fragen habt, sind wir für euch da:
        br
        ul
          li.mb-2
            svg(class="inline-block w-8 h-8 pr-2" xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='#7AAA32')
              path(stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z')
            a(href='mailto:post@workitaut.at' class='hover:bg-primary-600 inline-block.py-4.px-8.mr-6.leading-none.text-black.bg-primary-500.rounded.shadow') EMAIL post@workitaut.at
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
          li.mb-2
            svg(class="inline-block w-8 h-8 pr-2" xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='#7AAA32')
              path(stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z')
            a(href='https://www.facebook.com/Sprachraum-work-it-aut-264573350889831' class='hover:bg-primary-600 inline-block.py-4.px-8.mr-6.leading-none.text-black.bg-primary-500.rounded.shadow').
              FACEBOOK: Sprachraum | WORK-IT-AUT
          li.mb-2
            svg(class="inline-block w-8 h-8 pr-2" xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='#7AAA32')
              path(stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z')
            span
              | ZOOM MEETING
              br
              .pl-8 Wenn ihr persönlich mit uns sprechen möchtet, schickt eine kurze Mail mit eurem Terminwunsch:
                br
                i
                  | Mo - Fr  von 08:30 bis 09:30
                  br
                  | Mo & Di von 12:00 - 13:00 oder von 17:30 bis 18:30 
</template>
<style scoped>
h3 {
  @apply text-xl;
}
h4 {
  @apply text-lg;
}
</style>
