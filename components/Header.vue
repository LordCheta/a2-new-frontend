<template>
  <header>

    <section :class="{hidden: hidden}"  class="lg:hidden w-screen flex flex-row justify-between bg-a2blue p-1 lg:h-24">
       <NuxtLink to="/" class="font-mont text-white text-sm ">
        <img src="~/assets/images/a2logonew-white.png" class="w-36 h-18"/>
      </NuxtLink>

      <button @click="toggleMobileMenu()" class="flex items-center px-3 py-2 rounded text-a2yellow border-teal-400 hover:text-white hover:border-white">
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      </button>
    </section>

    <section :class="{hidden: !hidden}" class="w-screen flex flex-col lg:flex-row justify-between bg-a2blue p-1 lg:h-24 lg:flex">
      <div class="flex justify-between">
        <NuxtLink to="/" class="font-mont text-white text-sm ">
          <img src="~/assets/images/a2logonew-white.png" class="w-36 h-18"/>
        </NuxtLink>

        <button @click="toggleMobileMenu()" class="flex items-center px-3 py-2 rounded text-a2yellow border-teal-400 hover:text-white hover:border-white lg:hidden">
          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>

      <div class="flex flex-col justify-center items-center lg:flex-row">
        <HeaderSearch class="m-4"/>

        <Account class="m-4"/>

        <Help class="m-4"/>

        <Cart class="m-4"/>
      </div>



    </section>
  </header >
</template>

<script>
export default {
  data() {
    return {
      hidden: false
    }
  },
  methods: {
    toggleMobileMenu() {
       this.hidden = !this.hidden
    }
  },
}
</script>
