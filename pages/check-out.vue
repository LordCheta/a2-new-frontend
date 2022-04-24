<template>
  <div class="bg-gray-100">
    <HeaderBanner/>
    <Header/>
    <main class="flex flex-col w-screen min-h-screen p-4">
      <div class="w-full flex flex-row justify-center p-4">
        <solid-shopping-cart-icon class="w-10 lg:w-20 h-10 lg:h-20"/>
        <p class="ml-2 mt-1 text-xl lg:text-6xl font-thin">CHECKOUT</p>
      </div>

      <table class="table-auto">
        <thead>
          <tr class="bg-a2blue h-14 text-a2yellow">
            <th class="font-extralight ">Product</th>
            <th class="font-extralight text-xs lg:text-xl">Price</th>
            <th class="font-extralight text-xs lg:text-xl">Quantity</th>
            <th class="font-extralight text-xs lg:text-xl">Subtotal</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in customerCart()" :key="index" class="p-2 text-xs lg:text-xl text-a2blue font-normal border-gray-300">
            <td class="p-4 border-b border-r">{{product.productName}}</td>
            <td class="p-4 border-b border-r">₦{{amountWithComma(product.productPrice)}}</td>
            <td class="p-4 border-b border-r">{{product.userRequestedQty}}</td>
            <td class="p-4 border-b border-r">₦{{amountWithComma((product.userRequestedQty * product.productPrice).toFixed(2))}}</td>
          </tr>
        </tbody>
      </table>

      <div class="p-6">
        <p class="font-medium underline text-a2blue">CART TOTALS</p>

        <p class="text-sm text-gray-400">Subtotal: ₦{{amountWithComma(calcCartSubtotal.toFixed(2))}}</p>
        <hr>
        <div class="flex flex-col">
          <p class="text-lg text-gray-400 underline mt-2">Delivery</p>
          <section class="flex flex-col gap-x-2 mt-2">
            <div class="flex flex-row gap-x-2 mt-2">
              <label class="text-gray-600">email</label> <input class="text-xs px-2 border border-a2blue rounded" type="email" v-model="customerEmail" placeholder="eg: doe@email.com" required>
            </div>
            <div class="flex flex-row gap-x-2 mt-2">
              <label class="text-gray-600" >mobile</label> <input class="text-xs px-2 border border-a2blue rounded" type="text" v-model="customerMobile" placeholder="eg: 081345689734" required>
            </div>
            <div class="flex flex-row gap-x-2 mt-2">
              <label class="text-gray-600" >address</label> <textarea class="text-xs px-2 border rounded border-a2blue" v-model="customerAddress" required></textarea>
            </div>
          </section>
          <div class="flex flex-row gap-x-2 mt-2">
            <input @change="togglePay()" type="radio" :value="feeA" v-model="deliveryFee" id=""> <label>Lekki / Eti-Osa / Ikeja / Magodo / Berger / Iyapa / Agege / Ikotun: <em>₦1,500</em></label>
          </div>

          <div class="flex flex-row gap-x-2">
            <input @change="togglePay()" type="radio" :value="feeB" v-model="deliveryFee" id=""> <label>Lagos Mainland / Lagos Island: <em>₦1,000</em></label>
          </div>

          <div class="flex flex-row gap-x-2">
            <input @change="togglePay()" type="radio" :value="feeC" v-model="deliveryFee"> <label>Ikorodu / Epe / Badagry / Ojo / Festac / Apapa / Abule-Egba/Mowe / Alagbado: <em>₦2,000</em></label>
          </div>

        </div>
        <hr>
        <p class="text-md mt-3 text-gray-600 font-bold">Total: ₦{{amountWithComma(total.toFixed(2))}}</p>
        <button v-if="showPay" @click="processPayment" class="mt-4 bg-a2blue text-xs text-a2yellow p-2 " type="submit">PROCEED TO PAYMENT</button>
      </div>

    </main >

    <Footer/>
  </div >
</template>

<script>
import {mapGetters, mapMutations} from "vuex";
import amountWithComma from "~/mixins/amountWithCommas";
  export default {
    mixins: [amountWithComma],
    data() {
      return {
        cartSubtotal: 0,
        deliveryFee: 0,
        total: 0,
        feeA: 1500,
        feeB: 1000,
        feeC: 2000,
        customerEmail: null,
        customerMobile: null,
        customerAddress: null,
        showPay: false
      }
    },
    computed: {
      ...mapGetters(['customerCart']),
      calcCartSubtotal() {
        let subtotal = 0
        for (const product of this.customerCart()) {
          subtotal = subtotal + +(product.userRequestedQty * product.productPrice).toFixed(2)
        }
        this.cartSubtotal = subtotal.toFixed(2)

        return subtotal
      }
    },
    methods: {
      ...mapMutations(['addToCustomerCart']),
      calcCartTotal() {
        return this.total = +this.cartSubtotal + +this.deliveryFee
      },
      togglePay() {
        let validated = this.validate();

        if(!validated) return;
        
        this.calcCartTotal();
        this.showPay = true;
      },
      validate() {
        let customerEmail = this.customerEmail;
        let customerMobile = this.customerMobile;
        let customerAddress = this.customerAddress;

        if (!customerEmail || !customerMobile || !customerAddress) {
          this.$toast.error("Please fill delivery details appropraitely").goAway(3000)
          return false
        }

        return true;
      },
      processPayment() {
        console.log("paying");
        try {
          this.$launchFlutterwave({
          tx_ref: `a2mall_${Date.now()}`,
          amount: this.calcCartTotal(),
          currency: 'NGN',
          payment_options: 'card,mobilemoney,ussd',
          customer: {
            email: this.customerEmail,
            phonenumber: this.customerMobile,
            // name: 'yemi desola'
          },
          callback: function(data) {
            // specified callback function
            console.log(data)
          },
          customizations: {
            title: 'A2Mall',
            description: 'Payment for items in cart',
            logo: 'https://www.a2mall.shop/_nuxt/img/a2logonew.4368b28.png'
          }
      })
        } catch (error) {
          console.log(error);
        }
      }
    }
  }
</script>
