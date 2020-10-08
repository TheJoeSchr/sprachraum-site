<template lang="pug">
section(class="pt-2")
  .flex.flex-wrap.max-w-4xl.mx-auto
    .w-full.py-1.mb-1.px-2(class='md:w-full md:mb-2')
      .py-1.border
        g-image.ml-auto(src='~/assets/placeholders/icons/badge.svg' class="-mt-6")
        h3.text-lg.pl-3.mb-1.font-heading.font-bold.left-0(class="w-full") {{name}}
        h4.pl-3.mb-3.text-sm.font-heading.font-semibold  {{ date }}
        div.pr-3.mr-3.text-lg.text-gray-900.text-right
          .ml-auto.mb-1(class="w-2/5") {{ cost }}
        div.ml-auto.text-right(class='w-2/5 ')
          p.leading-relaxed.text-sm.px-3.mr-2.text-gray-800.font-secondary
            | {{ days }}
          p.mb-2.leading-relaxed.text-sm.px-3.mr-2.text-gray-600.font-secondary
            | {{ times }}
        .mx-auto.mb-2(class='w-2/5')
          a(:href='mailto({ ...value, legalText: value.messages.legalText })' class='hover:bg-secondary-200').inline-block.w-full.py-3.px-5.leading-none.text-center.font-bold.text-primary-900.bg-primary-200.rounded.shadow.
            {{ messages.btnBooking }}
</template>

<script>
import { toEmailLinebreak } from '~/helpers'

const EMAIL = 'eli@workitaut.eu'
const TEMPLATE =
  '\nVORNAME / NOME\n  \nNACHNAME / COGNOME\n  \nGEBURTSDATUM / DATA DI NASCITA\n  \nSTRASSE / VIA\n   \nPLZ / CODICE POSTALE\n \nORT / CITÀ\n \nLAND / PAESE\n  \nTELEFON / TELEFONO\n \nE-MAIL\n \n\nNACHRICHT / MESSAGO\n\n\n\n\n\n\n\n [X]  Ich bestätige, dass ich die Allgemeinen Geschäftsbedingungen WorkITAUT (AGB) zur Kenntnis genommen habe.'

const mailBody = ({ name, date, days, legalText = '' }) => {
  const body = `${TEMPLATE} \n\n\n\n${legalText}`
  return encodeURIComponent(
    `KURSTITEL /  CORSO \n ${name}\n ${date}\n ${days}\n${body}`
  )
}

function mailSubject({ name, date, days }) {
  return `Anmeldung für ${name}:${date}, ${days}`
}
export default {
  name: 'KursprogrammKarte',
  props: ['value'],
  data() {
    const { name, date, cost, days, legalText, messages, times } = this.value
    return { name, date, cost, days, legalText, messages, times }
  },
  methods: {
    mailto: (course) =>
      `mailto:${EMAIL}?subject=${mailSubject(course)}&body=${mailBody(course)}`,
  },
}
</script>

<style></style>
