<template>
  <div class="bg-gray-100">
    <HeaderBanner/>
    <Header/>

    <div v-if="$fetchState.pending">
        loading...
    </div>

    <div v-else-if="$fetchState.error">
          {{$fetchState}}
    </div>

    <main v-else class="flex flex-row w-screen h-screen p-4">
      <div class="mt-10 ml-5 w-1/3 h-auto flex justify-end">
        <img class="w-80 h-80"  :src="image"/>
      </div>


      <section class="mt-10 ml-5">
        <p class="text-a2blue text-4xl font-medium">{{productName}}</p>
        <p class="text-a2blue text-xs font-medium w-2/3 h-auto">{{productDescription}}</p>
        <p class="p-2 text-a2blue font-medium text-3xl">₦{{amountWithComma(productPrice)}}</p>
        <div class="p-2 flex flex-col gap-2 text-xl text-a2blue font-light">
          <p>Rating: <span class="text-gray-400 text-sm">{{rating}}</span></p>
          <p>Color: <span class="text-gray-400 text-sm">{{color}}</span></p>
          <p>Weight: <span class="text-gray-400 text-sm">{{weight}}</span></p>
          <p>Volume: <span class="text-gray-400 text-sm">{{volume}}</span></p>
          <p>Recyclable: <span class="text-gray-400 text-sm">{{recyclable}}</span></p>
        </div>

        <div class="flex flex-row gap-4">
          <div class="border bg-a2yellow p-2 flex flex-row gap-2 w-48">
          <input class="bg-white p-1" type="number" min="1" max="50" name="" v-model="userRequestedQty">
          <button
          class="text-a2blue"
          @click="addToCustomerCart({
              userRequestedQty,
              image,
              rating,
              productName,
              productDescription,
              productPrice,
              color,
              weight,
              volume,
              recyclable
              })"
          type="submit">ADD TO CART</button>
        </div>
        <NuxtLink to="/check-out" class="border bg-a2blue p-2 w-48 flex justify-center items-center text-white">CHECKOUT</NuxtLink>

        </div>

      </section>
    </main >

    <Footer/>
  </div >
</template>

<script>
import { mapMutations } from "vuex";
import amountWithComma from "~/mixins/amountWithCommas";
import { setCustomerCartData, getCustomerCartData } from "~/helpers/storage";


  export default {
    mixins: [amountWithComma],
    data() {
      return {
        image: "N/A",
        rating: "N/A",
        productName: "N/A",
        productDescription: "N/A",
        productPrice: "N/A",
        color: "N/A",
        weight: "N/A",
        volume: "N/A",
        recyclable: "N/A",
        userRequestedQty: 1,
      }
    },
    async fetch() {
      let product = await this.$axios.$get('/products/'+this.$route.params.id)
      this.product = product
        this.productName = product.title
        this.productPrice = product.price
        this.image = "http://localhost:1337"+product.image.url,
        this.productDescription = product.description
    },
    methods: {
      ...mapMutations(['addToCustomerCart']),
      addToCustomerSessionCart(data) {

      // add to session storage
        setCustomerCartData(data);

      // get from local storage and add to store
      let cartData = getCustomerCartData();

      cartData.forEach(cartItem => {
          this.addToCustomerCart(cartItem);
        });
      }
    }
  }
</script>
