<template lang="pug">
Layout
  .divide-y.divide-gray-400
    .container.py-2(v-for='(section,index) in timetable' :key='section.title').pt-8
      section(:class="{'bg-yellow-100':(index%2==1), 'shadow-lg':(index%2==1) ,'shadow-inner':(index%2==0) }" class="mb-0").my-2.pt-1
        h2.text-center.text-xl.pt-2.font-heading.font-bold {{ section.title }}
        h3.text-center.text-lg.pb-1.font-heading {{ section.subtitle }} von {{ section.times}}
        ul
          li(v-for='course in section.courses' :key="course.name")
            KursprogrammKarte(:value="{...course,times:section.times}")
        div.text-sm
          h3.text-lg Informazioni
          span Corsi di gruppo / partecipanti min. 3 max. 6
          span I corsi non si terranno nei giorni / 8 dic; e dal 21 dic al 11 gen.
          h3 Legenda / unità = 50min; SI = studio individuale.
          ul
            li A1 elementare, A2 pre-intermedio, B1 intermedio, B2 post-intermedio, C1 avanzato.
            li * L´appuntamento sarà concordato con i partecipanti.
            li ** Non sono inclusi i libri da utilizzare nei corsi. Il prezzo dei libri per i corsi sarà compreso tra 17,- e 24,- euro.
            li *** Le date di questi giorni-extra saranno concordato con i partecipanti al gruppo.

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
