<template lang="pug">
Layout
  InfoPage(:value="{...carriere, }")
    g-image(src='~/assets/images/schneemann-119510173.jpg' height=200 width=300)
</template>
<script>
import InfoPage from '~/components/InfoPage.vue'
import carriere from '~/content/it/Carriere.yaml'
import { message } from '~/content/it/Interface.yaml'

export default {
  components: {
    InfoPage,
  },
  metaInfo: {
    title: 'Carriere',
  },
  data() {
    return {
      carriere: {
        ...carriere,
        messages: message,
      },
    }
  },
}
</script>
