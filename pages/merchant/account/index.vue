<template>
  <div>
    <div class="h-24 p-10 flex flex-row">
      <h1 class="text-a2blue text-2xl font-light w-1/2">Merchant Account Profile</h1>

      <div class="w-1/2 flex justify-end items-center">
        <nuxt-link class="px-6 py-2 bg-green-400 text-white w-36 rounded-3xl flex justify-center" to="/merchant/products/new-product">save</nuxt-link>
      </div>
    </div> <hr>


      <section class="flex flex-col w-3/5 p-10 bg-white mt-10 ml-10 gap-y-20 shadow-sm">

        <div class="flex flex-row justify-center gap-x-10">
            <div class="flex flex-col">
              <label class="text-a2blue mb-4" for="title">Title</label>
              <input class="w-80 p-2 border" type="text" name="title" v-model="title" required>
            </div>

            <div class="flex flex-col">
              <label class="text-a2blue mb-4" for="title">Description</label>
              <input class="w-80 p-2 border" type="text" name="title" v-model="description" required>
            </div>
        </div>

        <div class="flex flex-row justify-center gap-x-10">
            <div class="flex flex-col">
              <label class="text-a2blue mb-4" for="title">Price</label>
              <input class="w-80 p-2 border" type="number" name="price" v-model="price" min="1" required>
            </div>

            <div class="flex flex-col">
              <label class="text-a2blue mb-4" for="title">Image</label>
              <input class="w-80 p-2" type="file" name="image" @change="image" required>
            </div>
        </div>

        <div class="flex flex-row justify-center gap-x-10">
            <div class="flex flex-col">
              <label class="text-a2blue mb-4" for="title">Category</label>
              <select v-model="category" class="w-80 p-2 border" name="status" required>
                <option>Supermarket</option>
                <option>Health & Beauty</option>
                <option>Home & Office</option>
                <option>Phones & Tablets</option>
                <option>Computing</option>
                <option>Electronics</option>
                <option>Fashion</option>
                <option>Baby Products</option>
                <option>Gaming</option>
                <option>Sports Goods</option>
                <option>Automobile</option>
              </select>
            </div>

            <div class="flex flex-col">
              <label class="text-a2blue mb-4" for="title">Status</label>
              <select v-model="pubStatus" class="w-80 p-2 border" name="status" id="" required>
                <option>Published</option>
                <option>Draft</option>
              </select>
            </div>
        </div>

      </section>
  </div>
</template>

<script>
export default {
  layout: "merchant",

  data() {
    return {
      pubStatus: null,
      category: null,
      image: null,
      price: null,
      description: null,
      title: null
    }
  },
}
</script>
