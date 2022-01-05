export const setMerchantLocalStorageData = (merchantData) => {
  localStorage.setItem("A2MALLMERCHANT", JSON.stringify(merchantData))
}

export const getMerchantLocalStorageData = () => {

  let data = localStorage.getItem("A2MALLMERCHANT")

  data = JSON.parse(data)

  return data
}
