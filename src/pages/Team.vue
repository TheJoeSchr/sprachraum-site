<template lang="pug">
Layout
  .divide-y.divide-gray-400
    section.py-12.px-4.container.py-2(v-for='(person,index) in team' :key='person.id').pt-8
      .flex.flex-wrap.-mx-4.mb-8
        .portrait.mx-auto(class="md:mx-0 md:w-1/3 md:mb-0 md:pr-8" :class="person.id")
        .w-full.px-4(class='md:w-1/2 ')
          h2.text-2xl.pt-4.font-heading.font-semibold.text-center.mx-auto(class="md:text-4xl md:pt-0 md:text-left").
            {{ person.name }}
          .py-8.px-4(class="md:pl-0")
            .max-w-2xl.pl-12.py-4.mx-auto.border-l-4(class="md:pl-8")
              p.text-xl.mb-6(v-html="person.zitat")
              p.text-sm.text-gray-600
                span.mr-2  - {{ person.zitatAuthor}}
                //- span.font-semibold CEO at Realweb
      .flex.flex-wrap.w-full(class="md:-mx-4")
        .shorty(class='md:-mx-4')
          h3.text-xl Kurzbio
          p.tx-sm.text-gray-700(v-html="toBr(person.kurzbio)")
        .shorty(class='md:mx-8')
          h3.text-xl Sprachraum
          p.tx-sm.text-gray-700(v-html="toBr(person.sprachraum)")
        .shorty(class='md:-mx-4')
          h3.text-xl Schlagworte
          p.tx-sm.text-gray-700(v-html="schlagworte(person)")
</template>
<style scoped>
.shorty {
  @apply .px-4 mb-4 w-full;
}
@screen md {
  .shorty {
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
</style>

<script>
import team from '@/content/Team.yaml'
import { toBr } from '@/helpers'

export default {
  metaInfo: {
    title: 'Team',
  },
  data() {
    return {
      team,
    }
  },
  methods: {
    toBr,
    schlagworte(person) {
      return this.toBr(
        `Verb: ${person.verb}\nAdjektiv: ${person.adjektiv}\nSubstantiv: ${person.substantiv}`
      )
    },
  },
}
</script>
