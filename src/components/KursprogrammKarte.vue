<template lang="pug">
section(class="py-0")
  .flex.flex-wrap.max-w-4xl.mx-auto
    .w-full.py-1.mb-1.px-2(class='md:w-full md:mb-0')
      .py-1.px-6.border
        img.ml-auto(src='placeholders/icons/badge.svg' alt)
        h3.text-5xl.mb-3.font-heading.font-semibold.left-0.
          {{value.name}}

        .mx-0(class='md:mx-32')
          p.mb-8.mx-0.text-gray-500.leading-relaxed.
            {{value.cost}}

          h3.mb-3.font-heading.font-semibold Kurs
          ul.mb-8.list-inside.list-disc.text-gray-500
            li.mb-1 {{ value.date }}
            li.mb-1 {{ value.days }}
        .ml-auto.mb-2
          a.inline-block.w-full.py-3.px-5.leading-none.text-center.text-blue-700.bg-indigo-100.rounded.shadow(class='hover:bg-indigo-200' href='#') Buchen
</template>

<script>
export default {
  metaInfo: {
    title: 'KursprogrammKarte',
  },
  props: ['value'],
}
</script>

<style></style>
