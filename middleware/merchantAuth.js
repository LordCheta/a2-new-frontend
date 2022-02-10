import axios from "axios"
import { setMerchantLocalStorageData, getMerchantLocalStorageData } from "~/helpers/storage"

export default async function ({ store, redirect }) {
  const localStorageData = getMerchantLocalStorageData()
  const storeStorageData = store.getters['merchantUserDetails']

  if (!storeStorageData() && !localStorageData) {
    redirect('login')
  }

  if (!storeStorageData() && localStorageData) {
    try {
      const merchant = await axios.get(`${process.env.baseUrl}/merchants/${localStorageData.merchantId}`)
      merchant.data.user.token = localStorageData.token
      store.commit('setMerchantUser', merchant.data.user)
      store.commit('setMerchantProduct', merchant.data.products)
      store.commit('setMerchantBusiness', {
        userId: merchant.data.user.id,
        merchantId: merchant.data.id,
        address: merchant.data.address,
        businessName: merchant.data.businessName,
        accountNumber: merchant.data.accountNumber,
        accountName: merchant.data.accountName,
        bankName: merchant.data.bankName
      })

    } catch (error) {
      console.log(error);
      redirect('login')
    }
  }
}
