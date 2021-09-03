<template lang="pug">
Layout
  InfoPage(:value="{...jobs, }")
    g-image(src='~/assets/images/sonnenterrasse-1125943452.jpg' height=200 width=300)
</template>
<script>
import InfoPage from '~/components/InfoPage.vue'
import jobs from '~/content/it/Jobs.yaml'
import { message } from '~/content/it/Interface.yaml'

export default {
  components: {
    InfoPage,
  },
  metaInfo: {
    title: 'Jobs',
  },
  data() {
    return {
      jobs: {
        ...jobs,
        messages: message,
      },
    }
  },
}
</script>
