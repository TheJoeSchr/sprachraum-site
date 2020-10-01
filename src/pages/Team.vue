<template lang="pug">
Layout
  .divide-y.divide-gray-400
    section.py-12.px-4.container.py-2(v-for='(person,index) in team' :key='person.id').pt-8
      .flex.flex-wrap.-mx-4.mb-8
        .portrait.mb-4.mx-auto(class="lg:ml-0 lg:w-1/2 lg:mb-0 h-32" :class="person.id")
        .w-full.px-4(class='lg:w-1/2')
          h2.text-4xl.font-heading.font-semibold.text-center.mx-auto(class="lg:text-left").
            {{ person.name }}
          .py-8.px-4(class="lg:pl-0")
            .max-w-2xl.pl-12.py-4.mx-auto.border-l-4(class="lg:pl-8")
              p.text-xl.mb-6 {{ person.zitat }}
              p.text-sm
                span.mr-2  {{ person.zitatAuthor}}
                //- span.font-semibold CEO at Realweb
      .flex.flex-wrap.-mx-4.w-full
        .shorty
          h3.text-xl Sprachraum
          p.tx-sm(v-html="toBr(person.sprachraum)")
        .shorty
          h3.text-xl Kurzbio
          p.tx-sm(v-html="toBr(person.kurzbio)")
        .shorty
          h3.text-xl Schlagworte
          p.tx-sm(v-html="schlagworte(person)")
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
  background-image: url('~@/assets/portraits/elke.jpg?width=300&height=300');
}
.johannes {
  background-image: url('~@/assets/portraits/johannes.jpg?width=300&height=300');
}
.heidi {
  background-image: url('~@/assets/portraits/heidi.jpg?width=300&height=300');
}
.laura {
  background-image: url('~@/assets/portraits/laura.jpg?width=300&height=300');
}
.giorgio {
  background-image: url('~@/assets/portraits/giorgio.jpg?width=300&height=300');
}
.richard {
  background-image: url('~@/assets/portraits/richard.jpg?width=300&height=300');
}
</style>

<script>
import team from '@/content/Team.yaml'

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
    toBr: (str) => (str ? str.replace(/(?:\r\n|\r|\n)/g, '<br>') : ''),
    schlagworte(person) {
      return this.toBr(
        `Verb: ${person.verb}\nSubstantiv: ${person.substantiv}\nAdjektiv: ${person.adjektiv}`
      )
    },
  },
}
</script>
