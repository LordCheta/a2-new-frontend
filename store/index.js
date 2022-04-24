import { setCustomerCartData, getCustomerCartData } from "~/helpers/storage";

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
    if(state.customer.cart.length === 0) {
      // get from local storage and add to store
      let cartData = getCustomerCartData();

      if(cartData) {
        return cartData
      }
    }
    return state.customer.cart
  },
  cartSize: (state) => () => {
    if(state.customer.cart.length == 0) {
      // get from local storage and add to store
      let cartData = getCustomerCartData();

      if(cartData) {
        return cartData.length
      }

      return 0;
    }

    let size = 0;
    let cartData = getCustomerCartData();
    cartData.map(product => {
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
    // add to session storage
        setCustomerCartData(product);
    // get from local storage and add to store
    let cartData = getCustomerCartData();

    state.customer.cart = [];

    cartData.forEach(cartItem => {
      state.customer.cart.push(cartItem);
    });

  },
  setMerchantUser(state, data) {
    state.merchant.user = data
  },
  setMerchantBusiness(state, data) {
    state.merchant.business = data
  },
  setMerchantProduct(state, data) {
    if (data == null) {
      state.merchant.products = []

      return
    }

    if (data.constructor === Array) {

      if (data.length == 0) return

      data.forEach(product => {
        state.merchant.products.push(product)
      });

      return;
    }

    state.merchant.products.push(data)

  },
  updateMerchantProduct(state, data) {
    let products = getters.merchantProducts();
    products = products();
    // console.log("store", products);
    products.find((o, i) => {
      if(o.id == data.id) {
        state.merchant.products.splice(i, 1, data);
        return;
      }
    })
  },

  removeMerchantProduct(state, data) {
    let products = getters.merchantProducts();
    products.find((o, i) => {
      if(o.id == data.id) {
        state.merchant.product.splice(i, 1);
        return;
      }
    })
  }
}

export const actions = {

}
