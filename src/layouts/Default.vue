<template lang="pug">
.bg-body.text-body.font-body.bg-white
  //- HEADER
  Navigation
    //- CONTENT
    div(class="mt-24 md:mt-40 xl:mt-32 mx-0 sm:mx-2 lg:mx-16").content-font
      slot
  //- FOOTER
  Footer
    a(href="https://sprachraum.workitaut.at") SPRACHRAUM.workitaut.at
    g-link(to="/kontakt/" class="inline-block mx-4 mb-4 lg:mb-0  hover:text-primary-700") Kontakt
    //- a(class="inline-block mx-4 mb-4 lg:mb-0  hover:text-primary-700" href="http://workitaut.at" target="_blank") Work IT AUT
    g-link(to="/impressum/" class="inline-block mx-4 hover:text-primary-700" ) Impressum & Datenschutz
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
body {
  margin: 0;
  padding: 0;
  line-height: 1.5;
}

.content-font {
  font-family: D-DIN, DIN, Arial, Helvetica, sans-serif;
  font-weight: 400;
  letter-spacing: 0px;
  font-style: normal;
}
</style>
