<template>
  <div class="w-screen h-screen bg-gray-400 flex flex-col items-center justify-center content-start">
    <NuxtLink to="/">
      <img src="~/assets/images/a2logonew.png" class="w-44"/>
    </NuxtLink>
    <h3 class="text-a2blue text-3xl font-bold">Manage your <span class="text-a2yellow">Merchant</span> Account</h3>
    <p class="text-sm text-a2blue tracking-widest">enjoy higher turnover and good profit!</p>

    <form action="" class="flex flex-col mt-4 gap-4">

      <div class="flex flex-row p-2 border-0 rounded-full bg-gray-100">
        <solid-user-circle-icon class="w-5 h-5 text-a2yellow"/>
        <input v-model="identifier" class="bg-transparent w-80 text-xs ml-4 outline-none" type="text" name="" id="" placeholder="Email or Username" required>
      </div>

      <div class="flex flex-row p-2 border-0 rounded-full bg-gray-100">
        <solid-shield-exclamation-icon class="w-5 h-5 text-a2yellow"/>
        <input v-model="password" class="bg-transparent w-80 text-xs ml-4 outline-none" type="password" name="" id="" placeholder="Password" required>
      </div>

      <div class="flex justify-end gap-x-1">
        <solid-lock-closed-icon class="w-4 h-4"/>
        <nuxt-link class="text-xs text-a2yellow" to="/forgot-password">forgot password?</nuxt-link>
      </div>

      <button @click="submit($event)" type="submit" class="flex flex-row justify-center p-2 border-0 rounded-full bg-a2blue mt-4">
        <svg v-if="loggingIn" class="animate-spin h-5 w-5 mr-3 border-b-2 border-r-2 rounded-full border-a2yellow" viewBox="0 0 24 24">
            <!-- ... -->
        </svg>

        <span class="flex flex-row" v-if="!loggingIn">
          <solid-check-circle-icon class="w-5 h-5 text-a2yellow"/>
          <span class="text-a2yellow bg-transparent text-xs ml-1">LOGIN</span>
        </span>
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
import { mapMutations, mapGetters } from "vuex"
import { setMerchantLocalStorageData, getMerchantLocalStorageData } from "~/helpers/storage"
import registerToken from "@/plugins/axios";
// import axios from "@/plugins/axios";

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
    ...mapGetters(['merchantUserDetails']),
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
          setMerchantLocalStorageData(userData)

          this.$toast.success('Login Successful').goAway(3000)
          this.loggingIn = false
          this.$router.push("/merchant/dashboard");
        }
      } catch (error) {

        if (error.response?.data?.data) {
          let errorArray = error.response.data.data[0].messages
          errorArray.forEach(e => {
            this.$toast.error(e.message).goAway(3000)
            this.loggingIn = false
          });
          return
        }

        this.$toast.error(error.message).goAway(3000)
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
