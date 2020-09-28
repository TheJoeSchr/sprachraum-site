<template>
  <div class="container" style="min-width: 1465px; width: 1465px">
    <div style="max-width: 1465px; width: 1465px">
      <!-- Top Bar -->
      <div
        class="fixed bg-brand-yellow w-full"
        style="height: 265px; width: 1465px"
      >
        <div class="absolute top-0 left-0 bg-white">
          <g-image alt="Logo" src="~/assets/LogoOriginal.jpg" width="265" />
        </div>
        <div class="absolute top-0 bg-white" style="left: 265px">
          <g-image
            alt="Banner"
            src="~/assets/BannerOriginal.jpg"
            width="1200"
            style="height: 265px; width: 1200px"
          />
        </div>
      </div>
      <div class="flex md:flex-row-reverse flex-wrap">
        <!--Main Content-->
        <div class="w-full h-full bg-brand-green">
          <div class="container bg-brand-green pt-16 px-6">
            <slot />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif;
  margin: 0;
  padding: 0;
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

.nav__link {
  margin-left: 20px;
}
</style>
