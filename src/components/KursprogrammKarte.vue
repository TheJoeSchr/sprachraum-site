<template lang="pug">
section(class="pt-2")
  .flex.flex-wrap.max-w-4xl.mx-auto
    .w-full.py-1.mb-1.px-2(class='md:w-full md:mb-2')
      .py-1.border
        g-image.ml-auto(src='~/assets/placeholders/icons/badge.svg' class="-mt-6")
        h3.text-lg.pl-3.mb-1.font-heading.font-bold.left-0(class="w-full") {{name}}
        h4.pl-3.mb-3.text-sm.font-heading.font-semibold  {{ date }}
        div.pr-3.mr-3.text-lg.text-gray-900.text-right
          .ml-auto.mb-1(class="w-2/5") {{ cost }}**
        div.ml-auto.text-right(class='w-2/5 ')
          p.leading-relaxed.text-sm.px-3.mr-2.text-gray-800.font-secondary
            | {{ days }}
          p.mb-2.leading-relaxed.text-sm.px-3.mr-2.text-gray-600.font-secondary
            | {{ times }}
        .mx-auto.mb-2(class='w-2/5')
          a(:href='mailto(value)' class='hover:bg-secondary-200').inline-block.w-full.py-3.px-5.leading-none.text-center.font-bold.text-primary-900.bg-primary-200.rounded.shadow.
            {{ messages.btnBooking }}
</template>

<script>
const EMAIL = 'eli@workitaut.eu'
const TEMPLATE =
  '%0AVORNAME / NOME%0A  %0ANACHNAME / COGNOME%0A  %0AGEBURTSDATUM / DATA DI NASCITA%0A  %0ASTRASSE / VIA%0A   %0APLZ / CODICE POSTALE%0A %0AORT / CITÀ%0A %0ALAND / PAESE%0A  %0ATELEFON / TELEFONO%0A %0AE-MAIL%0A %0A%0ANACHRICHT / MESSAGO%0A%0A%0A%0A%0A%0A%0A%0A [X]  Ich bestätige, dass ich die Allgemeinen Geschäftsbedingungen WorkITAUT (AGB) zur Kenntnis genommen habe.'

function mailBody({ name, date, days }) {
  return (
    `body=KURSTITEL /  CORSO %0A ${name}%0A ${date}%0A ${days}%0A` + TEMPLATE
  )
}
function mailSubject({ name, date, days }) {
  return `subject=Anmeldung für ${name}:${date}, ${days}`
}
export default {
  metaInfo: {
    title: 'KursprogrammKarte',
  },
  props: ['value'],
  data() {
    const { name, date, cost, days, times, messages } = this.value
    return { name, date, cost, days, times, messages }
  },
  methods: {
    mailto: (course) =>
      `mailto:${EMAIL}?${mailSubject(course)}&${mailBody(course)}`,
  },
}
</script>

<style></style>
