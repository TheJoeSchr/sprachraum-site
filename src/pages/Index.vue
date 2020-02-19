<template>
  <Layout>
    <!-- START ARTICLE FEED -->
    <section class="articles">
      <div class="column is-8 is-offset-2">
        <!-- START ARTICLE -->
        <div
          v-for="(item) in $page.allBlogEntry.edges"
          :key="item.id"
          class="card article"
        >
          <div class="card-content">
            <div class="media">
              <div class="media-center">
                <img
                  src="http://www.radfaces.com/images/avatars/daria-morgendorffer.jpg"
                  class="author-image"
                  alt="TODO: Use sad/happy fressmaus image"
                >
              </div>
              <div class="media-content has-text-centered">
                <p
                  class="title article-title" >
                  <a :href="item.node.full_slug" > {{ item.node.content.title }} </a>
                </p>
                <p class="subtitle is-6 article-subtitle">
                  published  {{ item.node.published_at }}
                </p>
              </div>
            </div>
          </div>
        </div>
      <!-- END ARTICLE -->
      </div>
    </section>
  <!-- END ARTICLE FEED -->
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
        published_at
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
