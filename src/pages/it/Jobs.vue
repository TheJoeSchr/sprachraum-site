<template lang="pug">
Layout
  #jobs
    section.dreamjobs
      .mx-6(class='sm:py-4 lg:py-2 max-w-none')
        .mt-2(class='lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6')
          template(v-for='(dreamjob, index) in jobs.dreamjobs')
            a.group(v-on:click="toggleInfo(dreamjob)")
                DreamJobCard(:value='dreamjob')

        //!-- section.dreamjobinfo.bg-white(class='sm:py-4 lg:py-2 lg:max-w-none' v-show="currentInfo" @click="toggleInfo()")
        Modal(v-model="showInfo")
          DreamJobInfo(:value='currentInfo')
    InfoPage(:value='{...jobs}')
      g-image(src='~/assets/images/tausch_dachterrasse.jpg' height=200 width=300)
    <!-- InfoPage(:value='{...carriere, }') -->
    <!--   g-image(src='~/assets/images/schneemann-119510173.jpg' height=200 width=300) -->
</template>
<script>
import DreamJobCard from '~/components/DreamJobCard.vue'
import DreamJobInfo from '~/components/DreamJobInfo.vue'
import InfoPage from '~/components/InfoPage.vue'
import MinorHero from '~/components/MinorHero.vue'
import Modal from '~/components/Modal.vue'
import carriere from '~/content/it/Carriere.yaml'
import jobs from '~/content/it/Jobs.yaml'
import { message } from '~/content/it/Interface.yaml'
import { toBr } from '@/helpers'

export default {
  components: {
    DreamJobCard,
    DreamJobInfo,
    InfoPage,
    MinorHero,
    Modal,
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
      showInfo: false,
      currentInfo: null,
    }
  },
  methods: {
    toBr,
    toggleInfo(dreamjob) {
      this.currentInfo = dreamjob
      this.showInfo = true
    },
  },
}
</script>
<style scoped>
section.dreamjobs {
  @apply mb-8 shadow border rounded overflow-hidden;
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
