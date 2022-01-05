import { mapMutations } from "vuex"

export default {
  methods: {
    ...mapMutations(['setMerchantUser', 'setMerchantBusiness', 'setMerchantProduct']),
    setMerchantLocalStorageData(merchantData) {
      localStorage.setItem("A2MALLMERCHANT", merchantData)
    },
    getMerchantLocalStorageData() {
      return localStorage.getItem("A2MALLMERCHANT")
    },
    async loadMerchantProfile(data) {

    }
  },
}
