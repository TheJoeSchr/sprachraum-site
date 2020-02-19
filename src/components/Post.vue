<template>
  <div>
    <h1>{{ blok.title }} </h1>
    <img :src="blok.image">
    <div v-html="body" />
  </div>
</template>

<script>
import marked from 'marked'
export default {
  name: "Post",
  props: ['blok'],
  computed: {
    body () {
      return marked(this.blok.content)
    }
  },
}
</script>
