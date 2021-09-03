<template lang="pug">
Layout
  Info(:value="{...carriere, }")
    g-image(src='~/assets/images/sonnenterrasse-1125943452.jpg' height=200 width=300)
  Info(:value="{...beratung, }")
    g-image(src='~/assets/images/schneemann-119510173.jpg' height=200 width=300)
</template>
<script>
import Info from '~/components/CarriereInfo.vue'
import carriere from '~/content/it/Carriere.yaml'
import beratung from '~/content/it/Beratung.yaml'
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
      carriere: {
        ...carriere,
        messages: message,
      },
      beratung: {
        ...beratung,
        messages: message,
      },
    }
  },
}
</script>
