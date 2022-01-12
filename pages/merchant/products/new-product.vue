<template>
  <div>
    <div class="h-24 p-10 flex flex-row">
      <h1 class="text-a2blue text-2xl font-light w-1/2">Add a new product</h1>

      <div class="w-1/2 flex justify-end items-center">
        <button @click="uploadNewProduct()" class="px-6 py-2 bg-green-400 text-white w-36 rounded-3xl flex justify-center" to="/merchant/products/new-product">save</button>
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
              <input class="w-80 p-2" type="file" name="image" @change="uploadFile()" accept="image/*" ref="file" required>
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
                <option>published</option>
                <option>draft</option>
              </select>
            </div>
        </div>

      </section>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex"
import storage from "~/mixins/storage"
import slugify from "slugify"

export default {
  layout: "merchant",
  middleware: 'merchantAuth',
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
  mixins: [storage],
  methods: {
    ...mapGetters(['merchantUserDetails', 'merchantBusinessDetails']),
    ...mapMutations(['setMerchantProduct']),
    uploadFile() {
      this.image = this.$refs.file.files[0]
    },
    async uploadNewProduct() {
      try {
        let data = {
          title: this.title,
          description: this.description,
          price: this.price,
          category: this.category,
          slug: slugify(this.title),
          status: this.pubStatus
        }

        let fieldErrors = []
        for (const key in data) {
          if (data[key] == null) {
            this.$toast.error(`${key} is required`).goAway(3000)
            fieldErrors.push(data);
          }
        }

        if (fieldErrors.length > 0) return

        // Upload Image
        let imageData = new FormData()
        imageData.append('files', this.image)
        let image = await this.$axios.$post('/upload', imageData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
      })

      const merchantUserDetails = this.merchantUserDetails()

        // upload product
        data.image = image.id
        data.merchant = merchantUserDetails().merchant

        // Upload New Product
        let newProduct = await this.$axios.$post('/products',  data)

        // Add new product to the merchant profile
        this.setMerchantProduct(newProduct)

        this.$toast.success("Product Created Successfully").goAway(3000)

        this.resetForm()

        this.$router.push("/merchant/products")
      } catch(e) {
        console.log(e.response);
        this.$toast.error(e).goAway(3000)
      }
    },
    resetForm() {
      this.pubStatus = null,
      this.category = null,
      this.image = null,
      this.price = null,
      this.description = null,
      this.title = null
    }
  },
}
</script>
