<template lang="pug">
Layout
  Courses(:value="{timetable,messages, translateLink:'/kursprogramm/'}")
</template>

<script>
import Courses from '~/components/Courses.vue'
import timetable from '~/content/it/Calendario.yaml'

export default {
  components: {
    Courses,
  },
  metaInfo: {
    title: 'Kursprogramm',
  },
  data() {
    return {
      timetable,
      messages: {
        btnTranslate: '🇩🇪 Deutsch',
        btnBooking: 'Iscrizione',
      },
    }
  },
}
</script>
