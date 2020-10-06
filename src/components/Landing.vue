<template lang="pug">
div
  .flex
    g-link(:to="translateLink" ).btn-translate {{ messages.btnTranslate }}
  section
    .flex.flex-wrap.items-center.text-center.mx-2(class='md:text-left md:my-8')
      .px-2.order-1(class='md:w-1/2 md:pr-10 md:order-none')
        h2.text-3xl.py-4.mt-4.leading-tight.font-heading(class='md:text-5xl md:pb-0' v-html="toBr(hero.title)")
        p.mb-8.text-gray-600.leading-relaxed(v-html="toBr(hero.content)")
        .mb-8
          g-link.inline-block.py-4.px-8.mr-6.leading-none.text-black.bg-primary-500.rounded.shadow(
            to='/kursprogramm/'
            class='hover:bg-primary-600'
          ) {{ hero.linkText }}


      .px-2(class='md:w-1/2 w-full block')
        g-link(to="/kursprogramm/")
          g-image(src='~/assets/images/laura-chouette-MIzyUBE5jYI-unsplash.jpg', alt='')

  template(v-for='(section,index) in cards' )
    MinorHero(:value="{...section, isLeft: (index%2==0)}" )
      g-image(v-if="0==index", src='~/assets/images/7_Firmenkurse_iStock-620402800.jpg' height=300  center="bottom" fit="inside")
      g-image(v-if="1==index", src='~/assets/images/3_Kursprogramm_Sprachraum_1_iStock-1214385234.jpg' height=300 center="top" fit="inside")
      g-image(v-if="2==index", src='~/assets/images/4_Anmeldung_iStock-1165005883.jpg' height=300 center="top" fit="inside")
      g-image(v-if="3==index", src='~/assets/images/LaptopQuaderKlein.jpg' height=300 center="top" fit="inside")
</template>

<script>
import MinorHero from '~/components/MinorHero.vue'
import Layout from '~/layouts/Default.vue'
import content from '@/content/Index.yaml'
import { toBr } from '~/helpers'

export default {
  name: 'Landing',
  components: {
    Layout,
    MinorHero,
  },
  props:['value'],
  data() {
    const content = this.value
    return { ...content }
  },
  methods: {
    toBr,
  },
}
</script>

<style scoped>
section {
  @apply mb-8 shadow bg-white border rounded overflow-hidden;
}

@screen md {
  section {
    @apply mb-16;
  }
}
@screen lg {
  section {
    @apply py-0 px-8;
  }
}
</style>
