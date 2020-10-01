<template lang="pug">
section(class="py-0")
  .flex.flex-wrap.max-w-4xl.mx-auto
    .w-full.py-1.mb-1.px-2(class='md:w-full md:mb-0')
      .py-1.border
        div.ml-auto.text-center(class='md:mx-32 w-1/5')
          p.mb-0.leading-relaxed.text-sm.py-1.px-3.mt-4.mr-2.text-black.font-secondary.bg-secondary-500.rounded-full.
            {{ value.cost }}

        h3.text-lg.pl-3.mb-3.font-heading.font-semibold.left-0(class="w-full") {{value.name}}
          h4.mb-3.text-sm.font-heading.font-semibold {{ value.date }}
          div.pr-3.text-sm.text-gray-500.w-full.text-right
            .ml-auto.mb-1(class="w-2/5") {{ value.days }}
        .ml-auto.mb-2.px-2
          a(:href='mailto(value)' class='hover:bg-indigo-200').inline-block.w-full.py-3.px-5.leading-none.text-center.text-primary-900.bg-primary-100.rounded.shadow Buchen
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
  methods: {
    mailto: (course) =>
      `mailto:${EMAIL}?${mailSubject(course)}&${mailBody(course)}`,
  },
}
</script>

<style></style>
