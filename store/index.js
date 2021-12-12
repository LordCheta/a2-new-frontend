export const state = () => ({
  customer: {
    cart:[]
  }
});


export const getters = {
  getCustomerCart: (state) => () => {
    return state.customer.cart
  },
  getCartSize: (state) => () => {
    if(state.customer.cart.length == 0) return 0

    let size = 0;
    state.customer.cart.map(product => {
        size += Number(product.userRequestedQty)
    })

    return size
  },
}

export const mutations = {
  addToCustomerCart(state, product) {
    state.customer.cart.push(product)
  }
}

export const actions = {

}
