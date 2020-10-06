<template lang="pug">
Layout
  Courses(:value="{timetable,messages, translateLink:'/kursprogramm/'}")
</template>

<script>
import Courses from '~/components/Courses.vue'
import timetable from '~/content/it/Calendario.yaml'
import { message } from '@/content/it/Interface.yaml'

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
        ...message,
      }
    }
  }
}
</script>
