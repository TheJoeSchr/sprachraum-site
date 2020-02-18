<template>
  <div class="LayoutDefault">
    <div class="d-flex align-items-center p-3 mb-3 mb-md-5 bg-white border-bottom box-shadow">
      <span class="mr-auto">Fressmaus</span>
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
  </div>
</template>

<script>
export default {
  name: "DefaultLayout",
  computed: {
    menuOptions () {
      return [
        ...this.edges.map(edge => {
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
      {
        rel: 'stylesheet',
        href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css' },
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
