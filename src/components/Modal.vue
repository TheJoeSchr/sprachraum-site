<template lang="pug">
span
  a(@click="toggleModal()")
    slot(name="inline" v-bind:toggleModal="toggleModal")
  .modal.pointer-hand(v-if='showModal')
    .overflow-x-hidden.overflow-y-auto.fixed.inset-0.z-50.outline-none.justify-center.items-start.flex( v-on:click.self='closeModal()' class='focus:outline-none md:hover:bg-gray-300 bg-gray-100' )
      .relative.w-auto.my-6.mx-auto.max-w-6xl
        // content
        .content.border-0.rounded-lg.shadow-lg.relative.flex.flex-col.w-full.bg-white.outline-none
          // header
          .sticky.flex.items-start.justify-between.p-5.border-b.border-solid.border-blueGray-200.rounded-t(class='md:hover:bg-gray-100' v-on:click.self='closeModal()')
            button.absolute.bg-transparent.text-2xl.font-semibold.leading-none.right-0.top-0.mt-4.mr-6.outline-none(v-on:click='closeModal()')
              span &times;
          // body
          .pointer-default.relative.p-6.flex-inital
            slot

</template>
<script>
import {toBr} from '~/helpers'

export default {
  name: 'Modal',
  data() {
    return {
      showModal: false,
    }
  },
  methods: {
    toBr,
    toggleModal() {
      this.showModal = !this.showModal
    },
    closeModal() {
      this.showModal = false
    },
  },
}
</script>

<style scoped>
.content {
  @apply mb-8 shadow border rounded overflow-hidden;
  .modal {
    transition: opacity 0.25s ease;
  }
}
</style>
