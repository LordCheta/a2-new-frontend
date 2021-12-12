<template>
  <section class="p-4 flex flex-col mt-8">
    <div class="flex flex-row justify-start gap-11">
      <solid-tag-icon class="w-14 h-14 text-a2blue"/>
      <h1 class="text-a2blue text-5xl font-extralight tracking-wider">Top Selling Items</h1>
    </div>

    <div class="flex flex-col">
      <div v-if="$fetchState.pending">
        loading...
      </div>

      <div v-else-if="$fetchState.error">
            {{$fetchState}}
      </div>

      <div v-else class="flex flex-wrap justify-start content-center mt-8 gap-5">
        <DisplayItem v-for="product in products.slice(0, 10)"
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
      return `http://localhost:1337${productImageUrl}`
    }
  }
}
</script>
