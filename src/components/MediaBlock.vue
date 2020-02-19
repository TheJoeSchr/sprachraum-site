<template>
  <div class="">
    <div class="">
      <h2>{{ title }}</h2>
      <div v-html="body" />
      <div
        v-if="image"
        :class="{
          [`MediaBlock__figure`]: true,
          [`MediaBlock__figure--left`]: image_position === `left`,
        }"
      >
        <BlokImage :image="image" />
      </div>
    </div>
  </div>
</template>

<script>
import BlokImage from "~/components/BlokImage.vue";
import marked from 'marked'
export default {
  name: `MediaBlock`,
  components: {
    BlokImage
  },
  props: {
    image: {
      type: String,
      default: null,
    },
    image_position: {
      type: String,
      default: null,
    },
    position: {
      type: String,
      default: `right`,
    },
    content: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  computed: {
    body () {
      return marked(this.content).slice(0,120)
    }
  },
};
</script>

<style>
</style>
