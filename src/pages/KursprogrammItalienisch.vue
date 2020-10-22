<template lang="pug">
Layout
  Courses(:value="{ ...content, translateLink:'/it/corsidiitaliano'}")
</template>

<script>
import Courses from '~/components/Courses.vue'
import timetable from '@/content/KursprogrammItalienisch.yaml'
import { message } from '@/content/Interface.yaml'

export default {
  components: {
    Courses,
  },
  metaInfo: {
    title: 'Kursprogramm Italienisch',
  },
  data() {
    return {
      content: {
        timetable,
        messages: message,
      },
    }
  },
}
</script>
