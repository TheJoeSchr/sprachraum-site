<template lang="pug">
Layout
  Info(:value="{...content, translateLink:'/italienischkurse/'}")
    g-image(src='~/assets/images/2_Italienischkurs_Gallura_home_o.jpg' height=300)
</template>
<script>
import Info from '~/components/CourseInfo.vue'
import content from '~/content/it/CorsiDiItaliano.yaml'
import { message } from '~/content/it/Interface.yaml'

export default {
  components: {
    Info,
  },
  metaInfo: {
    title: 'Corsi Di Italiano',
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
