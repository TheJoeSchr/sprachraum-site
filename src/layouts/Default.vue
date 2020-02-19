<template>
  <div class="LayoutDefault">
    <div class="d-flex align-items-center p-3 mb-3 mb-md-5 bg-white border-bottom box-shadow">
      <a href="/"><span class="mr-auto">Fressmaus</span></a>
      <nav class="ml-auto">
        <g-link
          v-for="(menu, key) in menuOptions"
          :key="key"
          class="p-2 text-dark"
          :to="menu.route"
        >
          {{ menu.label }}
        </g-link>
      </nav>
    </div>
    <div class="LayoutDefault__main mx-auto">
      <slot />
    </div>
    <footer class="d-flex align-items-center p-3 bg-white border-top box-shadow">
      &copy; Fressmaus
    </footer>
  </div>
</template>

<script>
export default {
  name: "DefaultLayout",
  computed: {
    menuOptions () {
      return [
        ...this.edges.filter(({node}) => !node.full_slug.includes("blog")).map(edge => {
          return {
            label: edge.node.name,
            route: edge.node.full_slug
          }
        })
      ]
    },
    edges () {
      return this.$static.allStoryblokEntry.edges || []
    }
  },
  metaInfo: {
    link: [
      { // bulma
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css'
      },
      { // bulma blog theme: overlayscrollbars
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/overlayscrollbars/1.9.1/css/OverlayScrollbars.min.css'
      },
      { // bulma blog theme: font
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Open+Sans'
      },
      { // bulma fontawesome icons
        rel: 'script',
        href: 'https://use.fontawesome.com/releases/v5.3.1/js/all.js'
      },
    ],
  },
}
</script>

<static-query>
query {
  metadata {
    siteName
  }

  allStoryblokEntry {
    edges {
      node {
        id
        full_slug
        name
      }
    }
  }
}
</static-query>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}
.LayoutDefault__main {
  padding-right: 1em;
  padding-left: 1em;
  max-width: 52em;
}
.nav__link {
  margin-left: 20px;
}
</style>
