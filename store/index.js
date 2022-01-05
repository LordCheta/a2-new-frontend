export const state = () => ({
  customer: {
    cart:[]
  },
  merchant: {
    user: null,
    business: null,
    products: []
  }
});


export const getters = {
  customerCart: (state) => () => {
    return state.customer.cart
  },
  cartSize: (state) => () => {
    if(state.customer.cart.length == 0) return 0

    let size = 0;
    state.customer.cart.map(product => {
        size += Number(product.userRequestedQty)
    })

    return size
  },
  merchantUserDetails: (state) => () => {
    return state.merchant.user
  },
  merchantBusinessDetails: (state) => () => {
    return state.merchant.business
  },
  merchantProducts: (state) => () => {
    return state.merchant.products
  }
}

export const mutations = {
  addToCustomerCart(state, product) {
    state.customer.cart.push(product)
  },
  setMerchantUser(state, data) {
    state.merchant.user = data
  },
  setMerchantBusiness(state, data) {
    state.merchant.business = data
  },
  setMerchantProduct(state, data) {
    if (data.length == 0) return

    data.forEach(product => {
      state.merchant.products.push = product
    });

  }
}

export const actions = {

}
