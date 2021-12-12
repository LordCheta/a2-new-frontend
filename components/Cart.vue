<template>
  <NuxtLink to="/check-out" class="flex flex-row text-a2blue">
    <solid-shopping-cart-icon class="w-8 h-8"/>
    <p class="text-a2yellow">{{getCartSize()}}</p>
    <p class="ml-2 mt-1">Cart</p >

  </NuxtLink>
</template>

<style scoped>
.nuxt-link-active {
  color: #ffae00;
}
</style>

<script>
import { mapGetters } from "vuex"
export default {
  computed: {
    ...mapGetters(['getCartSize']),
  }
}
</script>
