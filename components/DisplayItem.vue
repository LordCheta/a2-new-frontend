<template>
  <div class="w-64 h-84 rounded-lg overflow-hidden shadow-md bg-white">
    <img class="w-full h-3/5 border-b border-a2yellow" :src="iPicture" alt="picture of the product"/>

    <section class="bg-a2yellow h-full">
      <div class="flex flex-row justify-between mt-2">
      <NuxtLink :to="`/products/${iId}`"
        class="font-extralight text-2xl ml-4 text-gray-900  truncate"
        :productDetail="{
          picture: iPicture,
          name: iName,
          rating: iRating,
          id: iId,
          price: iPrice,
          description: iDescription
        }" :image="iPicture" :iName="iName">
          {{iName}}
      </NuxtLink>
      <div class="flex flex-row gap-1 p-2 ml-16 mt-1">
        <solid-star-icon class="w-6  h-6 text-a2yellow"/>
        <p class="text-a2blue text-sm">{{iRating}}</p>
      </div>
    </div>
    <p class="text-a2blue font-meduim text-2xl ml-4">₦{{iPrice}}</p>

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
              })" type="submit" class="p-1 w-20 border-2 text-xs ml-4 mt-3 bg-a2blue text-white rounded-2xl font-light">Add &nbsp; +</button>
    </section>
  </div>
</template>

<script>
import { mapMutations } from "vuex"

  export default {
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
    }
  }
</script>
