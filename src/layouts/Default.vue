<template>
  <div class="LayoutDefault">
    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <a
            class="navbar-item"
            href="/"
          > Fressmaus </a>
          <span
            class="navbar-burger burger"
            data-target="navbarMenu"
          >
            <span />
            <span />
            <span />
          </span>
        </div>
        <div
          id="navbarMenu"
          class="navbar-menu"
        >
          <div class="navbar-end">
            <g-link
              v-for="(menu, key) in menuOptions"
              :key="key"
              class="navbar-item"
              :to="menu.route"
            >
              {{ menu.label }}
            </g-link>
          </div>
        </div>
      </div>
    </nav>
    <!-- END NAV -->
    <section class="hero is-info is-medium is-bold">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">
            Alle Highlights der Fressmaus an einem Ort
          </h1>
        </div>
      </div>
    </section>
    <!-- END TITLE -->
    <div class="container">
      <!-- Pages -->
      <slot />
    </div>

    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          &copy; Fressmaus 2020
        </p>
      </div>
    </footer>
  </div> <!-- </div> LayoutDefault -->
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
