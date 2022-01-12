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
                <th class="border-r border-a2blue font-extralight">Id</th>
                <th class="border-r border-a2blue  font-extralight">Title</th>
                <th class="border-r  border-a2blue font-extralight">Description</th>
                <th class="border-r border-a2blue  font-extralight">Price</th>
                <th class="border-r border-a2blue  font-extralight">Category</th>
                <th class="border-r border-a2blue  font-extralight">Status</th>
                <th class="border-r border-a2blue  font-extralight">Created At</th>
                <th class="font-extralight">Actions</th>
              </tr>
            </thead>

            <tbody>
              <!-- <tr class="text-a2blue font-light">
                <td class="p-4 border-b border-r">1</td>
                <td class="p-4 border-b border-r">Beach Shirt</td>
                <td class="p-4 border-b border-r">Very fine beach shirt</td>
                <td class="p-4 border-b border-r">₦1300</td>
                <td class="p-4 border-b border-r">Beach Wear</td>
                <td class="p-4 border-b border-r">Published</td>
                <td class="p-4 border-b border-r">Thursday, 9th December. 9pm</td>
                <td class="p-4 border-b text-xs"> <span class="bg-green-900 text-white p-1 rounded-full">edit</span> <span class="bg-red-900 text-white p-1 rounded-full">delete</span></td>
              </tr>

              <tr class="text-a2blue font-light">
                <td class="p-4 border-b border-r">2</td>
                <td class="p-4 border-b border-r">Beach Shirt</td>
                <td class="p-4 border-b border-r">Very fine beach shirt</td>
                <td class="p-4 border-b border-r">₦1300</td>
                <td class="p-4 border-b border-r">Beach Wear</td>
                <td class="p-4 border-b border-r">Published</td>
                <td class="p-4 border-b border-r">Thursday, 9th December. 9pm</td>
                <td class="p-4 border-b"><span class="bg-green-900 text-white p-1 rounded-full">edit</span> <span class="bg-red-900 text-white p-1 rounded-full">delete</span></td>
              </tr> -->

              <tr class="text-a2blue font-light" v-for="product in merchantProducts()" :key="index">
                <td class="p-4 border-b border-r">{{product.id}}</td>
                <td class="p-4 border-b border-r">{{product.title}}</td>
                <td class="p-4 border-b border-r">{{product.description}}</td>
                <td class="p-4 border-b border-r">₦{{product.price}}</td>
                <td class="p-4 border-b border-r">{{product.category}}</td>
                <td class="p-4 border-b border-r">{{product.status}}</td>
                <td class="p-4 border-b border-r">{{product.created_at}}</td>
                <td class="p-4 border-b"><span class="bg-green-900 text-white p-1 rounded-full">edit</span> <span class="bg-red-900 text-white p-1 rounded-full">delete</span></td>
              </tr>
            </tbody>
        </table>
      </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex"

export default {
  layout: "merchant",
  middleware: 'merchantAuth',
  data() {
    return {
      products: []
    }
  },
  computed: {
    ...mapGetters(['merchantProducts']),
    
  }
}
</script>
