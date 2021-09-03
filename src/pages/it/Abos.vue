<template lang="pug">
Layout
  OfferList(:value="{...content, translateLink:'/kursprogramm/'}")
</template>

<script>
import OfferList from '~/components/OfferList.vue'
import abos from '~/content/it/Abos.yaml'
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
        list: abos,
        messages: message,
      }
    }
  }
}
</script>
