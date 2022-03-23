<template>
  <div class="p-10">
    <div class="flex flex-row justify-start gap-11 underline">
      <solid-heart-icon v-if="health_beauty"  class="w-14 h-14 text-a2blue"/>
      <solid-office-building-icon v-if="home_office"  class="w-14 h-14 text-a2blue"/>
      <solid-device-tablet-icon v-if="phones_tablets"  class="w-14 h-14 text-a2blue"/>
      <solid-desktop-computer-icon v-if="computing"  class="w-14 h-14 text-a2blue"/>
      <solid-chip-icon v-if="electronics"  class="w-14 h-14 text-a2blue"/>
      <solid-sparkles-icon v-if="fashion"  class="w-14 h-14 text-a2blue"/>
      <solid-tag-icon v-if="baby_products"  class="w-14 h-14 text-a2blue"/>
      <solid-collection-icon v-if="gaming"  class="w-14 h-14 text-a2blue"/>
      <solid-cube-icon v-if="sports_goods"  class="w-14 h-14 text-a2blue"/>
      <solid-view-grid-add-icon v-if="automobile"  class="w-14 h-14 text-a2blue"/>
      <solid-tag-icon v-if="best_sellers"  class="w-14 h-14 text-a2blue"/>
      <solid-cube-icon v-if="new_additions"  class="w-14 h-14 text-a2blue"/>
      <solid-duplicate-icon v-if="others"  class="w-14 h-14 text-a2blue"/>
      <h1 class="text-a2blue text-5xl font-extralight tracking-wider">{{title}}</h1>
    </div>

    <section class="flex flex-col">
      <div v-if="$fetchState.pending" class="flex flex-row justify-center">
        <svg class="animate-spin h-5 w-5 mr-3 border-b-2 border-r-2 rounded-full border-a2blue" viewBox="0 0 24 24">
            <!-- ... -->
        </svg>
      </div>

      <div v-else-if="$fetchState.error || products == null">
        <div class="flex justify-center">
          <img src="~/assets/images/empty.svg" class="w-96 h-96" alt="">
        </div>
        <p class="flex justify-center text-md font-light text-gray-600">Nothing to show here just yet</p>
        <div class="flex justify-center content-center mt-5">
          <nuxt-link to="/" class="flex justify-center bg-a2blue p-1 text-a2yellow rounded-full w-40">Go Home</nuxt-link>
        </div>
      </div>


       <div v-else class="flex flex-wrap justify-start content-center mt-8 gap-5">
        <DisplayItem v-for="product in products.slice(0, 20)" :key="index"
          :iName="product.title"
          :iPicture="productPicture(product.image.url)"
          :iPrice="product.price"
          :iId="product.slug"
          iRating="4/5"/>
        </div>
    </section>

  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      health_beauty: false,
      home_office: false,
      phones_tablets: false,
      computing: false,
      electronics: false,
      fashion: false,
      baby_products: false,
      gaming: false,
      sports_goods: false,
      automobile: false,
      best_sellers: false,
      new_additions: false,
      others: false,
      products: null
    }
  },
  methods: {
    renderIcon(iconName) {
      switch(iconName) {
        case "health-and-beauty":
          this.health_beauty = true
          break;
        case "home-and-office":
          this.home_office = true
          break;
        case "phones-and-tablets":
          this.phones_tablets = true
          break;
        case "computing":
          this.computing = true
          break;
        case "electronics":
          this.electronics = true
          break;
        case "fashion":
          this.fashion = true
          break;
        case "baby-products":
          this.baby_products = true
          break;
        case "gaming":
          this.gaming = true
          break;
        case "sporting-goods":
          this.sports_goods = true
          break;
        case "automobile":
          this.automobile = true
          break;
        case "best_sellers":
          this.best_sellers = true
          break;
        case "new_additions":
          this.new_additions = true
          break;
        default:
          this.others = true
      }
    },
    productPicture(productImageUrl) {
      if (productImageUrl.includes("https")) {
        return productImageUrl
      }
      return `${process.env.baseUrl}${productImageUrl}`
    }
  },
  async fetch() {
    this.renderIcon(this.icon);

    let products;

    if(this.icon == "new_additions" || this.icon == "best_sellers") {
      products = await this.$axios.$get(`/products`);
    } else {
      products = await this.$axios.$get(`/products?category.slug=${this.icon}`);
    }

    if (products.length < 1 ) {
      return this.products = null
    } else {
      this.products = products
    }
  },
}
</script>
