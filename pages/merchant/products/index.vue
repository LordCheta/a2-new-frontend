<template>
  <div>
    <div class="h-24 p-10 flex flex-row">
      <h1 class="text-a2blue text-2xl font-semibold w-1/2">Products</h1>

      <div class="w-1/2 flex justify-end items-center">
        <nuxt-link class="px-6 py-2 bg-a2blue text-a2yellow w-42 rounded-3xl" to="/merchant/products/new-product">+ Add New Product</nuxt-link>
      </div>
    </div> <hr>

        <div class="px-10 mt-10">

          <table class="w-full bg-white shadow">
            <thead>
              <tr class="text-md border bg-gray-200">
                <th class="border-r border-a2blue  font-extralight">Id</th>
                <th class="border-r border-a2blue  font-extralight">Title</th>
                <th class="border-r  border-a2blue font-extralight">Description</th>
                <th class="border-r border-a2blue  font-extralight">Price</th>
                <!-- <th class="border-r border-a2blue  font-extralight">Category</th> -->
                <th class="border-r border-a2blue  font-extralight">Status</th>
                <th class="border-r border-a2blue  font-extralight">Created At</th>
                <th class="font-extralight">Actions</th>
              </tr>
            </thead>

            <tbody v-for="(product, index) in products" :key="index">

                <merchantProductList
                :index="index"
                :id="product.id"
                :title="product.title"
                :description="product.description"
                :price="product.price"
                :status="product.status"
                :created_at="product.created_at"
                :slug="product.slug"
                />

            </tbody>
        </table>
      </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
import Merchant from "../index.vue"

export default {
    layout: "merchant",
    middleware: "merchantAuth",
    data() {
        return {
            products: null
        };
    },
    methods: {
        ...mapGetters(["merchantProducts", "merchantUserDetails"]),
    },
    mounted() {
        let getDets = this.merchantUserDetails();
        this.$axios.setToken(getDets().token, "Bearer");
        const products = this.merchantProducts();
        this.products = products();
    },
    components: { Merchant }
}
</script>
