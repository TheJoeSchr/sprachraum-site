<template lang="pug">
.bg-body.text-body.font-body.bg-white
  //- HEADER
  Navigation
      //- CONTENT
      slot
  //- FOOTER
  footer(class="flex flex-wrap items-center pb-4 px-4 mt-16 border-t")
    .container.w-full.bottom-0.py-4.bg-white(style="max-width:100vw")
      .container.mx-auto.w-full.text-center
        div(class="w-full lg:w-1/5 text-center lg:text-left")
            a(class="text-xl text-primary-500 font-semibold" href="#")
                g-image(src="~/assets/images/LogoAlphaFull.png" alt="SPRACHRAUM.workitaut.at" width="100")
        div(class="w-full lg:w-4/5 mt-4 lg:mt-0 text-center")
            a SPRACHRAUM.workitaut.at
            a(class="inline-block mx-4 mb-4 lg:mb-0  hover:text-primary-700" href="mailto:eli@workitaut.eu") Kontakt
            a(class="inline-block mx-4 mb-4 lg:mb-0  hover:text-primary-700" href="http://www.workitaut.eu" target="_blank") Work IT AUT
            //- a(class="inline-block mx-4 hover:text-primary-700" href="#") Impressum
            a(class="inline-block mx-4 hover:text-primary-700" href="/agb/") AGB

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

export default {
  components: {
    Navigation,
  },
}
</script>

<style>
bodydebug {
  @apply bg-red-600;
}

h4 {
  font-family: 'Unica One', Arial, Helvetica, sans-serif;
  font-weight: 400;
  letter-spacing: 0px;
  font-style: normal;
  font-weight: bold;
}

body {
  margin: 0;
  padding: 0;
  line-height: 1.5;
}
</style>
