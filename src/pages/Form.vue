<template lang="pug">
.question-form
  //- notification-container(:status='status')
  form(method='post' @submit.prevent='handleSubmit')
    input(type='hidden' name='order-form' value='ask-question')
    ul
      li
        label
          | Your Name:
          input(type='text' name='name' @input='ev => form.name = ev.target.value')
      li
        p Ask:
        label(:class="{\
        'pick-panelist': true,\
        'checked':form.askPerson === panelist,\
        'disabled': ifEvan(panelist)\
        }" v-for='panelist in panelists')
          input(type='radio' name='panelist' @input='ev => form.askPerson = ev.target.value' :value='panelist' :disabled='ifEvan(panelist)' :checked='form.askPerson === panelist')
          span {{ panelist }}
        li
          label
            | Your Question:
            textarea(ref='input' name='question' @input='ev => form.question = ev.target.value' placeholder='Question Goes Here')
      button.submit-button(type='submit') Ask a questionLayout
  p
    strong TBA
    br
    |        UNDER CONSTRUCTION
</template>
<style scoped>
h3 {
  @apply text-xl;
}
h4 {
  @apply text-lg;
}
</style>

<script>
//import NotificationContainer from "./NotificationContainer.vue";
export default {
  name: "question-form",
  components: {
    //NotificationContainer
  },
  data() {
    return {
      panelists: ["Chris Fritz", "Evan You", "Both"],
      form: {
        askPerson: "Chris Fritz",
        name: "",
        question: ""
      },
      sent: false,
      status: {}
    };
  },
  methods: {
    ifEvan(person) {
      return person === "Evan You" || person === "Both";
    },
    removeNotification() {
      this.sent = false;
    },
    encode(data) {
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    },
    handleSubmit(e) {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: this.encode({
          "form-name": "order-form",
          ...this.form
        })
      })
        .then(() => {
          this.$router.push("thanks");
        })
        .catch(() => {
          this.$router.push("404");
        });
    }
  }
};
</script>

