<template>
  <div class="container" style="min-width: 1465px; width: 1465px">
    <div style="max-width: 1465px; width: 1465px">
      <!-- Top Bar -->
      <div
        class="z-20 fixed bg-brand-yellow w-full"
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
      <div class="fixed bg-brand-green h-full" style="margin-top: 265px">
        <!-- Sidebar Bar -->
        <div
          id="sidebar"
          class="z-10 fixed bg-brand-yellow h-full pt-1"
          style="width: 265px"
        >
          <div class="mx-auto px-2">
            <ul>
              <li>HOME</li>
            </ul>
          </div>
        </div>
        <!--Main Content-->
        <div
          id="content"
          class="z-0 h-screen pt-1"
          style="padding-left: 265px; width: 1200px"
        >
          <div class="bg-brand-green px-6">
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
@import url('https://fonts.googleapis.com/css2?family=Unica+One&display=swap');
#sidebar {
  font-family: 'Unica One', Arial, Helvetica, sans-serif;
  font-weight: 400;
  font-size: 18px;
  letter-spacing: 2px;
  font-style: normal;
}
#content {
  font-family: DIN, Arial, Helvetica, sans-serif;
  font-weight: 400;
  letter-spacing: 0px;
  font-style: normal;
}

h4 {
  font-family: 'Unica One', Arial, Helvetica, sans-serif;
  font-weight: 400;
  letter-spacing: 0px;
  font-style: normal;
  font-weight: bold;
}

body {
  margin: 0;
  padding: 0;
  line-height: 1.5;
}
</style>
