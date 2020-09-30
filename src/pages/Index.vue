<template lang="pug">
Layout
  section(class="py-12 px-4 rounded overflow-hidden ")
    div(class="flex flex-wrap items-center text-center lg:text-left mx-2")
      div(class="lg:w-1/2 px-2 lg:pr-10 mt-10 lg:mt-0 order-1 lg:order-none")
        h2(class="text-5xl mb-4 leading-tight font-heading") Unsere Deutschkurse könnt ihr ab sofort Online besuchen
        p(class="mb-8 text-gray-600 leading-relaxed") Trefft Elke, Laura &amp; Kolleg_innen live in den virtuellen Work IT AUT Klassenzimmern.

        div
            a(href="#" class="inline-block py-4 px-8 mr-6 leading-none text-black bg-primary-500 hover:bg-primary-600 rounded shadow") Gleich anmelden!
            //- a(href="#" class="text-secondary-700 hover:underline") >> Einstufungstest

      div(class="lg:w-1/2 px-2")
          g-image(src="~/assets/images/LogoOriginalDe.png" alt="")

  section(class="py-12 px-4 rounded overflow-hidden shadow-md ")
    div(class="flex flex-wrap items-center max-w-5xl mx-auto")
      div(class="lg:w-1/2 lg:h-2/5 px-8 mb-8 lg:mb-0 ")
        g-image(src="~/assets/images/3_Kursprogramm_Sprachraum_1_iStock-1214385234.jpg" class="lg:max-w-sm mx-auto" fit="inside" height="250" )

      div(class="lg:w-1/2 px-8 mb-8 lg:mb-0")
        h3(class="text-2xl mb-2 font-heading") Kursprogramm
        p(class="mb-4 text-gray-600 leading-relaxed") Die Lebens- und Arbeitswelten sind in den letzten Monaten durcheinander geraten. Wir haben unser Projekt erweitert und freuen uns euch ab sofort unsere DAF/DAZ Kurse ONLINE &amp; LIVE anbieten zu können
        a(href="#" class="text-primary-700 hover:underline") >> Stundenplan und Preise

  //- section(class="py-12 px-4 rounded overflow-hidden  shadow-md")
  //-   div(class="flex flex-wrap items-center max-w-5xl mx-auto")
  //-     div(class="lg:w-1/2 px-8 mb-8 lg:mb-0 lg:order-1")
  //-         g-image(src="~/assets/images/7_Firmenkurse_iStock-620402800.jpg" alt="" class="lg:max-w-sm mx-auto" fit="inside" height="250" )

  //-     div(class="lg:w-1/2 px-8")
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

<style>
.banner {
  background-image: url('~@/assets/images/Banner.jpg');
  background-size: cover;
}
.deutschkurse {
  background-image: url('~@/assets/images/1_Deutschkurs_blicksalzburg-1133549562.jpg');
}
.italienischkurse {
  background-image: url('~@/assets/images/2_Italienischkurs_Gallura_home_o.jpg');
}
.kursprogramm {
  background-image: url('~@/assets/images/3_Kursprogramm_Sprachraum_1_iStock-1214385234.jpg');
}
.anmeldung {
  background-image: url('~@/assets/images/4_Anmeldung_iStock-1165005883.jpg');
}
.team {
  background-image: url('~@/assets/images/5_Team_P1130070.jpg');
}
.einstufungstest {
  background-image: url('~@/assets/images/6_Einstufungstest_P1120817.jpg');
}
.firmenkurse {
  background-image: url('~@/assets/images/7_Firmenkurse_iStock-620402800.jpg');
}
.coaching {
  background-image: url('~@/assets/images/8_Leben & Arbeiten_ReizendKaroVisit.jpg');
}
.salzburg-night {
  background-image: url('~@/assets/images/9_50257207_282289765784856_3876881521411358720_o.jpg');
}
p {
  padding-top: 0.5em;
  padding-bottom: 2em;
  line-height: 1.5em;
  font-weight: 500;
}
h4 {
  color: #ffffff;
  line-height: 2em;
}
</style>
