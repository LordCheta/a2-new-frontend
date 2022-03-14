<template>
  <div>
    <div class="h-24 p-10 flex flex-row">
      <h1 class="text-a2blue text-2xl font-light w-1/2">Edit product</h1>

      <div class="w-1/2 flex justify-end items-center">
        <button @click="editProduct()" class="px-6 py-2 bg-green-400 text-white w-36 rounded-3xl flex justify-center" to="/merchant/products/new-product">save</button>
      </div>
    </div> <hr>


      <section class="flex flex-col w-3/5 p-10 bg-white mt-10 ml-10 gap-y-20 shadow-sm">

        <div class="flex flex-row justify-center gap-x-10">
            <div class="flex flex-col">
              <label class="text-a2blue mb-4" for="title">Title</label>
              <input class="w-80 p-2 border outline-none" type="text" name="title" v-model="title" required>
            </div>

            <div class="flex flex-col">
              <label class="text-a2blue mb-4" for="title">Description</label>
              <input class="w-80 p-2 border outline-none" type="text" name="title" v-model="description" required>
            </div>
        </div>

        <div class="flex flex-row justify-center gap-x-10">
            <div class="flex flex-col">
              <label class="text-a2blue mb-4" for="title">Price</label>
              <div class="flex flex-row p-2 border">
                <p>₦</p>
                <input class="w-80 outline-none" type="number" name="price" v-model="price" min="1" required>
              </div>
            </div>

            <div class="flex flex-col">
              <label class="text-a2blue mb-4" for="title">Image</label>
              <input class="w-80 p-2 outline-none bg-green-200" type="file" name="image" @change="uploadFile()" accept="image/*" ref="file" required>
            </div>
        </div>

        <div class="flex flex-row justify-center gap-x-10">
            <div class="flex flex-col">
              <label class="text-a2blue mb-4" for="title">Category</label>
              <select v-model="category" class="w-80 p-2 border focus:outline-none" name="status"  required>
                <option v-for="category in categories" :key="category.id" :value="category.id">{{category.name}}</option>
              </select>
            </div>

            <div class="flex flex-col">
              <label class="text-a2blue mb-4" for="title">Status</label>
              <select v-model="pubStatus" class="w-80 p-2 border focus:outline-none" name="status" id="" required>
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
import reloadMerchantProfile from "~/mixins/storage"

export default {
  layout: "merchant",
  middleware: 'merchantAuth',
  async fetch() {
    let getDets = this.merchantUserDetails()
    this.$axios.setToken(getDets().token, 'Bearer')

    const categories =  await this.$axios.$get('/categories')
    this.categories = categories
    let product = await this.$axios.$get(`/products/${this.$route.params.id}`)

    this.title = product.title
    this.price = product.price
    // this.image = product.image.url,
    this.description = product.description
    this.id = product.id
    },
  data() {
    return {
      pubStatus: null,
      category: null,
      image: null,
      price: null,
      description: null,
      title: null,
      categories: null,
      editing: false,
      id: null
    }
  },
  mixins: [reloadMerchantProfile],
  methods: {
    ...mapGetters(['merchantUserDetails', 'merchantBusinessDetails']),
    ...mapMutations(['setMerchantProduct', 'updateMerchantProduct', 'removeMerchantProduct']),
    uploadFile() {
      this.image = this.$refs.file.files[0]
    },
    async editProduct() {
      try {
        let data = {
          title: this.title,
          description: this.description,
          price: Number(this.price),
          category: this.category,
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

        // Upload Image and product
        let productData = new FormData()
        productData.append('files.image', this.image)
        productData.append('data', JSON.stringify(data))


        let Product = await this.$axios.$put(`/products/${this.id}`, productData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
      })


      // const merchantUserDetails = this.merchantUserDetails()

        // upload product
        // data.image = image[0].id
        // data.merchant = merchantUserDetails().merchant

       // Reload merchant profile
        await this.reloadMerchantProfile()

        this.$toast.success("Product Updated Successfully").goAway(4000)

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
