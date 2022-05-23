<template lang="pug">
Layout
  div
    template(v-for='(section, index) in cards' )
      MinorHero(:value="{...section, isLeft: (index % 2 == 0)}" )
        g-image(v-if="0 == index", src='~/assets/junior/Bild_2_JuniorinnovativP1250100.JPG' height="300" width="300"  fit="cover" quality=100)
        g-image(v-if="1 == index", src='~/assets/junior/Bild_3_JuniorJOBS_Francesco_SHF.jpg' height="300" width="300" position="center" fit="cover" quality=100)
        g-image(v-if="2 == index", src='~/assets/junior/JOBS_juniorgopro.jpg' height="300" width="300" position="left" fit="cover" quality=100)
        g-image(v-if="3 == index", src='~/assets/junior/CORSI_juniorgopro.jpg' height="300" width="300" fit="cover" quality=100)
    MinorHero(:value="{...contact, isLeft: true}" v-if="contact")
      g-image.mx-auto.my-4( src='~/assets/images/contact.jpg' height="300" width="300" center="top" fit="cover")
</template>

<script>
import MinorHero from '~/components/MinorHero.vue'
import Layout from '~/layouts/Default.vue'
import {toBr} from '~/helpers'
import content from '~/content/it/Junior.yaml'
export default {
  name: 'JUNIORgoPRO',
  components: {
    Layout,
    MinorHero,
  },
  data() {
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
