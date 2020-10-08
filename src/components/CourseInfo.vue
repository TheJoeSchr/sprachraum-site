<template lang="pug">
div
  .flex
    g-link(:to="translateLink" ).btn-translate {{ messages.btnTranslate }}
  MinorHero(:value="{...title, content:cardContent,link,linkText}")
    slot
  div.flex.flex-wrap(class='md:justify-between')
    .container.pt-2(v-for='(section,index) in sections' :key='section.title' :class="{'md:w-auto md:px-4': (section.list),'md:w-full md:px-1': (section.content)}")
      section.py-4.px-4.w-full
        div(class='mb-8 lg:mb-0')
          h3.text-2xl.mb-4 {{ section.title }}
          div(v-if="section.content" v-html='toBr(section.content)').text-lg
          ul(v-if="section.list").list-disc.list-inside
            li.mb-3(v-for='(item,index) in section.list' :key='index' v-html='toBr(item)')
</template>
<script>
import MinorHero from '~/components/MinorHero.vue'
import { toBr } from '@/helpers'
export default {
  components: {
    MinorHero,
  },
  props: ['value'],
  data() {
    const {
      title,
      content: cardContent,
      link = '/kursprogramm/',
      linkText = '>> zu unseren Kursen',
      messages = { btnTranslate:'' },
      sections,
      translateLink
    } = this.value
    return {
      title,
      cardContent,
      link,
      linkText,
      messages,
      sections,
      translateLink
    }
  },
  methods: {
    toBr,
  },
}
</script>
