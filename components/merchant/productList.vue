<template>
  <tr class="text-a2blue font-light">
    <td class="p-4 border-b border-r">{{index + 1}}</td>
    <td class="p-4 border-b border-r">{{title}}</td>
    <td class="p-4 border-b border-r">{{description}}</td>
    <td class="p-4 border-b border-r">₦{{price}}</td>
    <!-- <td class="p-4 border-b border-r">{{product.category.name}}</td> -->
    <td class="p-4 border-b border-r">{{status}}</td>
    <td class="p-4 border-b border-r">{{created_at}}</td>
    <td class="p-4 border-b"><nuxt-link :to="`/merchant/products/edit-product/${slug}`" class="bg-green-900 text-white p-1 rounded-full">edit</nuxt-link> <button class="bg-red-900 text-white p-1 rounded-full" @click="deleteProduct()">delete</button></td>
</tr>
</template>

<script>
import reloadMerchantProfile from "~/mixins/storage"

export default {
  props: {
    index: { required: true },
    id: { required: true},
    title: { required: true},
    description:{ required: true},
    price: { required: true},
    status,
    created_at: { required: true},
    slug: { required: true}
  },
  mixins: [reloadMerchantProfile],
  methods: {
    async deleteProduct() {
      try {
        await this.$axios.$delete(`/products/${this.id}`)

        // Reload merchant profile
        await this.reloadMerchantProfile()

        this.$toast.success("Product Deleted Successfully").goAway(4000)

        this.$nuxt.refresh()
      } catch (e) {
        console.log(e.response);
        this.$toast.error(e).goAway(3000)
      }
    }
  },
}
</script>
