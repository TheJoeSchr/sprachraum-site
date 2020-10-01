<template lang="pug">
Layout
  MinorHero(:value="{...content,link:'/kursprogramm/',linkText:'>> zu unseren Kursen'}")
    g-image(src='~/assets/images/1_Deutschkurs_blicksalzburg-1133549562.jpg' height=300)
  div.flex.flex-wrap
    .container.pt-2(v-for='(section,index) in content.sections' :key='section.title' :class="{'md:w-1/3 md:px-4': (section.list),'md:w-full md:px-1': (section.content)}")
      section.py-4.px-4.w-full
        div(class='mb-8 lg:mb-0')
          h3.text-2xl.mb-4 {{ section.title }}
          div(v-if="section.content" v-html='toBr(section.content)').text-lg
          ul(v-if="section.list").list-disc.list-inside
            li.mb-3(v-for='(item,index) in section.list' :key='index' )
              | {{ item }}
</template>
<script>
import MinorHero from '~/components/MinorHero.vue'
import content from '@/content/Deutschkurse.yaml'
import { toBr } from '@/helpers'
export default {
  components: {
    MinorHero,
  },
  metaInfo: {
    title: 'Deutschkurse',
  },
  data() {
    return {
      content,
    }
  },
  methods: {
    toBr,
  },
}
</script>
