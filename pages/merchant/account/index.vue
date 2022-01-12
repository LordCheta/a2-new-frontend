<template>
  <div>
    <div class="h-24 p-10 flex flex-row">
      <h1 class="text-a2blue text-2xl font-light w-1/2">Merchant Account Profile</h1>
    </div> <hr>


      <form class="flex flex-col w-3/5 p-10 bg-white mt-10 ml-10 gap-y-20 shadow-sm">

        <div class="flex flex-row justify-center gap-x-10">
            <div class="flex flex-col">
              <label class="text-a2blue mb-4" for="title">Business Name</label>
              <input class="w-80 p-2 border" type="text" name="title" v-model="businessName" required :disabled="disabled">
            </div>

            <div class="flex flex-col">
              <label class="text-a2blue mb-4" for="title">Address</label>
              <input class="w-80 p-2 border" type="text" name="title" v-model="address" required :disabled="disabled">
            </div>
        </div>

        <div class="flex flex-row justify-center gap-x-10">
          <div class="flex flex-col">
            <label class="text-a2blue mb-4" for="title">Account Number</label>
            <input class="w-80 p-2 border" type="text" name="price" v-model="acountNumber" min="1" required :disabled="disabled">
          </div>

          <div class="flex flex-col">
            <label class="text-a2blue mb-4" for="title">Bank Name</label>
            <input class="w-80 p-2 border" type="text" name="image" v-model="bankName" required :disabled="disabled">
          </div>
        </div>

        <div class="flex flex-row justify-center gap-x-10">
          <div class="flex flex-col">
            <label class="text-a2blue mb-4" for="title">Username</label>
            <input class="w-80 p-2 border" type="text" name="image" v-model="username" required :disabled="disabled">
          </div>

          <div class="flex flex-col">
            <label class="text-a2blue mb-4" for="title">Email</label>
            <input class="w-80 p-2 border" type="text" name="image" v-model="email" required :disabled="disabled">
          </div>
        </div>

        <div class="flex flex-row justify-center gap-x-10">
          <button v-if="showEdit" class="px-6 py-2 bg-a2yellow text-white w-36 rounded-3xl flex justify-center" @click="editProfile()">Edit</button>
          <div v-if="!showEdit" class="flex flex-row justify-center gap-x-5">
          <input type="submit" class="px-6 py-2 bg-a2blue text-white w-36 rounded-3xl flex justify-center" @click="updateAccountDetails" value="Update Profile"/>
          <button class="px-6 py-2 bg-red-500 text-white w-36 rounded-3xl flex justify-center" @click="cancelEdit()">Cancel</button>
          </div>
        </div>
      </form>
  </div>
</template>

<script>
import { ValidationObserver, ValidationProvider } from "vee-validate/dist/vee-validate.full.esm"
import { mapGetters } from "vuex"

export default {
  components: {
    ValidationObserver,
    ValidationProvider
  },
  layout: "merchant",
  middleware: 'merchantAuth',

  mounted() {
    let merchantBusinessDetails = this.merchantBusinessDetails()
    let merchantUserDetails = this.merchantUserDetails()

      this.email = merchantUserDetails().email
      this.username = merchantUserDetails().username
      this.accountNumber = merchantBusinessDetails().accountNumber
      this.address = merchantBusinessDetails().address
      this.businessName = merchantBusinessDetails().businessName
      this.merchantId = merchantBusinessDetails().merchantId
      this.userId = merchantBusinessDetails().userId
  },
  data() {
    return {
      email: null,
      username: null,
      accountNumber: null,
      price: null,
      address: null,
      businessName: null,
      showEdit: true,
      disabled: true,
      merchantId: null,
      userId: null
    }
  },

  methods: {
    ...mapGetters(['merchantBusinessDetails', 'merchantUserDetails']),
    updateAccountDetails() {

    },

    editProfile() {
      this.showEdit = false
      this.disabled = false
    },

    cancelEdit() {
      this.showEdit = true
      this.disabled = true
    }
  },
}
</script>
