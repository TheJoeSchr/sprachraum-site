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

  section
    g-link(to="/kursprogramm/" ).flex.flex-wrap.items-center.max-w-5xl.mx-auto.mb-8
      .pt-8.px-8.w-full(class='md:w-1/2 md:h-3/5')
        g-image.hidden.max-w-sm.mx-auto(
          src='~/assets/images/7_Firmenkurse_iStock-620402800.jpg',
          class='md:block',
          fit='inside',
          width='250',
          height='250'
        )
      .px-8.mb-8(class='md:w-1/2 md:mb-0')
        h3.text-2xl.mb-2.font-heading Deutschkurse
        p.mb-4.text-gray-600.leading-relaxed.
          Die Inhalte & Lehrunterlagen folgen den Vorgaben des Gemeinsamen Europäi-
          schen Referenzrahmen für Sprachen. Trainer_innen verfügen über DAF/DAZ Zertifizierung
        g-link.text-primary-700(to='/Kursprogramm/', class='hover:underline') >> Mehr Infos
  section
    g-link(to="/kursprogramm/" ).flex.flex-wrap.items-center.max-w-5xl.mx-auto.mb-8
      .px-8.mb-8(class='md:w-1/2 md:mb-0')
        h3.text-2xl.mb-2.font-heading Kursprogramm
        p.mb-4.text-gray-600.leading-relaxed Die Lebens- und Arbeitswelten sind in den letzten Monaten durcheinander geraten. Wir haben unser Projekt erweitert und freuen uns euch ab sofort unsere DAF/DAZ Kurse ONLINE &amp; LIVE anbieten zu können
        g-link.text-primary-700(to='/Kursprogramm/', class='hover:underline') >> Stundenplan und Preise
      .pt-8.px-8.w-full(class='md:w-1/2 md:h-3/5')
        g-image.hidden.max-w-sm.mx-auto(
          src='~/assets/images/3_Kursprogramm_Sprachraum_1_iStock-1214385234.jpg',
          class='md:block',
          fit='inside',
          width='250',
          height='250'
        )
</template>

<script>
import IconCard from '~/components/IconCard.vue'
import Layout from '~/layouts/Default.vue'

export default {
  components: {
    IconCard,
    Layout,
  },
  metaInfo: {
    title: 'Home',
  },
  data: () => ({
    cards: [
      {
        imageUrl: '/assets/1_Deutschkurse.jpg',
        imageAlt: 'Deutschkurse',
        title: 'Deutschkurse',
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
