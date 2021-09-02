<template lang="pug">
Layout
  Info(:value="{...carriere, translateLink:'/deutschkurse/'}")
    g-image(src='~/assets/images/sonnenterrasse-1125943452.jpg' height=200 width=200)
  Info(:value="{...beratung, translateLink:'/deutschkurse/'}")
    g-image(src='~/assets/images/sonnenterrasse-1125943452.jpg' height=200 width=200)
</template>
<script>
import Info from '~/components/CarriereInfo.vue'
import carriere from '~/content/it/Carriere.yaml'
import beratung from '~/content/it/Carriere.yaml'
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
