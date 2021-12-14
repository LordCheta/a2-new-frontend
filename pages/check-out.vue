<template>
  <div class="bg-gray-100">
    <HeaderBanner/>
    <Header/>
    <main class="flex flex-col w-screen h-screen p-4">
      <div class="w-full flex flex-row justify-center p-4">
        <solid-shopping-cart-icon class="w-20 h-20"/>
        <p class="ml-2 mt-1 text-6xl font-thin">CHECKOUT</p>
      </div>

      <table class="table-auto">
        <thead>
          <tr class="bg-a2blue h-14 text-a2yellow">
            <th class="font-extralight ">Product</th>
            <th class="font-extralight text-xl">Price</th>
            <th class="font-extralight text-xl">Quantity</th>
            <th class="font-extralight text-xl">Subtotal</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in customerCart()" :key="index" class="p-2 text-xl text-a2blue font-normal border-gray-300">
            <td class="p-4 border-b border-r">{{product.productName}}</td>
            <td class="p-4 border-b border-r">₦{{product.productPrice}}</td>
            <td class="p-4 border-b border-r">{{product.userRequestedQty}}</td>
            <td class="p-4 border-b border-r">₦{{(product.userRequestedQty * product.productPrice).toFixed(2)}}</td>
          </tr>
        </tbody>
      </table>

      <div class="p-6">
        <p class="font-medium underline text-a2blue">CART TOTALS</p>

        <p class="text-sm text-gray-400">Subtotal: ₦{{calcCartSubtotal}}</p>
        <hr>
        <div class="flex flex-col">
          <p class="text-sm text-gray-400 underline mt-2">Delivery</p>
          <div class="flex flex-row gap-x-2 mt-2">
            <input @change="calcCartTotal()" type="radio" :value="feeA" v-model="deliveryFee" id=""> <label>Lekki / Eti-Osa / Ikeja / Magodo / Berger / Iyapa / Agege / Ikotun: <em>₦1,500</em></label>
          </div>

          <div class="flex flex-row gap-x-2">
            <input @change="calcCartTotal()" type="radio" :value="feeB" v-model="deliveryFee" id=""> <label>Lagos Mainland / Lagos Island: <em>₦1,000</em></label>
          </div>

          <div class="flex flex-row gap-x-2">
            <input @change="calcCartTotal()" type="radio" :value="feeC" v-model="deliveryFee"> <label>Ikorodu / Epe / Badagry / Ojo / Festac / Apapa / Abule-Egba/Mowe / Alagbado: <em>₦2,000</em></label>
          </div>

        </div>
        <hr>
        <p class="text-md mt-3 text-gray-600 font-bold">Total: ₦{{total}}</p>
        <button class="mt-4 bg-a2blue text-xs text-a2yellow p-2 " type="submit">PROCEED TO PAYMENT</button>
      </div>

    </main >

    <Footer/>
  </div >
</template>

<script>
import {mapGetters} from "vuex"
  export default {
    data() {
      return {
        cartSubtotal: 0,
        deliveryFee: 0,
        total: 0,
        feeA: 1500,
        feeB: 1000,
        feeC: 2000
      }
    },
    computed: {
      ...mapGetters(['customerCart']),
      calcCartSubtotal() {
        let subtotal = 0
        for (const product of this.customerCart()) {
          subtotal = subtotal + +(product.userRequestedQty * product.productPrice).toFixed(2)
        }
        return this.cartSubtotal = subtotal.toFixed(2)
      }
    },
    methods: {
      calcCartTotal() {
        return this.total = +this.cartSubtotal + +this.deliveryFee
      }
    },
  }
</script>
