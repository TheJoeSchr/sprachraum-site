<template lang="pug">
Layout
  section
    .flex.flex-wrap.items-center.text-center.mx-2(class='md:text-left md:my-8')
      .px-2.order-1(class='md:w-1/2 md:pr-10 md:order-none')
        h2.text-2xl.pb-2.leading-tight.font-heading(class='md:text-5xl md:pb-0') Unsere Deutschkurse könnt ihr ab sofort Online besuchen
        p.mb-8.text-gray-600.leading-relaxed Trefft Elke, Laura &amp; Kolleg_innen live in den virtuellen Work IT AUT Klassenzimmern.
        .mb-2
          g-link.inline-block.py-4.px-8.mr-6.leading-none.text-black.bg-primary-500.rounded.shadow(
            to="/kursprogramm/"
            class='hover:bg-primary-600'
          ) Gleich anmelden!
            //- a(href="#" class="text-secondary-700 hover:underline") >> Einstufungstest


      .px-2.hidden(class='md:w-1/2 md:block')
        g-link(to="/kursprogramm/")
          g-image(src='~/assets/images/LogoOriginalDe.png', alt='')

  template(v-for='(section,index) in cards' )
    MinorHero(:value="{...section, isLeft: (index%2==0)}" )
      g-image(v-if="0==index", src='~/assets/images/7_Firmenkurse_iStock-620402800.jpg')
      g-image(v-if="1==index", src='~/assets/images/3_Kursprogramm_Sprachraum_1_iStock-1214385234.jpg')
</template>

<script>
import MinorHero from '~/components/MinorHero.vue'
import Layout from '~/layouts/Default.vue'

export default {
  components: {
    Layout,
    MinorHero,
  },
  metaInfo: {
    title: 'Home',
  },
  data: () => ({
    cards: [
      {
        title: 'Kursprogramm',
        link: '/kursprogramm/',
        linkText: '>> Mehr Infos',
        content: `A1–C1`,
      },
      {
        title: 'Deutschkurse',
        link: '/deutschkurse/',
        linkText: '>> Mehr Infos',
        content: `A1–C1`,
      },
    ],
  }),
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
