<template lang="pug">
Layout
  g-link(to="/it/kursprogramm/" class="btn-translate") Italiano
  .divide-y.divide-gray-400
    .container.py-2(v-for='(section,index) in timetable' :key='section.title').pt-8
      section(:class="{'bg-yellow-100':(index%2==1), 'shadow-lg':(index%2==1) ,'shadow-inner':(index%2==0) }" class="mb-0").my-2.pt-1
        h2.text-center.text-xl.pt-2.font-heading.font-bold {{ section.title }}
        h3.text-center.text-lg.pb-1.font-heading {{ section.subtitle }} von {{ section.times}}
        ul
          li(v-for='course in section.courses' :key="course.name")
            KursprogrammKarte(:value="{...course,times:section.times}")
        div.text-sm.mx-2.py-4
          h3.text-lg Wichtige Information
          h3 Legende
          ul
            li * Innerhalb dieser Wochentage sind individuelle Coachingtermine möglich.
            li ** Nicht inkludiert sind die Lehrbücher. Die Kosten dafür betragen zwischen 17,00 und 24,00 Euro. Die Kursbücher werden nach der Anmeldung bekannt gegeben, damit sie rechtzeitig vor Kursbeginn besorgt werden können.
            li *** Diese Tage werden mit der Gruppe individuell vereinbart.
</template>

<script>
import KursprogrammKarte from '~/components/KursprogrammKarte.vue'
import timetable from '@/content/Kurseprogramm.yaml'

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
