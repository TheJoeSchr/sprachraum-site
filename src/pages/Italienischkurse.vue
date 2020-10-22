<template lang="pug">
Layout
  CourseInfo(:value="{ ...content, translateLink:'/it/corsidiitaliano'}")
    g-image(src='~/assets/images/2_Italienischkurs.jpg' height=300)
</template>
<script>
import CourseInfo from '~/components/CourseInfo.vue'
import content from '~/content/Italienischkurse.yaml'
import { message } from '~/content/Interface.yaml'

export default {
  components: {
    CourseInfo,
  },
  metaInfo: {
    title: 'Italienischkurse',
  },
  data() {
    return {
      content: {
        ...content,
        messages: message,
      },
    }
  },
}
</script>
