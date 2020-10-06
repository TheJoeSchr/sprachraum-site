<template lang="pug">
Layout
  Courses(:value="{timetable,messages, translateLink:'/it/kursprogramm/'}")
</template>

<script>
import Courses from '~/components/Courses.vue'
import timetable from '@/content/Kursprogramm.yaml'
import { message } from '@/content/Interface.yaml'

console.log(message)
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
