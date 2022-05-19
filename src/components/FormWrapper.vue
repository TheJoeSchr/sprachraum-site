<template lang="pug">
  form.form-wrapper(method='post' v-on:submit.prevent='handleSubmit' netlify name='order-form' ref='formTag')
    // auto-generate hidden fields for netlify form detection
    // all owned properties of form without "email"
    input(v-for='(value, propertyName) in form' v-if='form.hasOwnProperty(propertyName) && propertyName != "email"' type='hidden' :name='propertyName' :value='value')
    slot
    slot(name='submitButton')
      button.w-full.inline-block.px-6.py-2.text-sm.text-white.font-bold.leading-loose.bg-primary-600.rounded.transition.duration-200(class='hover:bg-gray-700' type='submit') {{ message.btnBookingSend }}
</template>
<script>
import {message} from '~/content/it/Interface.yaml'
export default {
  name: 'FormWrapper',
  components: {},
  props: ['value'],
  data() {
    const form = this.value
    return {
      form,
      status: {},
      message,
    }
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join('&')
    },
    async handleSubmit(e) {
      this.status = {}
      // you must include a form field named form-name that matches the name of your form.
      // see: https://snipcart.com/blog/netlify-forms
      let formName = this.$refs.formTag.getAttribute('name')
      fetch('/', {
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: this.encode({
          'form-name': formName,
          ...this.form,
        }),
      })
        .then(() => {
          this.status = {
            success: true,
          }
        })
        .catch(() => {
          this.status = {
            success: false,
          }
        })
    },
  },
}
</script>

<style scoped>
h3 {
  @apply text-xl;
}
h4 {
  @apply text-lg;
}
</style>
