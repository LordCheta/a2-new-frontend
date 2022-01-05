<template>
  <header class="p-3 w-screen shadow flex flex-row bg-a2blue">
    <div class="flex flex-col w-1/2 gap-y-1">
      <NuxtLink to="/merchant/dashboard">
        <img src="~/assets/images/a2logo-white-black.png" class="w-14 ml-3"/>
      </NuxtLink>
      <p class="text-xs text-white"><span class="text-a2yellow font-black">_</span>MERCHANT DASHBOARD<span class="text-a2yellow font-black">_</span></p>
    </div>

    <div class="flex w-1/2 justify-end p-3 gap-x-2">
      <h4 class="text-white font-bold tracking-wider">{{businessName}}</h4>
      <solid-user-circle-icon class="w-6 h-6 flex text-a2yellow"/>
    </div>
  </header>
</template>

<script>
import { mapGetters } from "vuex"
export default {
  computed: {
    ...mapGetters(['merchantBusinessDetails'])
  },
  data() {
    return {
      businessName: null
    }
  },
  mounted() {
      this.businessName = this.merchantBusinessDetails().businessName
  },
}
</script>
