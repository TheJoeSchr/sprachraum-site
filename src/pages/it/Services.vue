<template lang="pug">
Layout
  OfferList(:value="{...content, translateLink:'/kursprogramm/'}")
</template>

<script>
import OfferList from '~/components/OfferList.vue'
import services from '~/content/it/Services.yaml'
import { message } from '~/content/it/Interface.yaml'

export default {
  components: {
    OfferList,
  },
  metaInfo: {
    title: 'Calendario',
  },
  data() {
    return {
      content:{
        list: services,
        messages: message,
      }
    }
  }
}
</script>
