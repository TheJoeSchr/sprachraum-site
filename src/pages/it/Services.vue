<template lang="pug">
Layout
  Courses(:value="{...content, translateLink:'/kursprogramm/'}")
</template>

<script>
import Courses from '~/components/Courses.vue'
import timetable from '~/content/it/Calendario.yaml'
import { message } from '~/content/it/Interface.yaml'

export default {
  components: {
    Courses,
  },
  metaInfo: {
    title: 'Calendario',
  },
  data() {
    return {
      content:{
        timetable,
        messages: message,
      }
    }
  }
}
</script>
