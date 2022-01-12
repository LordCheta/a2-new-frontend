<template>
  <aside class="w-60 min-h-screen shadow-sm bg-white">
    <nav>
      <ul class=" p-8 flex flex-col gap-y-16">
        <li>
          <NuxtLink to="/merchant/dashboard" class="flex flex-row text-a2blue">
            <solid-chart-bar-icon class="w-6 h-6 text-a2yellow"/>
            <p class="ml-4 mt-1 text-sm tracking-widest">Insights</p >
        </NuxtLink>
        </li>

         <li>
          <NuxtLink to="/merchant/products" class="flex flex-row text-a2blue">
            <solid-shopping-bag-icon class="w-6 h-6 text-a2yellow"/>
            <p class="ml-4 mt-1 text-sm tracking-widest">Products</p >
        </NuxtLink>
        </li>

        <li>
          <NuxtLink to="/merchant/sales" class="flex flex-row text-a2blue">
            <solid-cash-icon class="w-6 h-6 text-a2yellow"/>
            <p class="ml-4 mt-1 text-sm tracking-widest">Sales</p >
        </NuxtLink>
        </li>

        <li>
          <NuxtLink to="/merchant/payout" class="flex flex-row text-a2blue">
            <solid-briefcase-icon class="w-6 h-6 text-a2yellow"/>
            <p class="ml-4 mt-1 text-sm tracking-widest">Payout</p >
        </NuxtLink>
        </li>

        <li>
          <NuxtLink to="/merchant/account" class="flex flex-row text-a2blue">
            <solid-users-icon class="w-6 h-6 text-a2yellow"/>
            <p class="ml-4 mt-1 text-sm tracking-widest">Account</p >
        </NuxtLink>
        </li>

        <li>
          <NuxtLink to="/merchant/help" class="flex flex-row text-a2blue">
            <solid-information-circle-icon class="w-6 h-6 text-a2yellow"/>
            <p class="ml-4 mt-1 text-sm tracking-widest">Help Center</p >
        </NuxtLink>
        </li>

        <li>
          <button @click="logout()" class="flex flex-row text-a2blue">
            <solid-logout-icon class="w-6 h-6 text-a2yellow"/>
            <p class="ml-4 mt-1 text-sm tracking-widest">Logout</p >
        </button>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script>
import { mapMutations } from "vuex"
import { setMerchantLocalStorageData, getMerchantLocalStorageData } from "~/helpers/storage"
export default {
  data() {
    return {

    }
  },
  methods: {
    ...mapMutations(['setMerchantUser', 'setMerchantBusiness', 'setMerchantProduct']),
    logout() {
      setMerchantLocalStorageData(null)
      this.setMerchantUser(null)
        this.setMerchantProduct(null)
        this.setMerchantBusiness(null)
      this.$router.push("/merchant/login")
    }
  },
}
</script>

<style scoped>
.nuxt-link-active {
  color: #ffae00;
}
</style>
