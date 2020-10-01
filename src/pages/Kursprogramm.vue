<template lang="pug">
Layout
  .divide-y.divide-gray-400
    .container.py-2(v-for='(section,index) in timetable' :key='section.title').pt-8
      section(:class="{'bg-yellow-100':(index%2==1), 'shadow-lg':(index%2==1) ,'shadow-inner':(index%2==0) }" class="mb-0").my-2.pt-1
        h2.text-center.text-xl.pt-2.font-heading.font-bold {{ section.title }}
        h3.text-center.text-lg.pb-1.font-heading {{ section.subtitle }} von {{ section.times}}
        ul
          li(v-for='course in section.courses' :key="course.name")
            KursprogrammKarte(:value="course")
</template>

<script>
import KursprogrammKarte from '~/components/KursprogrammKarte.vue'
import timetable from '@/content/Kurse.yaml'

export default {
  components: {
    KursprogrammKarte,
  },
  metaInfo: {
    title: 'Kursprogramm',
  },
  data() {
    return {
      timetable,
    }
  },
}
</script>
