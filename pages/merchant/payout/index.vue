<template>
    <div>
      <header class="p-10">
        <h1 class="text-3xl font-light text-a2blue">Finances Overview</h1>
      </header> <hr>
    </div>
  </template>

<script>
import { mapMutations, mapGetters } from "vuex"

export default {
  layout: "merchant",
  middleware: 'merchantAuth',
   methods: {
    ...mapMutations(['setMerchantUser', 'setMerchantBusiness', 'setMerchantProduct']),
    ...mapGetters(['merchantUserDetails']),
  },
  mounted() {
    this.$axios.setToken(this.merchantUserDetails.token, 'Bearer')
  }
}
</script>
