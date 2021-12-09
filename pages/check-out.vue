<template>
  <div class="bg-gray-100">
    <HeaderBanner/>
    <Header/>
    <main class="flex flex-col w-screen h-screen p-4">
      <div class="w-full flex flex-row justify-center p-4">
        <solid-shopping-cart-icon class="w-20 h-20"/>
        <p class="ml-2 mt-1 text-6xl font-thin">CHECKOUT</p>
      </div>

      <table class="table-auto">
        <thead>
          <tr class="bg-a2blue h-14 text-a2yellow">
            <th class="font-extralight ">Product</th>
            <th class="font-extralight text-xl">Price</th>
            <th class="font-extralight text-xl">Quantity</th>
            <th class="font-extralight text-xl">Subtotal</th>
          </tr>
        </thead>
        <tbody>
          <tr class="p-2 text-xl text-a2blue font-normal border-gray-300">
            <td class="p-4 border-b border-r">Juice Box</td>
            <td class="p-4 border-b border-r">₦5000</td>
            <td class="p-4 border-b border-r"><input type="number" class="bg-transparent" value="1" name="" max="50" min="50" id=""></td>
            <td class="p-4 border-b border-r">₦5000</td>
          </tr>
        </tbody>
      </table>

      <div class="p-6">
        <p class="font-medium underline text-a2blue">CART TOTALS</p>
        <p class="text-sm text-gray-400">Subtotal: ₦5000</p>
        <p class="text-sm text-gray-400">Delivery: ₦1000</p>
        <p class="text-sm text-gray-400">Total: ₦6000</p>
        <button class="mt-4 bg-a2blue text-xs text-a2yellow p-2 " type="submit">PROCEED TO CHECKOUT</button>
      </div>

    </main >

    <Footer/>
  </div >
</template>

<script>
  export default {
    data() {
      return {
        image: "https://images.unsplash.com/photo-1590012040529-c5e12f37b5d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
        productName: "Juice Box",
        productPrice: "₦5000"
      }
    }
    }
</script>
