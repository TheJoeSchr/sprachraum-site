<template lang="pug">
  section.partner
    .flex.flex-wrap.items-center.max-w-5xl.mx-auto.mb-6
      .my-6.px-8.w-full(class='md:w-1/2 ').align-top
        h3.text-xl.text-gray-800.leading-tight.font-heading(class='md:py-4 md:my-4 md:text-xl md:pb-0') Partner Tirolo
        a(href="https://www.wko.at/branchen/t/tourismus-freizeitwirtschaft/start.html" target="_blank")
          g-image(src='~/assets/images/WKO_Logo_tourismus_ti4.jpg' quality=100 width="300" height="200" fit="inside")
        a(href="https://www.tirol.wifi.at/" target="_blank")
          g-image.pt-6.mx-auto(src='~/assets/images/Wifi_LogoTirol.jpg' quality=100 height="100" fit="inside")

      .my-6.px-8(class='md:w-1/2 md:mb-0 ')
        h3.text-xl.text-gray-800.leading-tight.font-heading(class='md:py-4 md:my-4 md:text-xl md:pb-0') Partner Sardegna
        a(href="https://www.coiaccademia.com/" target="_blank")
          g-image.pt-2(src='~/assets/images/Accademia.png' quality=100 width="300" height="100" fit="inside")
        a(href="https://www.dialogando.eu/de/" target="_blank")
          g-image(src='~/assets/images/dialogando_logo_review.jpg' quality=100 width="300" height="150" fit="inside")
</template>

<script>
export default {
  name: 'PartnerLogos',
}
</script>
<style scoped>
.partner {
  @apply mb-8 shadow bg-white border rounded overflow-hidden;
}

@screen md {
  .partner {
    @apply mb-16;
  }
}
@screen lg {
  .partner {
    @apply py-0 px-8;
  }
}
</style>
