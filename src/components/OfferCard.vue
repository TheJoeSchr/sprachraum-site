<template lang="pug">
section(class="pt-2")
  .flex.flex-wrap.max-w-4xl.mx-auto
    .w-full.py-1.mb-1.px-2(class='md:w-full md:mb-2')
      .py-1.border
        g-image.ml-auto(src='~/assets/placeholders/icons/badge.svg' class="-mt-6")
        Modal
          template(#inline)
              h3.text-xl.pl-3.mb-1.font-heading.font-bold.font-sans.left-0.uppercase(class="w-full" v-html='toBr(name)') 
              div.pr-3.mr-3.text-lg.text-gray-900.text-center.underline(v-html="toBr(description.slice(0,80))+'<br>continuare...'")
              div.pr-3.mr-3.text-lg.text-gray-900.text-right
                .ml-auto.mb-1(class="w-2/5" v-html="toBr(cost)")
              div.ml-auto.text-right(class='w-2/5 ')
                p.leading-relaxed.text-sm.px-3.mr-2.text-gray-800.font-secondary(v-html='toBr(days)')
                p.mb-2.leading-relaxed.text-sm.px-3.mr-2.text-gray-600.font-secondary(v-html='toBr(times)')

          template(v-slot:default)
            h4.pl-3.mb-3.text-sm.font-heading.text-gray-800.font-medium.font-mono(v-html="toBr(description)")
        .mx-auto.mb-2(class='w-2/5' v-if="hideBooking != true")
          a(:href='mailtoFn({ ...value, legalText: value.messages.legalText })' class='hover:bg-secondary-200').inline-block.w-full.py-3.px-5.leading-none.text-center.font-bold.text-primary-900.bg-primary-200.rounded.shadow
            | {{ messages.btnBooking }}
          a(:href='`mailto:${messages.btnBookingEmail}`' v-if='messages && messages.btnBookingAlternative') {{ `${messages.btnBookingAlternative} ${messages.btnBookingEmail}`}}
</template>

<script>
import { toEmailLinebreak } from '~/helpers'
import Modal from '~/components/Modal.vue'
import { toBr } from '~/helpers'

const TEMPLATE =
  '\nVORNAME / NOME\n  \nNACHNAME / COGNOME\n  \nGEBURTSDATUM / DATA DI NASCITA\n  \nSTRASSE / VIA\n   \nPLZ / CODICE POSTALE\n \nORT / CITÀ\n \nLAND / PAESE\n  \nTELEFON / TELEFONO\n \nE-MAIL\n \n\nNACHRICHT / MESSAGO\n\n\n\n\n\n\n\n'

const mailBody = ({ name, description, days, legalText = '' }) => {
  const body = `${TEMPLATE} \n\n\n\n${legalText}`
  return encodeURIComponent(
    `KURSTITEL /  CORSO \n ${name}\n ${description}\n ${days}\n${body}`
  )
}

function mailSubject({ name, description, days }) {
  return `Anmeldung für ${name}:${description}, ${days}`
}
export default {
  name: 'OfferDetail',
  components: {
    Modal,
  },
  props: ['value'],
  data() {
    const {
      name,
      description,
      cost,
      days,
      legalText,
      messages,
      times,
      hideBooking,
    } = this.value
    return {
      name,
      description,
      cost,
      days,
      legalText,
      messages,
      times,
      hideBooking,
    }
  },
  methods: {
    mailtoFn: function (course) {
      const EMAIL = this.messages.btnBookingEmail
      return `mailto:${EMAIL}?subject=${mailSubject(course)}&body=${mailBody(
        course
      )}`
    },
    toBr,
  },
}
</script>

<style>
del {
  font-weight: bold;
}
</style>
