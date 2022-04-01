<template>
  <aside class="bg-white rounded p-2">
    <button @click="toggleMobileMenu()" class="text-a2blue">
      <solid-menu-alt1-icon class="w-6 h-6"/>
    </button>
    <nav :class="{hidden: hidden, wOpen: wOpen}" class="z-50">
      <ul class="flex flex-col">
        <li class="mt-4">
          <NuxtLink to="/" class="flex flex-row text-a2blue">
            <solid-shopping-bag-icon class="w-6 h-6"/>
            <p class="ml-4 mt-1 text-sm  tracking-widest">Supermarket</p >
        </NuxtLink>
        </li >
        <li class="mt-10">
          <NuxtLink to="/health-Beauty" class="flex flex-row text-a2blue">
            <solid-heart-icon class="w-6 h-6"/>
            <p class="ml-4 mt-1 text-sm tracking-widest ">Health & Beauty</p >
        </NuxtLink>
        </li >
        <li class="mt-10">
          <NuxtLink to="/home-office" class="flex flex-row text-a2blue">
            <solid-office-building-icon class="w-6 h-6"/>
            <p class="ml-4 mt-1 text-sm tracking-widest ">Home & Office</p >
        </NuxtLink>
        </li>
        <li class="mt-10">
          <NuxtLink to="/phones-tablets" class="flex flex-row text-a2blue">
            <solid-device-tablet-icon class="w-6 h-6"/>
            <p class="ml-4 mt-1 text-sm tracking-widest ">Phones & Tablets</p >
        </NuxtLink>
        </li >
        <li class="mt-10">
          <NuxtLink to="/computing" class="flex flex-row text-a2blue">
            <solid-desktop-computer-icon class="w-6 h-6"/>
            <p class="ml-4 mt-1 text-sm tracking-widest ">Computing</p >
        </NuxtLink>
        </li>
        <li class="mt-10">
          <NuxtLink to="/electronics" class="flex flex-row text-a2blue">
            <solid-chip-icon class="w-6 h-6"/>
            <p class="ml-4 mt-1 text-sm tracking-widest ">Electronics</p >
        </NuxtLink>
        </li>
        <li class="mt-10">
          <NuxtLink to="/fashion" class="flex flex-row text-a2blue">
            <solid-sparkles-icon class="w-6 h-6"/>
            <p class="ml-4 mt-1 text-sm tracking-widest ">Fashion</p >
        </NuxtLink>
        </li >
        <li class="mt-10">
          <NuxtLink to="/baby-products" class="flex flex-row text-a2blue">
            <solid-tag-icon class="w-6 h-6"/>
            <p class="ml-4 mt-1 text-sm tracking-widest ">Baby Products</p >
        </NuxtLink>
        </li >
        <li class="mt-10">
          <NuxtLink to="/gaming" class="flex flex-row text-a2blue">
            <solid-collection-icon class="w-6 h-6"/>
            <p class="ml-4 mt-1 text-sm tracking-widest ">Gaming</p >
        </NuxtLink>
        </li >
        <li class="mt-10">
          <NuxtLink to="/sports-goods" class="flex flex-row text-a2blue">
            <solid-cube-icon class="w-6 h-6"/>
            <p class="ml-4 mt-1 text-sm tracking-widest ">Sports Goods</p >
        </NuxtLink>
        </li>
        <li class="mt-10">
          <NuxtLink to="/automobile" class="flex flex-row text-a2blue">
            <solid-view-grid-add-icon class="w-6 h-6"/>
            <p class="ml-4 mt-1 text-sm tracking-widest ">Automobile</p >
        </NuxtLink>
        </li>
      </ul>
    </nav>
  </aside >
</template>

<script>
export default {
  data() {
    return {
      hidden: true,
      wOpen: true
    }
  },
  methods: {
    toggleMobileMenu() {
       this.hidden = !this.hidden
       this.wOpen = !this.wOpen
    }
  },
}
</script>

<style scoped>
.nuxt-link-active {
  color: #ffae00;
}
wOpen {
  width: 0;
  height: auto;
}
</style>
