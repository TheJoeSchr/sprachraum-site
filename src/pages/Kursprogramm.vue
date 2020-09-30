<template lang="pug">
  Layout
    KursprogrammTable(title='Früher Vogel' subtitle='Kurse am Morgen' times='08:00 – 08:50')
      tr.text-left
        td.border-t.px-2.py-2 Individual - Coaching - Einzelstunden
        td.border-t.px-2.py-2 ab 12.10
        td.border-t.px-2.py-2 Mo bis Do*
        td.border-t.px-2.py-2 30,-
      tr.text-left
        td.border-t.px-2.py-2 Konversation Einzelstunden
        td.border-t.px-2.py-2 ab 12.10
        td.border-t.px-2.py-2 Mo bis Do*
        td.border-t.px-2.py-2 30,-
</template>

<script>
import KursprogrammTable from '~/components/KursprogrammTable.vue'

export default {
  components: {
    KursprogrammTable,
  },
  metaInfo: {
    title: 'Kursprogramm',
  },
  data: () => ({}),
}
</script>

<style></style>
