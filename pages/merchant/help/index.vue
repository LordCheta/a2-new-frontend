<template></template>

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
    let getDets = this.merchantUserDetails()
    this.$axios.setToken(getDets().token, 'Bearer')
  },
}
</script>
