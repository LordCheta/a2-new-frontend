<template>
  <section class="p-4 flex flex-col mt-8">
    <div class="flex flex-row justify-between gap-11">
      <div class="flex flex-row">
        <solid-tag-icon class="w-14 h-14 text-a2blue"/>
        <h1 class="text-a2blue text-5xl font-extralight tracking-wider">Top Selling Items</h1>
      </div>

      <nuxt-link to="/best-sellers" class="text-gray-700 font-light text-xl p-4 mr-44">View all &#8594;</nuxt-link>
    </div>

    <div class="flex flex-col">
      <div v-if="$fetchState.pending" class="flex flex-row justify-center">
        <svg class="animate-spin h-5 w-5 mr-3 border-b-2 border-r-2 rounded-full border-a2blue" viewBox="0 0 24 24">
            <!-- ... -->
        </svg>
      </div>

      <div class=" mt-8" v-else-if="$fetchState.error">
            <!-- {{$fetchState}} -->
          <div class="flex flex-row justify-center">
            <img class="fw-40 h-40" src="~/assets/images/empty.svg" alt=""><br>
          </div>
          <p class="flex flex-row justify-center text-red-900 text-md font-thin">Something went wrong, please refresh the page</p>
      </div>

      <div v-else class="flex flex-wrap justify-start content-center mt-8 gap-5">
        <DisplayItem v-for="product in products.slice(0, 10)" :key="index"
        :iName="product.title"
        :iPicture="productPicture(product.image.url)"
        :iPrice="product.price"
        :iId="product.slug"
        iRating="4/5"/>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      products: null
    }
  },
  async fetch() {
    // try {
        let products = await this.$axios.$get('/products')
        this.products = products
    // } catch (error) {

    // }
  },
  methods: {
    productPicture(productImageUrl) {
      if (productImageUrl.contains("https")) {
        return productImageUrl
      }
      return `${process.env.baseUrl}${productImageUrl}`
    }
  }
}
</script>
