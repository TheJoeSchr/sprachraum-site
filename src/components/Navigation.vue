<template lang="pug">
div
  header.fixed.container.w-full.top-0.bg-white.border-b-2.border-gray-300.shadow-xs(style="max-width:100vw")
    .container.mx-auto.w-full.text-center
      nav(class="flex flex-wrap items-center justify-between bg-white w-full pb-4")
        div(class="flex flex-shrink-0 mr-6")
          g-link(to="/")
            g-image(src="~/assets/images/LogoAlphaLineDeKlein.png" class="hidden sm:block")
            g-image(src="~/assets/images/LogoAlphaLineDeKlein.png" width="320" class="visible sm:hidden")
        div(class="hidden lg:hidden")
            <button class="navbar-burger flex items-center py-2 px-3 text-black rounded border border-black"><svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path></svg></button>
        div(class="navbar-menu hidden lg:flex lg:flex-grow lg:items-center w-full lg:w-auto")
            div(class="lg:ml-auto")
              g-link(to="/"  class="block lg:inline-block mt-4 lg:mt-0 mr-10 text-gray-900 hover:text-primary-700") Startseite
              g-link(to="/deutschkurse/"  class="block lg:inline-block mt-4 lg:mt-0 mr-10 text-gray-900 hover:text-primary-700") Deutschkurse
              g-link(to="/team/"  class="block lg:inline-block mt-4 lg:mt-0 mr-10 text-gray-900 hover:text-primary-700") Team
            div
              g-link(to="/kursprogramm/" class="inline-block py-3 px-5 mr-4 leading-none text-center text-gray-700 bg-primary-100 hover:bg-primary-200 rounded shadow") Kursprogramm
              //- a(href="mailto:post@workitaut.at?subject=Kursanmeldung&body=KURSTITEL /  CORSO %0A %0A %0AVORNAME / NOME%0A  %0ANACHNAME / COGNOME%0A  %0AGEBURTSDATUM / DATA DI NASCITA%0A  %0ASTRASSE / VIA%0A   %0APLZ / CODICE POSTALE%0A %0AORT / CITÀ%0A %0ALAND / PAESE%0A  %0ATELEFON / TELEFONO%0A %0AE-MAIL%0A %0A%0ANACHRICHT / MESSAGO%0A%0A%0A%0A%0A%0A%0A%0A [X]  Ich bestätige, dass ich die Allgemeinen Geschäftsbedingungen WorkITAUT (AGB) zur Kenntnis genommen habe." class="inline-block py-3 px-6 mt-4 lg:mt-0 leading-none text-black bg-primary-500 hover:bg-primary-600 rounded shadow") Anmelden

  //- Part of CONTENT section
  section.mx-auto.border-none.shadow-none(class="container")
    div(class="mt-24 md:mt-32 mx-0 sm:mx-2 lg:mx-16")
      //- Nav Buttons for Mobile
      div(class="visible lg:hidden mx-2 ")
        g-link(to="/kursprogramm/" class="text-center inline-block mb-3 py-3 px-6 w-full leading-none text-black bg-primary-500 hover:bg-primary-600 rounded shadow") Kursprogramm
        g-link(to="/team/" class="text-center inline-block mb-3 py-3 px-6 w-full leading-none text-black bg-secondary-500 hover:bg-seondary-600 rounded shadow") Team
        g-link(to="/deutschkurse" class="text-center inline-block mb-3 py-3 px-6 w-full leading-none text-black bg-primary-500 hover:bg-primary-600 rounded shadow") Deutschkurse
        g-link(to="/" class="text-center inline-block mb-3 py-3 px-6 w-full leading-none text-black bg-secondary-500 hover:bg-seondary-600 rounded shadow") Startseite
      slot
</template>

<script>
export default {
  name: 'Navigation',
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Unica+One&display=swap');
.navigation-font {
  font-family: 'Unica One', Arial, Helvetica, sans-serif;
  font-weight: 400;
  font-size: 18px;
  letter-spacing: 2px;
  font-style: normal;
  line-height: 3.5em;
}

.content-font {
  font-family: D-DIN, DIN, Arial, Helvetica, sans-serif;
  font-weight: 400;
  letter-spacing: 0px;
  font-style: normal;
}
</style>
