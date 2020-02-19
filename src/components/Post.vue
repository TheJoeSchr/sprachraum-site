<template>
  <div>
    <!-- START ARTICLE -->
    <div class="card article">
        <div class="card-content">
            <div class="media">
                <div class="media-center">
                    <img src="http://www.radfaces.com/images/avatars/angela-chase.jpg" class="author-image" alt="Placeholder image">
                </div>
                <div class="media-content has-text-centered">
                    <p class="title article-title">{{ blok.title }} </p>
                    <p class="subtitle is-6 article-subtitle">
                        <!-- <a href="#">@angela</a> on October 7, 2017 -->
                    </p>
                </div>
            </div>
            <img :src="blok.image">
            <div class="content article-body" v-html="body"> </div>
        </div>
    </div>
  </div>
</template>

<script>
import marked from 'marked'
export default {
  name: "Post",
  props: ['blok'],
  computed: {
    body () {
      return marked(this.blok.content)
    }
  },
}
</script>
