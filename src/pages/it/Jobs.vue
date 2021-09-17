<template lang="pug">
Layout
  #jobs
    section.dreamjobs
          <!-- .max-w-7xl.mx-auto.px-8.pt-4(class='sm:px-6 lg:px-8') -->
          <!--   h3.text-2xl.mb-2.mt-8.font-heading(class="lg:text-4xl lg:mt-0") Jobs -->
          .mx-6(class='sm:py-4 lg:py-2 lg:max-w-none')
            .mt-2(class='lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6')
              .group(v-for='(dreamjob, index) in jobs.dreamjobs')
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
section.dreamjobs {
  @apply mb-8 shadow bg-yellow-100 border rounded overflow-hidden;
}
.column-section {
  @apply .px-4 mb-4 w-full;
}

@screen md {
  .column-section {
    @apply mb-0 w-1/3;
  }
}

</style>
