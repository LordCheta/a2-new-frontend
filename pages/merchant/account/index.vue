<template>
  <div>
    <div class="h-24 p-10 flex flex-row">
      <h1 class="text-a2blue text-2xl font-light w-1/2">Merchant Account Profile</h1>

      <div class="w-1/2 flex justify-end items-center">
        <button class="px-6 py-2 bg-green-400 text-white w-36 rounded-3xl flex justify-center" @click="updateAccountDetails">save</button>
      </div>
    </div> <hr>


      <section class="flex flex-col w-3/5 p-10 bg-white mt-10 ml-10 gap-y-20 shadow-sm">

        <div class="flex flex-row justify-center gap-x-10">
            <div class="flex flex-col">
              <label class="text-a2blue mb-4" for="title">Business Name</label>
              <input class="w-80 p-2 border" type="text" name="title" v-model="businessName" required>
            </div>

            <div class="flex flex-col">
              <label class="text-a2blue mb-4" for="title">Address</label>
              <input class="w-80 p-2 border" type="text" name="title" v-model="address" required>
            </div>
        </div>

        <div class="flex flex-row justify-center gap-x-10">
            <div class="flex flex-col">
              <label class="text-a2blue mb-4" for="title">Account Number</label>
              <input class="w-80 p-2 border" type="text" name="price" v-model="acountNumber" min="1" required>
            </div>

            <div class="flex flex-col">
              <label class="text-a2blue mb-4" for="title">Username</label>
              <input class="w-80 p-2 border" type="text" name="image" v-model="username" required>
            </div>
        </div>

        <div class="flex flex-row justify-center gap-x-10">
            <div class="flex flex-col">
              <label class="text-a2blue mb-4" for="title">Email</label>
              <input class="w-80 p-2 border" type="text" name="image" v-model="email" required>
            </div>
        </div>

      </section>
  </div>
</template>

<script>
export default {
  layout: "merchant",
  middleware: 'merchantAuth',

  data() {
    return {
      email: null,
      username: null,
      accountNumber: null,
      price: null,
      address: null,
      businessName: null
    }
  },

  methods: {
    updateAccountDetails() {

    }
  },
}
</script>
