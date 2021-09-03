<template lang="pug">
Layout
  OfferList(:value="{ ...content, translateLink:'/it/kursprogramm/'}")
</template>

<script>
import OfferList from '~/components/OfferList.vue'
import timetable from '@/content/de/Kursprogramm.yaml'
import { message } from '@/content/de/Interface.yaml'

export default {
  components: {
    OfferList,
  },
  metaInfo: {
    title: 'Kursprogramm',
  },
  data() {
    return {
      content: {
        list: timetable,
        messages: message,
      }
    }
  }
}
</script>
