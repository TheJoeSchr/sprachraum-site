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
