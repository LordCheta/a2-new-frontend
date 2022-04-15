<template>
  <footer class="flex flex-col w-screen h-auto">
    <section class="flex flex-col p-2 justify-center items-center lg:justify-evenly lg:space-x-10 lg:flex-wrap lg:content-center bg-a2blue lg:h-36">
      <div>
        <img src="~/assets/images/a2logonew-white.png" class="w-32 h-18" alt="a2-logo">
        <p class="mt-2 text-sm font-poppins text-a2yellow">Great mall, Big rewards</p >
      </div>

      <div class="p-2">
        <h6 class="text-gray-400 text-sm">NEW TO A2?</h6>
        <p class="text-xs text-gray-400 mt-2">Get latest deals, best promotions etc, sent directly to your inbox!</p>
        <form class="flex flex-row justify-center border border-a2blue h-8 mt-2 lg:w-72 w-50">
          <solid-mail-icon class="p-1 bg-white"/>
          <input type="text" name="" id="" placeholder="Enter Email Address" class="lg:w-72 w-50 p-2 placeholder-gray-400 text-xs focus:outline-none">
          <button type="submit" class="bg-a2yellow w-16 flex flex-wrap justify-center content-center lg:w-16 text-a2blue text-xs p-2">subscribe</button>
        </form>
      </div >

      <div>
        <p class="text-2xl text-gray-400">Connect With Us</p >
        <div class="flex justify-evenly p-2">
          <img src="~/assets/icons/facebook.svg" class="w-6 h-6"/>
          <img src="~/assets/icons/twitter.svg" class="w-6 h-6"/>
          <img src="~/assets/icons/instagram.svg" class="w-6 h-6"/>
          <img src="~/assets/icons/whatsapp.svg" class="w-6 h-6"/>
        </div >
      </div>
    </section>

    <section class="flex justify-evenly flex-wrap content-center h-48 bg-gray-900">
      <div class="flex flex-col">
        <h3 class="text-a2yellow font-extrabold mb-2">About A2</h3>
        <NuxtLink to="/contact" class=" text-gray-400 text-sm">Contact Us</NuxtLink>
        <NuxtLink to="/about" class=" text-gray-400 text-sm">About Us</NuxtLink>
        <NuxtLink to="/" class=" text-gray-400 text-sm">Terms & Conditions</NuxtLink>
        <NuxtLink to="/" class=" text-gray-400 text-sm">Privacy Policy</NuxtLink>

      </div >

      <div class="flex flex-col">
        <h4 class="text-a2yellow font-extrabold mb-2">Buying on A2</h4 >
        <NuxtLink to="/" class=" text-gray-400 text-sm">Delivery</NuxtLink>
        <NuxtLink to="/" class=" text-gray-400 text-sm">FAQs</NuxtLink>
        <NuxtLink to="/" class=" text-gray-400 text-sm">A2 Return Policy</NuxtLink>
        <NuxtLink to="/contact" class=" text-gray-400 text-sm">Contact Us</NuxtLink>
      </div >

      <div class="flex flex-col">
        <h4 class="text-a2yellow font-extrabold mb-2">Payment</h4 >

      </div >

      <div class="flex flex-col">
        <h4 class="text-a2yellow font-extrabold mb-2">Make Money on A2</h4 >
        <NuxtLink to="/merchant" class=" text-gray-400 text-sm">Sell on A2</NuxtLink>
        <NuxtLink to="/ambassador" class=" text-gray-400 text-sm">Become an A2 ambsador</NuxtLink>
      </div >

    </section>

    <section class="bg-gray-900 border-t border-gray-600 flex justify-center">
      <p class="text-xs text-gray-500 p-4">Copyright &copy; 2021 A2. All rights reserved.</p >
    </section >

  </footer >
</template>
