<template lang="pug">
Layout
  MinorHero(:value="header" )
    g-image(src='~/assets/placeholders/pictures/undraw_real_time_collaboration_c62i.svg' height=250 width=250 center="bottom" fit="inside")
  .divide-y.divide-gray-400
    section.py-12.px-4.container.py-2(v-for='(person,index) in team' :key='person.id').pt-8
      .flex.flex-wrap.-mx-4.mb-8
        .portrait.mx-auto(class="md:mx-0 md:w-1/3 md:mb-0 md:pr-8" :class="person.id")
        .w-full.px-4(class='md:w-1/2 ')
          h2.text-2xl.pt-4.font-heading.font-semibold.text-center.mx-auto(class="md:text-4xl md:pt-0 md:text-left").
            {{ person.name }}
          .py-8.px-4(class="md:pl-0" v-if="person.zitat")
            .max-w-2xl.pl-12.py-4.mx-auto.border-l-4(class="md:pl-8")
              p.text-xl.mb-6(v-html="person.zitat")
              p.text-sm.text-gray-600
                span(v-if="person.zitatAuthor").mr-2  - {{ person.zitatAuthor}}
                //- span.font-semibold CEO at Realweb
      .flex.flex-wrap.w-full(class="md:-mx-4")
        .column-section(class='md:-mx-4')
          h3.text-xl Profilo
          p.tx-sm.text-gray-700(v-html="toBr(person.kurzbio)")
        .column-section(class='md:mx-8')
          h3.text-xl Sprachraum WORK IT AUT
          p.tx-sm.text-gray-700(v-html="toBr(person.sprachraum)")
        .column-section(class='md:-mx-4')
          h3.text-xl parole chiavi 
          p.tx-sm.text-gray-700(v-html="schlagworte(person)")
</template>
<script>
import content from '@/content/Team.yaml'
import MinorHero from '~/components/MinorHero.vue'
import { toBr } from '@/helpers'

export default {
  components: {
    MinorHero,
  },
  metaInfo: {
    title: 'Team',
  },
  data() {
    return {
      team: content.members,
      header: content.header
    }
  },
  methods: {
    toBr,
    schlagworte(person) {
      return this.toBr(
        `verbo: ${person.verb}\naggettivo: ${person.adjektiv}\nsostantivo: ${person.substantiv}`
      )
    },
  },
}
</script>
<style scoped>
.column-section {
  @apply .px-4 mb-4 w-full;
}
@screen md {
  .column-section {
    @apply mb-0 w-1/3;
  }
}
.portrait {
  height: 300px;
  width: 300px;
  background-size: contain; /* <------ */
  background-repeat: no-repeat;
  background-position: center center; /* optional, center the image */
}
.elke {
  background-image: url('~@/assets/portraits/Elke.jpg?width=300&height=300');
}
.johannes {
  background-image: url('~@/assets/portraits/Johannes.jpg?width=300&height=300');
}
.heidi {
  background-image: url('~@/assets/portraits/Heidi.jpg?width=300&height=300');
}
.laura {
  background-image: url('~@/assets/portraits/Laura.jpg?width=300&height=300');
}
.giorgio {
  background-image: url('~@/assets/portraits/Giorgio.jpg?width=300&height=300');
}
.richard {
  background-image: url('~@/assets/portraits/Richard.jpg?width=300&height=300');
}
.maura {
  background-image: url('~@/assets/portraits/Maura_Bagnone.jpg?width=300&height=300');
}
.nadjaMaffei {
  background-image: url('~@/assets/portraits/Nadja_Maffei.jpg?width=300&height=300');
}
.lauraSedda {
  background-image: url('~@/assets/portraits/Laura_Sedda.jpg?width=300&height=300');
}
.claudia {
  background-image: url('~@/assets/portraits/Claudia.png?width=300&height=300');
}
</style>
