import { mapMutations } from "vuex"

export default {
  ...mapMutations(['addToCustomerCart']),
  computed: {
    addToCart(product) {
      return addToCustomerCart(product);
    }
  },
  data() {
    return {

    }
  },
}
