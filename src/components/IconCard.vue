<template lang="pug">
.bg-white.border.rounded-lg.overflow-hidden
  g-image(:alt='item.imageAlt' :src='item.imageUrl')
    .p-6
      .flex.items-baseline
        span.inline-block.bg-teal-200.text-teal-800.text-xs.px-2.rounded-full.uppercase.font-semibold.tracking-wide.
          {{ item.title }}

      .mt-2.flex.items-center
        span.ml-2.text-gray-600.text-sm {{ item.content }}
</template>

<script>
export default {
  props: ['item'],
}
</script>
