<template lang="pug">
Layout
  Courses(:value="{ ...content, translateLink:'/it/kursprogramm/'}")
</template>

<script>
import Courses from '~/components/Courses.vue'
import timetable from '@/content/de/Kursprogramm.yaml'
import { message } from '@/content/de/Interface.yaml'

export default {
  components: {
    Courses,
  },
  metaInfo: {
    title: 'Kursprogramm',
  },
  data() {
    return {
      content: {
        timetable,
        messages: message,
      }
    }
  }
}
</script>
