<template>
  <ul>
    <li v-for="product in products" :key="product.title">
      {{ product.title }}
    </li>
  </ul>
</template>

<script>
import products from '@/content/Kurse.yaml'

export default {
  data() {
    return {
      products,
    }
  },
}
</script>
