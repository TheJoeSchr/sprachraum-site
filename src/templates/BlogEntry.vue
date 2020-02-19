<template>
  <Layout>
    <component
      :is="story.content.component"
      v-if="story.content.component"
      :key="story.content._uid"
      :blok="story.content"
    />
  </Layout>
</template>

<script>
export default {
  name: 'BlogEntryTemplate',
  computed: {
    story () {
      return this.$page.blogEntry
    }
  }
}
</script>

<page-query>
query BlogEntry ($id: ID) {
  blogEntry (id: $id) {
    id
    slug
    content
  }
}
</page-query>
