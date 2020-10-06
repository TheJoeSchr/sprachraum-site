<template lang="pug">
Layout
  Info(:value="{ ...content, translateLink:'/it/corsiditedesco/'}")
</template>
<script>
import Info from '~/components/CourseInfo.vue'
import deutschkurse from '~/content/Deutschkurse.yaml'
import { message } from '~/content/Interface.yaml'

export default {
  components: {
    Info,
  },
  metaInfo: {
    title: 'Deutschkurse',
  },
  data() {
    return {
      content: {
      ...deutschkurse,
      messages: message,
      },
    }
  },
}
</script>
