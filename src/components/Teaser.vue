<template>
  <div
    v-editable="blok"
    class="teaser"
  >
    {{ blok.headline }}
    <richtext :text="blok.richtext" />
    <a
      :href="block.link.url"
      class="btn btn-primary"
    >
      Read more
    </a>
  </div>
</template>

<script>
export default {
  props: ['blok']
}
</script>
