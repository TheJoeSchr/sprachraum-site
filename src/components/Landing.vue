<template lang="pug">
div
  //- Translate Button
    .flex
      g-link(:to="translateLink" ).btn-translate {{ messages.btnTranslate }}

  // Big hero
  section
    .flex.flex-wrap.items-center.text-center.mx-2(class='md:text-left md:my-8')
      .px-2.order-1(class='md:w-1/2 md:pr-10 md:order-none')
        h2.text-2xl.py-4.mt-4.leading-tight.font-heading(class='md:text-5xl md:pb-0' v-html="toBr(hero.title)")
        h3.text-xl.text-gray-800.leading-tight.font-heading(class='md:py-4 md:my-4 md:text-xl md:pb-0' v-html="toBr(hero.subtitle)")
        p.mb-8.text-gray-600.leading-relaxed(v-html="toBr(hero.content)")
        .mb-8
          g-link.inline-block.py-4.px-8.mr-6.leading-none.text-black.bg-primary-500.rounded.shadow(
            :to='hero.link'
            class='hover:bg-primary-600'
          ) {{hero.linkText}}


      .px-2(class='md:w-1/2 w-full block')
        g-link(to="/kursprogramm/")
          g-image(src='~/assets/images/outdoor-pool-stock-resort-wellness-zillertal-02.jpg', alt='')

  template(v-for='(section, index) in cards' )
    MinorHero(:value="{...section, isLeft: (index % 2 == 0)}" )
      g-image(v-if="0 == index", src='~/assets/junior/Bild_1_TitelJuniorgoPROPa1250150-KORR.jpg' width="300" height="300" position="right" fit="cover")
      g-image(v-if="1 == index", src='~/assets/images/3_Kursprogramm_Sprachraum_1_iStock-1214385234.jpg' height="300" width="300"  center="bottom" fit="cover")
      g-image(v-if="2 == index", src='~/assets/images/WORK IT AUT-WORKBEE-LOGO-FINAL.jpg' height=300 width="300" center="top" fit="outside")
      g-image(v-if="3 == index", src='~/assets/images/schneemann-119510173.jpg' height=300 width="300" position="left" fit="cover")
      g-image(v-if="4 == index", src='~/assets/images/kocherei-stock-resort-kulinarik-genusshotel-05.jpg' height="300" width="300" center="top" fit="cover")
      g-image(v-if="5 == index", src='~/assets/images/2_Italienischkurs.jpg' height="300" width="300" center="top" fit="cover")

  MinorHero(:value="{...contact, isLeft: true}" v-if="contact")
    g-image.mx-auto.my-4( src='~/assets/images/contact.jpg' height="300" width="300" center="top" fit="cover")
</template>

<script>
import MinorHero from '~/components/MinorHero.vue'
import Layout from '~/layouts/Default.vue'
import {toBr} from '~/helpers'

export default {
  name: 'Landing',
  components: {
    Layout,
    MinorHero,
  },
  props: ['value'],
  data() {
    const content = this.value
    return {...content}
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
