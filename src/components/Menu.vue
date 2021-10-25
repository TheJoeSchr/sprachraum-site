<template lang="pug">
  div(class="navbar-menu lg:flex lg:flex-grow items-center w-full lg:w-auto")
      div(class="lg:ml-auto")
      div(class="text-center")
        g-link(to="/"  class="block lg:inline-block mt-4 lg:mt-0 mr-5 text-gray-900 hover:text-primary-700") home
        g-link(to="/it/jobs/"  class="inline-block py-3 px-5 mr-5 leading-none text-center text-gray-700 bg-secondary-100 hover:bg-secondary-300 rounded shadow") lavori in AUT
        g-link(to="/it/abos/" class="inline-block py-3 px-5 mr-5 leading-none text-center text-gray-700 bg-primary-100 hover:bg-primary-200 rounded shadow") corsi di tedesco
        g-link(to="/it/services/"  class="block lg:inline-block mt-4 lg:mt-0 mr-5 text-gray-900 hover:text-primary-700") servizi
        g-link(to="/team/"  class="block lg:inline-block mt-4 lg:mt-0 mr-5 text-gray-900 hover:text-primary-700") chi siamo
</template>

<script>
export default {
  name: 'Menu',
}
</script>
