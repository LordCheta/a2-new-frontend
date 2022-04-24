export const setMerchantLocalStorageData = (merchantData) => {
  localStorage.setItem("A2MALLMERCHANT", JSON.stringify(merchantData));
}

export const getMerchantLocalStorageData = () => {

  let data = localStorage.getItem("A2MALLMERCHANT")

  data = JSON.parse(data)

  return data
}

export const setCustomerCartData = (customerCartData) => {
  let data = JSON.parse(sessionStorage.getItem("A2MALLCUSTOMERCART"));

  if(!data) {
    let cartArray = [customerCartData];
    sessionStorage.setItem("A2MALLCUSTOMERCART", JSON.stringify(cartArray));

  } else {

    data.push(customerCartData)
    sessionStorage.setItem("A2MALLCUSTOMERCART", JSON.stringify(data));

  }
}

export const getCustomerCartData = () => {
  let data = sessionStorage.getItem("A2MALLCUSTOMERCART");

  data = JSON.parse(data)

  return data;
}
