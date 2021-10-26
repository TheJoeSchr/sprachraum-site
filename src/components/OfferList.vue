<template lang="pug">
div
  .divide-y.divide-gray-400
    .container.py-2(v-for='(offer,index) in offers' :key='offer.title').pt-8
      section(:class="{'bg-yellow-100':(index%2==1), 'shadow-lg':(index%2==1) ,'shadow-inner':(index%2==0) }" class="mb-0").my-2.pt-1
        h2.text-center.text-xl.pt-2.font-heading.font-bold(v-html="toBr(offer.title)")
        h3.text-center.text-lg.pb-1.font-heading(v-html="toBr(offer.subtitle)")
        h3.text-center.text-lg.pb-1.font-heading(v-html="toBr(offer.times)")
        div(class='sm:py-4 lg:py-2 max-w-none')
          ul.mt-2(class='lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6')
            li(v-for='course in offer.courses' :key="course.name+course.tagline")
              OfferCard(:value="{...course, hideBooking, times:offer.times, messages}")
        div.text-sm.mx-2.py-4
          h3.text-lg {{ info.title }}
          h3(v-html="toBr(info.content)")
          ul
            li(v-for='(item,index) in info.list' :key='index') {{ item }}
</template>

<script>
import OfferCard from '~/components/OfferCard.vue'
import { toBr } from '~/helpers'

export default {
  components: {
    OfferCard,
  },
  props: ['value'],
  data() {
    const { list, messages, translateLink } = this.value
    const hideBooking = false
    return { ...list, messages, translateLink, hideBooking, ...this.value }
  },
  methods: { toBr },
}
</script>
