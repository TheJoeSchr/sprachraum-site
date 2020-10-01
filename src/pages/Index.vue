<template lang="pug">
Layout
  section
    .flex.flex-wrap.items-center.text-center.mx-2(class='md:text-left md:my-8')
      .px-2.order-1(class='md:w-1/2 md:pr-10 md:order-none')
        h2.text-3xl.py-4.mt-4.leading-tight.font-heading(class='md:text-5xl md:pb-0').
          {{ hero.title }}
        p.mb-8.text-gray-600.leading-relaxed.
          {{ hero.content }}
        .mb-8
          g-link.inline-block.py-4.px-8.mr-6.leading-none.text-black.bg-primary-500.rounded.shadow(
            to='/kursprogramm/'
            class='hover:bg-primary-600'
          ) {{ hero.linkText }}


      .px-2.hidden(class='md:w-1/2 md:block')
        g-link(to="/kursprogramm/")
          g-image(src='~/assets/images/LogoOriginalDe.png', alt='')

  template(v-for='(section,index) in cards' )
    MinorHero(:value="{...section, isLeft: (index%2==0)}" )
      g-image(v-if="0==index", src='~/assets/images/7_Firmenkurse_iStock-620402800.jpg' height=300  center="bottom" fit="inside")
      g-image(v-if="1==index", src='~/assets/images/3_Kursprogramm_Sprachraum_1_iStock-1214385234.jpg' height=300 center="top" fit="inside")
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
    hero: {
      title: 'Unsere Deutschkurse könnt ihr ab sofort Online besuchen!',
      content:
        'Trefft Elke, Laura, Johannes, Heidi & ihre Kolleg*innen in den virtuellen Klassenzimmern von Work IT AUT',
      link: 'kursprogramm',
      linkText: 'Gleich anmelden!',
    },
    cards: [
      {
        title: 'Deutschkurse',
        link: '/deutschkurse/',
        linkText: '>> Mehr Infos',
        content: `Wir legen im Unterricht großen Wert darauf, dass alle vier wichtigen Kernbereiche trainiert werden: die rezeptiven LESEN und HÖREN und die produktiven SPRECHEN und SCHREIBEN. `,
      },
      {
        title: 'Kursprogramm',
        link: '/kursprogramm/',
        linkText: '>> Stundenplan & Preise',
        content: `Die Lebens- und Arbeitswelten sind in den letzten Monaten durcheinander geraten. Wir haben unser Projekt erweitert und freuen uns euch ab sofort unsere DAF/DAZ Kurse ONLINE &amp; LIVE anbieten zu können`,
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
