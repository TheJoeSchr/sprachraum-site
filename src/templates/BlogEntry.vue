<template>
  <Layout>
   <div class="container">
      <!-- START ARTICLE FEED -->
      <section class="articles">
        <div class="column is-8 is-offset-2">
          <component :is="story.content.component"
            v-if="story.content.component"
            :key="story.content._uid"
            :blok="story.content"
          />
        </div>
      </section>
      <!-- END ARTICLE FEED -->  
    </div>
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
