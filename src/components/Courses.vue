<template lang="pug">
div
  .flex
    g-link(:to="translateLink" ).btn-translate {{messages.btnTranslate}}
  .divide-y.divide-gray-400
    .container.py-2(v-for='(timeslot,index) in timeslots' :key='timeslot.title').pt-8
      section(:class="{'bg-yellow-100':(index%2==1), 'shadow-lg':(index%2==1) ,'shadow-inner':(index%2==0) }" class="mb-0").my-2.pt-1
        h2.text-center.text-xl.pt-2.font-heading.font-bold {{ timeslot.title }}
        h3.text-center.text-lg.pb-1.font-heading {{ timeslot.subtitle }} {{ timeslot.times}}
        ul
          li(v-for='course in timeslot.courses' :key="course.name")
            KursprogrammKarte(:value="{...course,times:timeslot.times, messages}")
        div.text-sm.mx-2.py-4
          h3.text-lg {{ info.title }}
          h3(v-html="toBr(info.content)")
          ul
            li(v-for='(item,index) in info.list' :key='index') {{ item }}
</template>

<script>
import KursprogrammKarte from '~/components/KursprogrammKarte.vue'
import { toBr } from '~/helpers'

export default {
  components: {
    KursprogrammKarte,
  },
  props: ['value'],
  data() {
    const { timetable, messages, translateLink } = this.value
    return { ...timetable, messages, translateLink }
  },
  methods: { toBr },
}
</script>
