<template>
  <Layout>
    <h1>Fressmaus Blog</h1>
    <div
      v-for="(item) in $page.allBlogEntry.edges"
      :key="item.id"
    >
      <a :href="item.node.full_slug">
        <MediaBlock v-bind="item.node.content" />
      </a>
    </div>
  </Layout>
</template>

<script>
export default {
  name:"Posts",
  metaInfo: {
    title: "Fressmaus'Blog"
  },
  computed: {
    posts () {
      return this.$page.allBlogEntry.edges || []
    }
  },
}
</script>

<page-query>
query {
  allBlogEntry {
    edges {
      node {
        id
        content
        full_slug
      }
    }
  }
}
</page-query>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
