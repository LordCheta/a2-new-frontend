export const state = () => ({
  customer: {
    cart:[]
  },
  merchant: {
    user: {},
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
  }
}

export const actions = {

}
