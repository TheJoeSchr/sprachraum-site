<template lang="pug">
Layout
  section
    .flex.flex-wrap.items-center.text-center.mx-2(class='md:text-left')
      .px-2.order-1(class='md:w-1/2 md:pr-10 md:order-none')
        h2.text-2xl.pb-2.leading-tight.font-heading(class='md:text-5xl md:pb-0') Unsere Deutschkurse könnt ihr ab sofort Online besuchen
        p.mb-8.text-gray-600.leading-relaxed Trefft Elke, Laura &amp; Kolleg_innen live in den virtuellen Work IT AUT Klassenzimmern.
        .mb-2
          a.inline-block.py-4.px-8.mr-6.leading-none.text-black.bg-primary-500.rounded.shadow(
            href='mailto:post@workitaut.at?subject=Kursanmeldung&body=KURSTITEL /  CORSO %0A %0A %0AVORNAME / NOME%0A  %0ANACHNAME / COGNOME%0A  %0AGEBURTSDATUM / DATA DI NASCITA%0A  %0ASTRASSE / VIA%0A   %0APLZ / CODICE POSTALE%0A %0AORT / CITÀ%0A %0ALAND / PAESE%0A  %0ATELEFON / TELEFONO%0A %0AE-MAIL%0A %0A%0ANACHRICHT / MESSAGO%0A%0A%0A%0A%0A%0A%0A%0A [X]  Ich bestätige, dass ich die Allgemeinen Geschäftsbedingungen WorkITAUT (AGB) zur Kenntnis genommen habe.',
            class='hover:bg-primary-600'
          ) Gleich anmelden!
            //- a(href="#" class="text-secondary-700 hover:underline") >> Einstufungstest

      .px-2.hidden(class='md:w-1/2 md:block')
        g-image(src='~/assets/images/LogoOriginalDe.png', alt='')

  section
    .flex.flex-wrap.items-center.max-w-5xl.mx-auto.mb-8
      .pt-8.px-8.w-full(class='md:w-1/2 md:h-3/5')
        g-image.hidden.max-w-sm.mx-auto(
          src='~/assets/images/3_Kursprogramm_Sprachraum_1_iStock-1214385234.jpg',
          class='md:block',
          fit='inside',
          width='250',
          height='250'
        )

      .px-8.mb-8(class='md:w-1/2 md:mb-0')
        h3.text-2xl.mb-2.font-heading Kursprogramm
        p.mb-4.text-gray-600.leading-relaxed Die Lebens- und Arbeitswelten sind in den letzten Monaten durcheinander geraten. Wir haben unser Projekt erweitert und freuen uns euch ab sofort unsere DAF/DAZ Kurse ONLINE &amp; LIVE anbieten zu können
        g-link.text-primary-700(to='/Kursprogramm/', class='hover:underline') >> Stundenplan und Preise

  //- section(class="py-12 px-4 rounded overflow-hidden  shadow-md")
  //-   div(class="flex flex-wrap items-center max-w-5xl mx-auto")
  //-     div(class="md:w-1/2 px-8 mb-8 md:mb-0 md:order-1")
  //-         g-image(src="~/assets/images/7_Firmenkurse_iStock-620402800.jpg" alt="" class="md:max-w-sm mx-auto" fit="inside" height="250" )

  //-     div(class="md:w-1/2 px-8")
  //-         h3(class="text-2xl mb-2 font-heading") Deutschkurse
  //-         p(class="mb-4 text-gray-500 leading-relaxed") Die Inhalte &amp; Lehrunterlagen folgen den Vorgaben des Gemeinsamen Europäi- schen Referenzrahmen für Sprachen. Trainer_innen verfügen über DAF/DAZ Zertifizierung und /oder ÖIF (österreichischer Integrationsfond) Zertifizierung. Italienischkurse / Diese Kurse finden in Kooperation mit der One World Cagliari statt. www.oneworldcagliari.com
  //-         a(href="#" class="text-secondary-700 hover:underline") >> Deutschkurse

  //- section(class="py-12 px-4 text-center rounded overflow-hidden  shadow-md")
  //-   h2(class="text-4xl mb-2 leading-tight font-heading") Angebote
  //-   p(class="max-w-xl mx-auto mb-8 text-gray-500") Deutsch &amp; Italienisch Kurse &amp; Coaching Online &amp; Live  Zertifizierte DAF/DAZ Trainer*innen. Gemeinsamer europäischer Referenzrahmen für Sprachen.

  //-     div(class="flex flex-wrap justify-center max-w-4xl mx-auto")
  //-         div(class="h-48 w-48 md:h-64 md:w-64 m-2")
  //-             div(class="relative flex items-center h-full p-8 bg-cover rounded shadow-md deutschkurse")
  //-                 div(class="absolute inset-0 bg-white opacity-75 rounded")
  //-                 div(class="z-10 w-full text-center")
  //-                     p(class="text-3xl leading-tight mb-2") Deutsch Kurse
  //-                     p
  //-                       //- ul
  //-                       //-   li Standardkurse A1 – C1
  //-                       //-   li Deutsch für den Beruf
  //-                       //-   li Konversation
  //-                       //-   li Individual Coaching
  //-         div(class="h-48 w-48 md:h-64 md:w-64 m-2")
  //-             div(class="relative flex items-center h-full p-8 bg-cover rounded shadow-md italienischkurse" )
  //-                 div(class="hidden absolute inset-0 bg-white opacity-50 rounded")
  //-                 div(class="z-10 w-full text-center")
  //-                     p(class="text-3xl leading-tight") Italienisch Kurse
  //-                     p
  //-                       ul.text-xs.text-white
  //-                         li Carbonara è senza crema!
  //-                         li Vacanza in Italia
  //-                         li La dolce vita e altre cose.
  //-                         li La Sardegna: cultura, sport e gente
  //-         div(class="h-48 w-48 md:h-64 md:w-64 m-2")
  //-             div(class="relative flex items-center h-full p-8 bg-cover rounded shadow-md kursprogramm")
  //-                 div(class="absolute inset-0 bg-white opacity-75 rounded")
  //-                 div(class="z-10 w-full text-center")
  //-                     p(class="text-3xl leading-tight mb-2") Kursprogramm
  //-                     p
  //-                       //- ul
  //-                       //-   li Standardkurse A1 – C1
  //-                       //-   li Deutsch für den Beruf
  //-                       //-   li Konversation
  //-                       //-   li Individual Coaching
  //-         div(class="h-48 w-48 md:h-64 md:w-64 m-2")
  //-             div(class="relative flex items-center h-full p-8 bg-cover rounded shadow-md firmenkurse")
  //-                 div(class="absolute inset-0 bg-white opacity-75 rounded")
  //-                 div(class="z-10 w-full text-center")
  //-                     p(class="text-3xl leading-tight mb-2") Firmenkurse
  //-                     p
  //-                       //- ul
  //-                       //-   li Standardkurse A1 – C1
  //-                       //-   li Deutsch für den Beruf
  //-                       //-   li Konversation
  //-                       //-   li Individual Coaching
  //-         div(class="h-48 w-48 md:h-64 md:w-64 m-2")
  //-             div(class="relative flex items-center h-full p-8 bg-cover rounded shadow-md team")
  //-                 div(class="absolute inset-0 bg-white opacity-75 rounded")
  //-                 div(class="z-10 w-full text-center")
  //-                     p(class="text-3xl leading-tight mb-2") Team
  //-                     p
  //-                       //- ul
  //-                       //-   li Standardkurse A1 – C1
  //-                       //-   li Deutsch für den Beruf
  //-                       //-   li Konversation
  //-                       //-   li Individual Coaching
  //-         div(class="h-48 w-48 md:h-64 md:w-64 m-2")
  //-             div(class="relative flex items-center h-full p-8 bg-cover rounded shadow-md coaching")
  //-                 div(class="absolute inset-0 bg-white opacity-75 rounded")
  //-                 div(class="z-10 w-full text-center")
  //-                     p(class="text-3xl leading-tight mb-2") Coaching
  //-                     p
  //-                       //- ul
  //-                       //-   li Standardkurse A1 – C1
  //-                       //-   li Deutsch für den Beruf
  //-                       //-   li Konversation
  //-                       //-   li Individual Coaching
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
