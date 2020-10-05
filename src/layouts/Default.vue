<template lang="pug">
.bg-body.text-body.font-body.bg-white
  //- HEADER
  Navigation
      //- CONTENT
      slot
  //- FOOTER
  Footer
    a(href="https://sprachraum.workitaut.at") SPRACHRAUM.workitaut.at
    g-link(to="/kontakt/" class="inline-block mx-4 mb-4 lg:mb-0  hover:text-primary-700") Kontakt
    a(class="inline-block mx-4 mb-4 lg:mb-0  hover:text-primary-700" href="http://www.workitaut.eu" target="_blank") Work IT AUT
    g-link(to="/impressum/" class="inline-block mx-4 hover:text-primary-700" ) Impressum
    g-link(to="/agb/" class="inline-block mx-4 hover:text-primary-700" ) AGB

</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
<script>
import Navigation from '~/components/Navigation.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Navigation,
    Footer,
  },
}
</script>

<style>
.btn-translate {
  @apply text-center inline-block mb-3 py-3 px-6 w-2/5 mx-auto leading-none text-black bg-secondary-200  rounded shadow;
}
.btn-translate:hover {
  @apply bg-primary-600;
}
body {
  margin: 0;
  padding: 0;
  line-height: 1.5;
}
</style>
