<template lang="pug">
div
  header.fixed.container.w-full.top-0.bg-white.border-b-2.border-gray-300.shadow-xs(style="max-width:100vw")
    .container.mx-auto.w-full.text-center
      nav(class="flex flex-wrap items-center justify-between bg-white w-full pb-4")
        div(class="flex flex-shrink-0 mr-6")
          g-link(to="/")
            g-image(src="~/assets/images/LogoAlphaLineDeKlein.png" class="hidden sm:block")
            g-image(src="~/assets/images/LogoAlphaLineDeKlein.png" width="320" class="visible sm:hidden")
        //- menu button
        div(class="hidden lg:hidden")
          button.navbar-burger.flex.items-center.py-2.px-3.text-black.rounded.border.border-black
            svg.fill-current.h-3.w-3(viewbox='0 0 20 20' xmlns='http://www.w3.org/2000/svg')
              title Menu
              path(d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z')
        div(class="navbar-menu hidden lg:flex lg:flex-grow lg:items-center w-full lg:w-auto")
            div(class="lg:ml-auto")
              g-link(to="/"  class="block lg:inline-block mt-4 lg:mt-0 mr-10 text-gray-900 hover:text-primary-700") home
              g-link(to="/it/corsiditedesco/"  class="block lg:inline-block mt-4 lg:mt-0 mr-10 text-gray-900 hover:text-primary-700") corsi di tedesco
              g-link(to="/team/"  class="block lg:inline-block mt-4 lg:mt-0 mr-10 text-gray-900 hover:text-primary-700") squadra
            div
              g-link(to="/it/kursprogramm/" class="inline-block py-3 px-5 mr-4 leading-none text-center text-gray-700 bg-primary-100 hover:bg-primary-200 rounded shadow") calendario

  //- Part of CONTENT section
  section.mx-auto.border-none.shadow-none(class="container")
    div(class="mt-24 md:mt-40 xl:mt-32 mx-0 sm:mx-2 lg:mx-16")
      //- Nav Buttons for Mobile
      div(class="visible lg:hidden mx-2 ")
        g-link(to="/it/kursprogramm/" class="text-center inline-block mb-3 py-3 px-6 w-full leading-none text-black bg-primary-500 hover:bg-primary-600 rounded shadow") calendario | Kursprogramm
        g-link(to="/team/" class="text-center inline-block mb-3 py-3 px-6 w-full leading-none text-black bg-secondary-500 hover:bg-seondary-600 rounded shadow") squadra | Team
        g-link(to="/it/corsiditedesco/" class="text-center inline-block mb-3 py-3 px-6 w-full leading-none text-black bg-primary-500 hover:bg-primary-600 rounded shadow") corsi di tedesco | Deutschkurse
        g-link(to="/italienischkurse/"  class="text-center inline-block mb-3 py-3 px-6 w-full leading-none text-black bg-secondary-500 hover:bg-seondary-600 rounded shadow") Italienischkurse
        g-link(to="/" class="text-center inline-block mb-3 py-3 px-6 w-full leading-none text-black bg-primary-500 hover:bg-primary-600 rounded shadow") home
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
