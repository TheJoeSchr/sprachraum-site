<template lang="pug">
Layout
  #jobs
    .divide-y.divide-gray-400
      template(v-for='(dreamjob, index) in jobs.dreamjobs')
        DreamJobCard(:value='dreamjob')
    InfoPage(:value='jobs')
      g-image(src='~/assets/images/sonnenterrasse-1125943452.jpg' height=200 width=300)
    InfoPage(:value='{...carriere, }')
      g-image(src='~/assets/images/schneemann-119510173.jpg' height=200 width=300)
</template>
<script>
import DreamJobCard from '~/components/DreamJobCard.vue'
import InfoPage from '~/components/InfoPage.vue'
import MinorHero from '~/components/MinorHero.vue'
import carriere from '~/content/it/Carriere.yaml'
import jobs from '~/content/it/Jobs.yaml'
import { message } from '~/content/it/Interface.yaml'
import { toBr } from '@/helpers'

export default {
  components: {
    DreamJobCard,
    InfoPage,
    MinorHero,
  },
  metaInfo: {
    title: 'Jobs',
  },
  methods: {
    toBr
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
<style scoped>
.column-section {
  @apply .px-4 mb-4 w-full;
}

@screen md {
  .column-section {
    @apply mb-0 w-1/3;
  }
}

</style>
