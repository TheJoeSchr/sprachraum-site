<template>
  <div class="container" style="min-width: 1465px; width: 1465px">
    <div style="max-width: 1465px; width: 1465px">
      <!-- Top Bar -->
      <div
        class="z-20 fixed bg-brand-yellow w-full"
        style="height: 265px; width: 1465px"
      >
        <div class="absolute top-0 left-0 bg-white">
          <g-image alt="Logo" src="~/assets/LogoOriginalDe.png" width="265" />
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
      <div class="absolute bg-brand-green h-full" style="margin-top: 265px">
        <!-- Sidebar Bar -->
        <div
          id="sidebar"
          class="z-10 fixed bg-brand-yellow h-full pt-1"
          style="width: 265px"
        >
          <ul class="container mx-auto text-center pt-6">
            <li>
              <a class="text-black hover:text-white" href="#">DEUTSCH</a>
            </li>
            <li>
              <a class="text-black hover:text-white" href="#">ITALIENISCH</a>
            </li>
            <li>
              <a class="text-black hover:text-white" href="#">KURSPROGRAMM</a>
            </li>
            <li>
              <a class="text-black hover:text-white" href="#">TEAM</a>
            </li>
            <li>
              <a class="text-black hover:text-white" href="#"
                >EINSTUFUNGSTEST</a
              >
            </li>
            <li>
              <a class="text-black hover:text-white" href="#">FIRMENKURSE</a>
            </li>
            <li>
              <a class="text-black hover:text-white" href="#"
                >LEBEN & ARBEITEN</a
              >
            </li>
            <li>
              <a class="text-black hover:text-white" href="#"> WORK IT AUT </a>
            </li>
          </ul>
        </div>
        <!--Main Content-->
        <div
          id="content"
          class="z-0 h-full pt-1"
          style="padding-left: 265px; width: 1465px; overflow-y: auto"
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
  line-height: 3.5em;
}
#content {
  font-family: D-DIN, DIN, Arial, Helvetica, sans-serif;
  font-weight: 400;
  letter-spacing: 0px;
  font-style: normal;
}
/* html {
  overflow-y: scroll;
} */
.btn {
  @apply font-bold py-2 px-4  shadow;
}
.btn-primary {
  @apply bg-primary-600 text-black border border-brand-green;
}
.btn-primary:hover {
  @apply bg-transparent bg-primary-600 text-black border border-brand-yellow;
}
.btn-primary:active {
  @apply bg-transparent text-primary-500 border border-brand-yellow;
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
