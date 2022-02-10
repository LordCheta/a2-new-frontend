<template>
  <div>
    <header class="p-10">
      <h1 class="text-3xl font-light text-a2blue">Sales History</h1>
    </header> <hr>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
export default {
  layout: "merchant",
  middleware: 'merchantAuth',
   mounted() {
    let getDets = this.merchantUserDetails()
    this.$axios.setToken(getDets().token, 'Bearer')
   },
   methods: {
    ...mapGetters(['merchantBusinessDetails', 'merchantUserDetails']),
   }
}
</script>
