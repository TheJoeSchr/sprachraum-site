<template>
  <div>
    <g-image :src="imageURL" />
  </div>
</template>

<script>
export default {
  name:"BlokImage",
  props: ['image'],
  computed: {
    imageURL () {
      if (typeof this.image === 'string') {
        return this.image
      }

      const path = this.image.path
      return require('!!assets-loader?width=800&quality=100&fit=inside!~/' + path)
    }
  }
}
</script>

<style scoped>
img {
  max-width: 100%;
}
</style>
