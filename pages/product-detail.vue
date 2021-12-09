<template>
  <div class="bg-gray-100">
    <HeaderBanner/>
    <Header/>
    <main class="flex flex-row w-screen h-screen p-4">
      <div class="mt-10 ml-5 w-1/2 h-auto flex justify-end">
        <img class="w-96 h-80"  :src="image"/>
      </div>


      <section class="mt-10 ml-5">
        <p class="text-a2blue text-4xl font-medium">{{productName}}</p>
        <p class="p-2 text-a2blue font-extralight text-3xl">{{productPrice}}</p>
        <div class="p-2 flex flex-col gap-2 text-xl text-a2blue font-light">
          <p>Rating: <span class="text-gray-400 text-sm">4/5</span></p>
          <p>Color: <span class="text-gray-400 text-sm">Mixed</span></p>
          <p>Weight: <span class="text-gray-400 text-sm">5g</span></p>
          <p>Volume: <span class="text-gray-400 text-sm">315ml</span></p>
          <p>Recyclable: <span class="text-gray-400 text-sm">Yes</span></p>
        </div>
        <div class="border bg-a2yellow p-2 flex flex-row gap-2">
          <input class="bg-gray-200 p-1" type="number" min="1" max="50" value="1" name="" id="">
          <button class="text-a2blue" type="submit">ADD TO CART</button>
        </div>
      </section>
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
