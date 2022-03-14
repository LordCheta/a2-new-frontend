<template>
  <NuxtLink to="/check-out" class="flex flex-row text-a2yellow">
    <solid-shopping-cart-icon class="w-8 h-8"/>
    <p class="text-white">{{cartSize()}}</p>
    <p class="ml-2 mt-1">Cart</p >

  </NuxtLink>
</template>

<style scoped>
.nuxt-link-active {
  color: #ffffff;
}
</style>

<script>
import { mapGetters } from "vuex"
export default {
  computed: {
    ...mapGetters(['cartSize']),
  }
}
</script>
