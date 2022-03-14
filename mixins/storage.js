import { mapMutations, mapGetters } from "vuex"

export default {
  methods: {
    ...mapMutations(['setMerchantUser', 'setMerchantBusiness', 'setMerchantProduct']),
    ...mapGetters(['merchantBusinessDetails']),
    async reloadMerchantProfile() {
      try {
        let merchantBusiness = this.merchantBusinessDetails();
        merchantBusiness = merchantBusiness()
        const merchant = await this.$axios.$get(`/merchants/${merchantBusiness.merchantId}`)

        // invalidate existing store data first
        this.setMerchantUser(null)
        this.setMerchantProduct(null)
        this.setMerchantBusiness(null)

        //  set new store date
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
