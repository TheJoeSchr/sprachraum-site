<template lang="pug">
Layout
  .container.my-0(v-for='(section,index) in timetable' :key='section.title')
    section(:class="{'bg-yellow-100':(index%2==1) }" class="mb-0")
      h2.text-center.text-lg.mb-4.font-heading.font-semibold {{ section.title}}:  {{ section.subtitle }} von {{ section.times}}
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
