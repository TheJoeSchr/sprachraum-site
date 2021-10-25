<template lang="pug">
div
  header.navigation-font.fixed.container.w-full.top-0.bg-white.shadow-xs(style="max-width:100vw")
    .container.mx-auto.w-full.text-center
      nav(class="flex flex-wrap items-center justify-between bg-white w-full")
        div(class="flex flex-shrink-0 mr-6")
          g-link(to="/")
            g-image(src="~/assets/images/LogoAlphaLineDeKlein.png" width="160" class="block lg:hidden")
            g-image(src="~/assets/images/LogoAlphaLineDeKlein.png" width="320" class="hidden lg:block")
        //- menu button
        div(class="block lg:hidden").mr-4
          a(@click='toggleMobileNav')
            button.navbar-burger.flex.items-center.py-2.px-4.text-black.rounded.border.border-black
              svg.fill-current.h-3.w-3(viewbox='0 0 20 20' xmlns='http://www.w3.org/2000/svg')
                title Menu
                path(d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z')

        //- Menu needs to be double, hidden class and v-show don't work well together
        Menu(class="hidden lg:block")
        Menu(v-show="showMobileNav" class="lg:hidden")

  //- Part of CONTENT section
  section.mx-auto.border-none.shadow-none(class="container")
    div(class="mt-24 md:mt-40 xl:mt-32 mx-0 sm:mx-2 lg:mx-16").navigation-font
      //- Nav Buttons for Mobile
        div(v-show="showMobileNav" class="block lg:hidden mx-2 text-center")
          g-link(to="/"  class="block lg:inline-block mt-4 lg:mt-0 mr-5 text-gray-900 hover:text-primary-700") home
          g-link(to="/it/jobs/"  class="inline-block py-3 px-5 mr-5 leading-none text-center text-gray-700 bg-secondary-100 hover:bg-secondary-300 rounded shadow") lavori in AUT
          g-link(to="/it/abos/" class="inline-block py-3 px-5 mr-5 leading-none text-center text-gray-700 bg-primary-100 hover:bg-primary-200 rounded shadow") corsi di tedesco
          g-link(to="/it/services/"  class="block lg:inline-block mt-4 lg:mt-0 mr-5 text-gray-900 hover:text-primary-700") servizi
          g-link(to="/team/"  class="block lg:inline-block mt-4 lg:mt-0 mr-5 text-gray-900 hover:text-primary-700") chi siamo
        //-
          g-link(to="/it/kursprogramm/" class="text-center inline-block mb-3 py-3 px-6 w-full leading-none text-black bg-primary-500 hover:bg-primary-600 rounded shadow") calendario | Kursprogramm
          g-link(to="/team/" class="text-center inline-block mb-3 py-3 px-6 w-full leading-none text-black bg-secondary-500 hover:bg-seondary-600 rounded shadow") squadra | Team
          g-link(to="/it/corsiditedesco/" class="text-center inline-block mb-3 py-3 px-6 w-full leading-none text-black bg-primary-500 hover:bg-primary-600 rounded shadow") corsi di tedesco | Deutschkurse
          g-link(to="/italienischkurse/"  class="text-center inline-block mb-3 py-3 px-6 w-full leading-none text-black bg-secondary-500 hover:bg-seondary-600 rounded shadow") Italienischkurse
          g-link(to="/" class="text-center inline-block mb-3 py-3 px-6 w-full leading-none text-black bg-primary-500 hover:bg-primary-600 rounded shadow") home
      slot
</template>

<script>
import Menu from '~/components/Menu.vue'

export default {
  name: 'Navigation',
  components: {
    Menu,
  },
  data() {
    return {
      showMobileNav: false,
    }
  },
  methods: {
    toggleMobileNav() {
      this.showMobileNav = !this.showMobileNav
    },
  },
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
</style>
