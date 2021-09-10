<template lang="pug">
Layout
  #jobs
    .divide-y.divide-gray-400
      section.py-12.px-4.container.py-2(v-for='(dreamjob,index) in jobs.dreamjobs' :key='dreamjob.id').pt-8
        .flex.flex-wrap.mx-4.mb-8
          .section-hero-img.mx-auto(class='md:mx-0 md:w-1/3 md:mb-0 md:pr-8' :class='dreamjob.id')
          .w-full.px-4.mx-4(class='md:w-1/2 ')
            h2.text-xl.font-heading.font-semibold.text-center.mx-auto(class='md:text-4xl md:pt-0 md:text-left').
              {{ dreamjob.title }}
            h3.text-lg.font-heading.font-semibold.text-center.mx-auto.text-gray-600(class='md:text-4xl md:pt-0 md:text-left').
              {{ dreamjob.subtitle }}
            blockquote.text-sm
              .py-8(class='md:pl-0' v-if='dreamjob.description')
                .max-w-2xl.py-4.mx-auto
                  p(v-html='toBr(dreamjob.description)')
        .flex.flex-wrap.w-full(class='md:mx-4')
          .column-section(v-for='column in dreamjob.columns' :key='column.title' class='md:-mx-4')
            h3.text-xl {{ column.title }}
            p.tx-sm.text-gray-700
              ul
                li(v-for='item in column.content' :key='item') {{ item }}
    InfoPage(:value='jobs')
      g-image(src='~/assets/images/sonnenterrasse-1125943452.jpg' height=200 width=300)
    InfoPage(:value='{...carriere, }')
      g-image(src='~/assets/images/schneemann-119510173.jpg' height=200 width=300)
</template>
<script>
import InfoPage from '~/components/InfoPage.vue'
import MinorHero from '~/components/MinorHero.vue'
import carriere from '~/content/it/Carriere.yaml'
import jobs from '~/content/it/Jobs.yaml'
import { message } from '~/content/it/Interface.yaml'
import { toBr } from '@/helpers'

export default {
  components: {
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

.section-hero-img {
  height: 300px;
  width: 300px;
  background-size: contain; /* <------ */
  background-repeat: no-repeat;
  background-position: center center; /* optional, center the image */
}
.chef_de_partie {
  background-image: url('~@/assets/jobs/chef_de_partie.jpg?width=300&height=300');
}
</style>
