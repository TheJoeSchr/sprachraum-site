<template lang="pug">
Layout
  form.question-form(method='post' v-on:submit.prevent='handleSubmit' netlify name='order-form' ref='formTag')
    label Email:
      input(v-model='form.email' name='email' placeholder='name@example.com' type='email' ref='inputEmail')
      input(type='hidden' v-model='form.name' name='name' placeholder='name')
      input(type='hidden' v-model='form.description' name='description' placeholder='description')
      input(type='hidden' v-model='form.days' name='days' placeholder='days')
    button.text-gray-700.background-transparent.font-bold.uppercase.py-1.text-xs.border.border-solid.rounded.px-4.py-2(class='focus:outline-none hover:bg-brand-green hover:text-white' type='submit') Send
</template>
<script>
//import NotificationContainer from "./NotificationContainer.vue";
export default {
  name: 'QuestionForm',
  components: {
    //NotificationContainer
  },
  data() {
    return {
      form: {
        name: 'joe doe',
        days: '18',
        description: 'course description',
        email: '',
      },
      status: {},
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
