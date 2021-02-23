<template lang="pug">
  footer(class="flex flex-wrap items-center pb-4 px-4 mt-16 border-t")
    .container.w-full.bottom-0.py-4.bg-white(style="max-width:100vw")
      .container.mx-auto.w-full.text-center
        div(class="w-full lg:w-1/5 text-center lg:text-left")
            a(class="text-xl text-primary-500 font-semibold" href="#")
                g-image(src="~/assets/images/LogoAlphaFull.png" alt="SPRACHRAUM.workitaut.at" width="100")
        div(class="w-full lg:w-4/5 mt-4 lg:mt-0 text-center")
          slot
        div(class="w-full lg:w-1/5 text-center lg:text-left")
            a(class="text-xl text-primary-500 font-semibold" href="https://www.dialogando.eu/")
                g-image(src="~/assets/images/dialogando_logo_review.jpg" alt="dialogando.eu" width="100")
</template>

<script>
export default {
  name: 'Footer',
}
</script>
