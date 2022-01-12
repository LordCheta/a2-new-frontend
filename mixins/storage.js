import { mapMutations, mapGetters } from "vuex"

export default {
  methods: {
    ...mapMutations(['setMerchantUser', 'setMerchantBusiness', 'setMerchantProduct']),
    async reloadMerchantProfile(merchantID) {
      try {
        console.log("merchant id in mixin", merchantID);
        const merchant = await this.$axios.$get(`/merchants/${merchantID}`)
        // console.log(merchant);
        this.setMerchantUser(merchant.user)
        this.setMerchantProduct(merchant.products)
        this.setMerchantBusiness({
          userId: merchant.user.id,
          merchantId: merchant.id,
          address: merchant.address,
          businessName: merchant.businessName,
          accountNumber: merchant.accountNumber,
          accountName: merchant.accountName,
          bankName: merchant.bankName
        })
      } catch (error) {
        console.log(error);
        this.$toast.error(error).goAway(3000)
      }
    }
  },
}
