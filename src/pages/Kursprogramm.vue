<template lang="pug">
  Layout

    section.py-8.px-4
      h2.text-3xl.mb-2.font-heading.font-semibold Support ticket list
      p.mb-4 List of tickets opend by customers
      .flex.flex-wrap.-mx-4.mb-8
        .w-full(class='lg:w-1/4 lg:mb-0').px-4.mb-6
          .h-full
            .text-center.p-4.mb-2.bg-blue-500.text-white.rounded
              h3.text-3xl.leading-tight.font-heading.font-semibold 448
              span.leading-none Total Tickets
        .w-full.px-4.mb-6(class='lg:mb-0 lg:w-1/4')
          .h-full
            .text-center.p-4.mb-2.bg-red-500.text-white.rounded
              h3.text-3xl.leading-tight.font-heading.font-semibold 81
              span.leading-none Responded
        .w-full.px-4.mb-6(class='lg:w-1/4 lg:mb-0' )
          .h-full
            .text-center.p-4.mb-2.bg-green-500.text-white.rounded
              h3.text-3xl.leading-tight.font-heading.font-semibold 208
              span.leading-none Resolved
        .w-full.px-4.mb-6(class='lg:w-1/4 lg:mb-0')
          .h-full
            .text-center.p-4.mb-2.bg-gray-800.text-white.rounded
              h3.text-3xl.leading-tight.font-heading.font-semibold 159
              span.leading-none Peding
      table.w-full.table-auto
        thead
          tr
            th.border-t.px-2.py-2(scope='col') ID #
            th.border-t.px-2.py-2(scope='col') Opened By
            th.border-t.px-2.py-2(scope='col') Cust. Email
            th.border-t.px-2.py-2(scope='col') Subject
            th.text-center.border-t.px-2.py-2(scope='col') Status
            th.text-center.border-t.px-2.py-2(scope='col') Assign to
            th.text-center.border-t.px-2.py-2(scope='col') Date
            th.text-center.border-t.px-2.py-2(scope='col') Action
        tbody
          tr
            td.border-t.px-2.py-2 348
            td.border-t.px-2.py-2
              a(href='#')
                img.inline-block.mr-2.rounded-full(src='placeholders/pictures/male_avatar.svg' alt height='40' width='40')
                |  Lauren North
            td.border-t.px-2.py-2 lauren@gmail.com
            td.border-t.px-2.py-2 Where are my files?
            td.text-center.border-t.px-2.py-2
              span.inline-block.text-sm.py-1.px-3.rounded-full.text-white.bg-yellow-500 New
            td.text-center.border-t.px-2.py-2 Kelly Kapoor
            td.text-center.border-t.px-2.py-2 18-11-2018
            td.text-center.border-t.px-2.py-2
              a.text-blue-700(href='#' class='hover:underline') edit
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
