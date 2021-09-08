<template lang="pug">
Layout
  InfoPage(:value="{...jobs, }")
    g-image(src='~/assets/images/sonnenterrasse-1125943452.jpg' height=200 width=300)
  InfoPage(:value="{...carriere, }")
    g-image(src='~/assets/images/schneemann-119510173.jpg' height=200 width=300)
</template>
<script>
import InfoPage from '~/components/InfoPage.vue'
import carriere from '~/content/it/Carriere.yaml'
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
      carriere: {
        ...carriere,
        messages: message,
      },
      jobs: {
        ...jobs,
        messages: message,
      },
    }
  },
}
</script>
