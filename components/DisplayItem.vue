<template>
  <div class="w-32 lg:w-64 h-52 lg:h-96 rounded-lg overflow-hidden shadow-md bg-white">
    <img class="w-full h-3/5 border-b border-a2yellow" :src="iPicture" alt="picture of the product"/>

    <section class="bg-a2yellow h-full">
      <div class="flex flex-row justify-between">
      <NuxtLink :to="`/products/${iId}`"
        class=" font-light lg:font-extralight test-xs lg:text-2xl ml-3 text-gray-900  truncate"
        :productDetail="{
          picture: iPicture,
          name: iName,
          rating: iRating,
          id: iId,
          price: iPrice,
          description: iDescription
        }" :image="iPicture" :iName="iName" :title="iName">
          {{iName}}
      </NuxtLink>
      <div class="flex flex-row gap-1 p-2 lg:ml-16 lg:mt-1">
        <solid-star-icon class="w-4 lg:w-6 lg:h-6 h-4 text-a2blue"/>
        <p class="text-a2blue text-xs lg:text-sm">{{iRating}}</p>
      </div>
    </div>
    <p class="text-a2blue font-meduim text-xs lg:text-2xl ml-4">₦{{amountWithComma(iPrice)}}</p>

    <button @click="addToCustomerCart({
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
              })" type="submit" class="p-1 w-14 lg:w-20 border-2 text-xs lg:text-xs ml-3 lg:ml-4 mt-1 lg:mt-3 bg-a2blue text-white rounded-2xl font-light">Add &nbsp; +</button>
    </section>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import amountWithComma from "~/mixins/amountWithCommas";
import { setCustomerCartData, getCustomerCartData } from "~/helpers/storage";

  export default {
  mixins: [amountWithComma],
  props: {
    iPicture: {
      type: String,
      default: "https://images.unsplash.com/photo-1590012040529-c5e12f37b5d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
    },
    iName: String,
    iRating: String,
    iId: String,
    iPrice: String,
    iDescription: String
  },
  data () {
      return {
        image: this.iPicture,
        rating: this.iRating,
        productName: this.iName,
        productDescription: this.iDescription,
        productPrice: this.iPrice,
        color: "N/A",
        weight: "N/A",
        volume: "N/A",
        recyclable: "N/A",
        userRequestedQty: 1,
      }
    },
  methods: {
    ...mapMutations(['addToCustomerCart']),
    addToCustomerSessionCart(data) {

      // add to session storage
        setCustomerCartData(data);

      // get from local storage and add to store
      let cartData = getCustomerCartData();
      console.log(cartData);

      cartData.forEach(cartItem => {
          this.addToCustomerCart(cartItem);
        });
      }
    }
  }
</script>
