<template lang="pug">
Layout
  Info(:value="content")
</template>
<script>
import Info from '~/components/CourseInfo.vue'
import content from '@/content/Deutschkurse.yaml'
export default {
  components: {
    Info,
  },
  metaInfo: {
    title: 'Deutschkurse',
  },
  data() {
    return {
      content,
    }
  },
}
</script>
