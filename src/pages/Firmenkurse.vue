<template lang="pug">
Layout
  Info(:value="{ ...content, translateLink:'/it/firmenkurse/'}")
</template>
<script>
import Info from '~/components/CourseInfo.vue'
import firmenkurse from '~/content/Firmenkurse.yaml'
import { message } from '~/content/Interface.yaml'

export default {
  components: {
    Info,
  },
  metaInfo: {
    title: 'Firmenkurse',
  },
  data() {
    return {
      content: {
      ...firmenkurse,
      messages: message,
      },
    }
  },
}
</script>
<style scoped>
h3 {
  @apply text-xl;
}
h4 {
  @apply text-lg;
}
</style>
