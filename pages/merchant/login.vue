<template>
  <div class="w-screen h-screen bg-gray-300 flex flex-col items-center justify-center content-start">
    <NuxtLink to="/">
      <img src="~/assets/images/a2logo-black.png" class="w-24"/>
    </NuxtLink>
    <h3 class="text-a2blue text-3xl font-bold">Manage your <span class="text-a2yellow">Merchant</span> Account</h3>
    <p class="text-sm text-a2blue tracking-widest">enjoy higher turnover and good profit!</p>

    <form action="" class="flex flex-col mt-4 gap-4">

      <div class="flex flex-row p-2 border-0 rounded-full bg-gray-100">
        <solid-user-circle-icon class="w-5 h-5 text-a2yellow"/>
        <input v-model="identifier" class="bg-transparent w-80 text-xs ml-4 outline-none" type="rext" name="" id="" placeholder="Email or Username" required>
      </div>

      <div class="flex flex-row p-2 border-0 rounded-full bg-gray-100">
        <solid-shield-exclamation-icon class="w-5 h-5 text-a2yellow"/>
        <input v-model="password" class="bg-transparent w-80 text-xs ml-4 outline-none" type="password" name="" id="" placeholder="Password" required>
      </div>

      <button @click="submit($event)" type="submit" class="flex flex-row justify-center p-2 border-0 rounded-full bg-a2blue mt-4">
        <svg v-if="loggingIn" class="animate-spin h-5 w-5 mr-3 border-b-2 border-r-2 rounded-full border-a2yellow" viewBox="0 0 24 24">
            <!-- ... -->
        </svg>
        <solid-check-circle-icon class="w-5 h-5 text-a2yellow"/>
        <span v-if="!loggingIn" class="text-a2yellow bg-transparent text-xs ml-1">LOGIN</span>
      </button>
    </form>

    <div class="flex justify-around text-xs p-4 w-60">
      <p class="text-a2blue">Don't have an account?</p>
      <NuxtLink class="text-a2yellow" to="/merchant">
      Sign Up.
    </NuxtLink>
    </div>
  </div>
</template>


<script>
import { ValidationObserver, ValidationProvider } from "vee-validate/dist/vee-validate.full.esm"
import { mapMutations } from "vuex"
import { setMerchantLocalStorageData, getMerchantLocalStorageData } from "~/helpers/storage"

export default {
  components: {
    ValidationObserver,
    ValidationProvider
  },
  data() {
    return {
      loggingIn: false,
      identifier: null,
      password: null
    }
  },
  methods: {
    ...mapMutations(['setMerchantUser', 'setMerchantBusiness', 'setMerchantProduct']),
    async submit(e) {
      e.preventDefault()
      const formData = {
        identifier: this.identifier,
        password: this.password
      }
      try {
        this.loggingIn = true
        let merchant = await this.$axios.$post('/auth/local', formData)

        // This api call gets the merchant details which also includes the products
        // let merchantProducts = await this.$axios.$get('/merchants/'+merchant.user.merchant.id)


        if (merchant) {

          this.resetForm()

          this.$toast.success('Login Successful').goAway(3000)
          this.loggingIn = false
          let userData = {
            token: merchant.jwt,
            userId: merchant.user.id,
            merchantId: merchant.user.merchant.id,
            username: merchant.user.username,
            email: merchant.user.email,
          }

          let businessData = {
            id: merchant.user.merchant.id,
            address: merchant.user.merchant.address,
            businessName: merchant.user.merchant.businessName,
            accountNumber: merchant.user.merchant.accountNumber,
            accountName: merchant.user.merchant.accountName,
            bankName: merchant.user.merchant.bankName,
          }
          // this.setMerchantUser(userData);
          // this.setMerchantBusiness(businessData);
          setMerchantLocalStorageData(userData)

          this.$router.push("/merchant/dashboard");
        }
      } catch (error) {
        console.log(error)
        // error.response.data.message.map(e => this.$toast.error(e.message).goAway(3000))
        this.$toast.error("Username or Password Incorrect").goAway(3000)
        this.loggingIn = false
      }
    },
    resetForm() {
      this.identifier = null,
      this.password = null
    }
  },
}
</script>
