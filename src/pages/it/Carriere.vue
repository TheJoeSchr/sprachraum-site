<template lang="pug">
Layout
  Info(:value="{...content, translateLink:'/deutschkurse/'}")
    g-image(src='~/assets/images/1_Deutschkurs_blicksalzburg-1133549562.jpg' height=300)
</template>
<script>
import Info from '~/components/CarriereInfo.vue'
import content from '~/content/it/Carriere.yaml'
import { message } from '~/content/it/Interface.yaml'

export default {
  components: {
    Info,
  },
  metaInfo: {
    title: 'Carriere',
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
