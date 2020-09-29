<template lang="pug">
.container(style='min-width: 1465px; width: 1465px')
  div(style='max-width: 1465px; width: 1465px')
    //  Top Bar
    .z-20.fixed.bg-brand-yellow.w-full(style='height: 265px; width: 1465px')
      .absolute.top-0.left-0.bg-white
        g-image(alt='Logo' src='~/assets/LogoOriginal.jpg' width='265').


      .absolute.top-0.bg-white(style='left: 265px')
        g-image(alt='Banner' src='~/assets/BannerOriginal.jpg' width='1200' style='height: 265px; width: 1200px').


    .absolute.bg-brand-green.h-full(style='margin-top: 265px')
      //  Sidebar Bar
      #sidebar.z-10.fixed.bg-brand-yellow.h-full.pt-1(style='width: 265px')
        ul.container.mx-auto.text-center.pt-6
          li
            a.text-black(class="hover:text-white" href='#') DEUTSCH
          li
            a.text-black(class="hover:text-white" href='#') ITALIENISCH
          li
            a.text-black(class="hover:text-white" href='#') KURSPROGRAMM
          li
            a.text-black(class="hover:text-white" href='#') TEAM
          li
            a.text-black(class="hover:text-white" href='#') EINSTUFUNGSTEST
          li
            a.text-black(class="hover:text-white" href='#') FIRMENKURSE
          li
            a.text-black(class="hover:text-white" href='#') LEBEN & ARBEITEN
          li
            a.text-black(class="hover:text-white" href='#') WORK IT AUT
      // Main Content
      #content.z-0.h-full.pt-1(style='padding-left: 265px; width: 1465px; overflow-y: auto')
        .bg-brand-green.px-6
          slot.


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
.navigation-font {
  font-family: 'Unica One', Arial, Helvetica, sans-serif;
  font-weight: 400;
  font-size: 18px;
  letter-spacing: 2px;
  font-style: normal;
  line-height: 3.5em;
}
.content-font {
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
.btn-brand-yellow {
  @apply bg-brand-yellow text-black border border-brand-green;
}
.btn-brand-yellow:hover {
  @apply bg-transparent text-brand-yellow border border-brand-yellow;
}
.btn-brand-yellow:active {
  @apply bg-transparent text-yellow-300 border border-brand-yellow;
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
