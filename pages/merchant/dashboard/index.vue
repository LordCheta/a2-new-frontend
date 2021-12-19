<template>
  <div>
    <header class="p-10">
      <h1 class="text-3xl font-light text-a2blue">General Merchant Overview</h1>
    </header> <hr>

    <section class="mt-5 flex justify-center gap-10 items-center">
      <div class="sales w-48 h-72 shadow-lg rounded-3xl">
        <div class="border-b border-dashed border-gray-300">
          <solid-gift-icon class="w-16 h-16 p-3 text-white"/>
          <p class="font-medium ml-5 text-white ">Sales</p>
        </div>

          <p class="mt-40 ml-5 font-medium text-white">N/A</p>
      </div>

      <div class="products w-48 h-72 shadow-lg rounded-3xl">
        <div class="border-b border-dashed border-white">
          <solid-shopping-cart-icon class="w-16 h-16 p-3 text-white"/>
          <p class="font-medium ml-5 text-white ">Products</p>
        </div>

          <p class="mt-40 ml-5 font-medium text-white">N/A</p>
      </div>

      <div class="finance w-48 h-72 shadow-lg rounded-3xl">
        <div class="border-b border-dashed border-white">
          <solid-credit-card-icon class="w-16 h-16 p-3 text-white"/>
          <p class="font-medium ml-5 text-white ">Finance</p>
        </div>

          <p class="mt-40 ml-5 font-medium text-white">N/A</p>
      </div>

      <div class="refs w-48 h-72 shadow-lg rounded-3xl">
        <div class="border-b border-dashed border-white">
          <solid-bookmark-icon class="w-16 h-16 p-3 text-white"/>
          <p class="font-medium ml-5 text-white ">Orders</p>
        </div>

          <p class="mt-40 ml-5 font-medium text-white">N/A</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  layout: "merchant"
}
</script>

<style scoped>
.sales{
  background-image: linear-gradient(to bottom, rgba(236, 144, 7, 0.582), rgb(212, 156, 1));
}
.products{
  background-image: linear-gradient(to bottom, rgba(7, 144, 236, 0.582), rgb(1, 75, 212));
}

.finance{
  background-image: linear-gradient(to bottom, rgba(7, 236, 217, 0.582), rgb(1, 212, 212));
}

.refs{
  background-image: linear-gradient(to bottom, rgba(7, 236, 141, 0.582), rgb(1, 212, 19));
}
</style>
