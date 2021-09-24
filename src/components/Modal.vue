<template lang="pug">
  .modal(v-if='showModal')
    .overflow-x-hidden.overflow-y-auto.fixed.inset-0.z-50.outline-none.justify-center.items-start.flex(class='focus:outline-none')
      .relative.w-auto.my-6.mx-auto.max-w-6xl
        // content
        .border-0.rounded-lg.shadow-lg.relative.flex.flex-col.w-full.bg-white.outline-none(class='focus:outline-none')
          // header
          .sticky.flex.items-start.justify-between.p-5.border-b.border-solid.border-blueGray-200.rounded-t
            button.absolute.bg-transparent.text-2xl.font-semibold.leading-none.right-0.top-0.mt-4.mr-6.outline-none(class='focus:outline-none' v-on:click='closeModal()')
              span &times;
          // body
          .relative.p-6.flex-inital
            slot

</template>
<script>
import { toBr } from '~/helpers'

export default {
  name: 'Modal',
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    showModal: {
      get: function () {
        return this.value
      },
      set: function (newValue) {
        this.$emit('input', newValue)
      },
    },
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

<style></style>
