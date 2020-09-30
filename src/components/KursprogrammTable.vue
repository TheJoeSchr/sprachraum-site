<template lang="pug">
    section.py-8.px-4
      h2.text-xl.mb-4.font-heading.font-semibold {{ title}}
      table.w-full.table-auto
        thead
          tr.text-left
            th.border-t.py-2(scope='col') {{ subtitle }}
            th.border-t.py-2(scope='col') {{ times }}
            th.border-t.py-2(scope='col') Tage
            th.border-t.py-2(scope='col') Kurskosten**
        tbody
          slot
</template>

<script>
export default {
  name: 'KursprogrammTable',
  props: ['title', 'subtitle', 'times'],
  data: () => ({}),
}
</script>

<style></style>
