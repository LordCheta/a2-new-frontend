<template>
  <div class="h-screen">
    <section class="flex flex-row">
      <img src="~/assets/images/contact.svg" alt="" srcset="">

      <div class="p-20">
        <h1 class="text-5xl font-black text-a2blue">Get in touch</h1>
        <p class="text-sm text-a2yellow font-md">We'd love to hear from you</p>

        <section class="mt-20 flex flex-col gap-y-5">
          <div class="flex flex-row gap-x-5">
            <solid-mail-icon class="w-6 h-6 text-a2blue"/>
            <p class="text-gray-500">contact@a2mall.shop</p>
          </div>
          <div class="flex flex-row gap-x-5">
           <solid-phone-icon class="w-6 h-6 text-a2blue"/>
            <p class="text-gray-500" >+234 814 006 6908</p>
          </div>
          <div class="flex flex-row gap-x-5">
            <img src="~/assets/icons/facebook.svg" class="w-6 h-6"/>
            <a href="https://web.facebook.com/A2Mall" class="text-gray-500">@A2Mall</a>
          </div>
          <div class="flex flex-row gap-x-5">
            <img src="~/assets/icons/twitter.svg" class="w-6 h-6"/>
            <a href="https://twitter.com/a2_mall" class="text-gray-500">@a2_mall</a>
          </div>
          <div class="flex flex-row gap-x-5">
            <img src="~/assets/icons/instagram.svg" class="w-6 h-6"/>
            <a class="text-gray-500" href="https://www.instagram.com/a2onlinemall">@a2onlinemall</a>
          </div>
          <div class="flex flex-row gap-x-5">
            <img src="~/assets/icons/whatsapp.svg" class="w-6 h-6"/>
            <a href="https://wa.me/qr/7T6KG2Z4LSLMM1" class="text-gray-500">wa.a2mall</a>
          </div>
        </section>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  layout: 'alternateDefault'
}
</script>
