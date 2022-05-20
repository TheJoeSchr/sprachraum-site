<template lang="pug">
section(class="pt-2")
  .flex.flex-wrap.max-w-4xl.mx-auto
    .w-full.py-1.mb-1.px-2(class='md:w-full md:mb-2')
      .py-1.border
        g-image.ml-auto(src='~/assets/placeholders/icons/badge.svg' class="-mt-6")
        Modal
          template(#inline)
            h3.text-xl.pl-3.mb-1.font-heading.font-bold.font-sans.text-center.uppercase(class="w-full" v-html='toBr(name)')
            div.px-3.my-6.text-lg.text-gray-900.text-center
              p.font-bold(v-html='toBr(tagline)')
              p.leading-relaxed.text-sm.px-3.text-gray-800.font-secondary(v-html='toBr(days)')
              p.mb-2.leading-relaxed.text-sm.px-3.text-gray-600.font-secondary(v-html='toBr(times)')
                .text-sm.text-gray-900.underline {{ messages.bookingContinue }}
            div.my-5.text-lg.text-gray-900.text-center
              .ml-auto(class="w-full" v-html="toBr(cost)")

          template(#default)
            h3.text-xl.pl-3.mb-1.font-heading.font-bold.font-sans.left-0.uppercase(class="w-full" v-html='toBr(name)')
            div.px-3.my-6.text-lg.text-gray-900.text-center
              p.font-bold(v-html='toBr(tagline)')
            h4.pl-3.mb-3.text-lg.font-heading.text-gray-800.font-medium.font-mono(v-html="toBr(description)")
            div.my-5.text-lg.text-gray-900.text-right
              .ml-auto(class="w-full" v-html="toBr(cost)")
              p.leading-relaxed.text-sm.px-3.text-gray-800.font-secondary(v-html='toBr(days)')
              p.mb-2.leading-relaxed.text-sm.px-3.text-gray-600.font-secondary(v-html='toBr(times)')
        .mx-auto.mb-2(class='w-2/5' v-if="hideBooking != true")
          Modal
            template(#inline)
              button(class='hover:bg-secondary-200').inline-block.w-full.py-3.px-5.leading-none.text-center.font-bold.text-primary-900.bg-primary-200.rounded.shadow
                | {{messages.btnBooking}}
            template(#default)
              section.bg-white.py-20
                .container.px-4.mx-auto
                  .flex.flex-wrap.items-center.-mx-4
                    .w-full.px-4(class='')
                      span.mx-auto.inline-block.text-xs.text-gray-700.uppercase {{form.tagline}}
                      h2.mx-auto.mt-2.mb-6.text-4xl.text-black.font-bold.font-heading(class='lg:text-5xl') {{form.name}}
                    .w-full.px-4(class='lg:w-1/2')
                      .mx-auto.py-6.px-8.bg-secondary-300.text-center.rounded-lg(class='lg:mr-auto lg:ml-0 lg:max-w-sm')
                        h3.mb-2.text-2xl.font-bold.font-heading {{ messages.btnBooking }}
                        p.mb-4.text-gray-500(v-html="toBr(form.cost)")
                        form-wrapper(v-model='form')
                          input.mb-4.w-full.pl-3.py-3.bg-white.rounded(v-model='form.email' name='email' placeholder='name@example.com' type='email' ref='inputEmail')
                    .w-full.px-4.mb-12(class='lg:w-1/2 lg:mb-0')
                      p.text-lg.text-gray-800.leading-loose(v-html="toBr(form.description)")

          a(:href='`mailto:${messages.btnBookingEmail}`' v-if='messages && messages.btnBookingAlternative') {{`${messages.btnBookingAlternative} ${messages.btnBookingEmail}`}}
</template>

<script>
import {toEmailLinebreak} from '~/helpers'
import FormWrapper from '~/components/FormWrapper.vue'
import Modal from '~/components/Modal.vue'
import {toBr} from '~/helpers'

export default {
  name: 'OfferDetail',
  components: {
    Modal,
    FormWrapper,
  },
  props: ['value'],
  data() {
    const {hideBooking, ...form} = this.value

    const {
      name,
      tagline,
      description,
      cost,
      days,
      legalText,
      messages,
      times,
    } = form
    return {
      cost,
      days,
      description,
      form,
      hideBooking,
      legalText,
      messages,
      name,
      tagline,
      times,
    }
  },
  methods: {
    toBr,
  },
}
</script>

<style>
del {
  font-weight: bold;
}
</style>
