<template>
  <div class="w-screen h-screen bg-gray-300 flex flex-col items-center justify-center content-start">
    <NuxtLink to="/">
      <img src="~/assets/images/a2logo-black.png" class="w-24"/>
    </NuxtLink>
    <h3 class="text-a2blue text-3xl font-bold">Become A <span class="text-a2yellow">Merchant</span></h3>
    <p class="text-sm text-a2blue tracking-widest">register & start selling today!</p>

    <ValidationObserver v-slot="{ invalid, handleSubmit }">
      <form @submit.prevent="handleSubmit(onSubmit)" class="flex flex-col mt-4 gap-2">
          <ValidationProvider name="Business Name" :rules="{ alpha_spaces, required }" v-slot="{ errors }">
            <div class="flex flex-row p-2 border-0 rounded-full bg-gray-100">
              <solid-office-building-icon class="w-5 h-5 text-a2yellow"/>
              <input class="bg-transparent w-80 text-xs ml-4 outline-none" type="text" v-model="businessName" placeholder="Enter Business Name e.g: Joe Collections" required>
            </div>
            <span class="text-xs text-red-900 ml-5">{{ errors[0] }}</span>
          </ValidationProvider>


        <ValidationProvider name="Business Address" :rules="{ alpha_spaces, required }" v-slot="{ errors }">
          <div class="flex flex-row p-2 border-0 rounded-full bg-gray-100">
            <solid-location-marker-icon class="w-5 h-5 text-a2yellow"/>
            <input class="bg-transparent w-80 text-xs ml-4 outline-none" type="text" v-model="businessAddress" placeholder="Enter Business Address e.g: No 7 Mayweather Close..." required>
          </div>
          <span class="text-xs text-red-900 ml-5">{{ errors[0] }}</span>
        </ValidationProvider>

        <ValidationProvider name="Email" :rules="{ email, required }" v-slot="{ errors }">
          <div class="flex flex-row p-2 border-0 rounded-full bg-gray-100">
            <solid-mail-icon class="w-5 h-5 text-a2yellow"/>
            <input class="bg-transparent w-80 text-xs ml-4 outline-none" type="email" v-model="email" placeholder="Enter email: joecollections@gmail.com" required>
          </div>
          <span class="text-xs text-red-900 ml-5">{{ errors[0] }}</span>
        </ValidationProvider>

        <ValidationProvider name="Username" :rules="{ alpha_num, required }" v-slot="{ errors }">
          <div class="flex flex-row p-2 border-0 rounded-full bg-gray-100">
            <solid-user-circle-icon class="w-5 h-5 text-a2yellow"/>
            <input class="bg-transparent w-80 text-xs ml-4 outline-none" type="rext" v-model="username" placeholder="Choose a username" required>
          </div>
          <span class="text-xs text-red-900 ml-5">{{ errors[0] }}</span>
        </ValidationProvider>


        <ValidationObserver>
          <ValidationProvider name="Password" rules="confirmed:confirmation" v-slot="{ errors }">
            <div class="flex flex-row p-2 border-0 rounded-full bg-gray-100">
              <solid-shield-exclamation-icon class="w-5 h-5 text-a2yellow"/>
              <input class="bg-transparent w-80 text-xs ml-4 outline-none" type="password" v-model="password" placeholder="Type a password" required>
            </div>
            <span class="text-xs text-red-900 ml-5">{{ errors[0] }}</span>
          </ValidationProvider>

          <ValidationProvider v-slot="{ errors }" vid="confirmation">
            <div class="flex flex-row p-2 border-0 rounded-full bg-gray-100">
              <solid-shield-check-icon class="w-5 h-5 text-a2yellow"/>
              <input class="bg-transparent w-80 text-xs ml-4 outline-none" type="password" v-model="retypePassword" placeholder="Retype Password" required>
            </div>
            <span class="text-xs text-red-900 ml-5">{{ errors[0] }}</span>
          </ValidationProvider>
        </ValidationObserver>


        <button :disabled="invalid" class="flex flex-row justify-center p-2 border-0 rounded-full bg-a2blue mt-4 disabled">
          <svg v-if="registering" class="animate-spin h-5 w-5 mr-3 border-b-2 border-r-2 rounded-full border-a2yellow" viewBox="0 0 24 24">
            <!-- ... -->
          </svg>
          <solid-badge-check-icon v-else class="w-5 h-5 text-a2yellow"/>
          <span v-if="!registering" class="text-a2yellow bg-transparent text-xs ml-1">REGISTER</span>
        </button>
      </form>
    </ValidationObserver>

    <div class="flex justify-around text-xs p-4 w-60">
      <p class="text-a2blue">Already have an account?</p>
      <NuxtLink class="text-a2yellow" to="/merchant/login">
        Sign In.
      </NuxtLink>
    </div>
  </div>
</template>

<script>
import { ValidationObserver, ValidationProvider } from "vee-validate/dist/vee-validate.full.esm"
export default {
  components: {
    ValidationObserver,
    ValidationProvider
  },
  data() {
    return {
      businessName: null,
      businessAddress: null,
      email: null,
      username: null,
      password: null,
      retypePassword: null,
      registering: false,
    }
  },

  methods: {
   async onSubmit() {
      // alert('Form has been submitted!');
      const formData = {
        businessName: this.businessName,
        businessAddress: this.businessAddress,
        email: this.email,
        username: this.username,
        password: this.password,
      }

      try {
        this.registering = true
        let newMerchant = await this.$axios.$post('/merchants/auth/register', formData)
        if (newMerchant) {
          this.resetForm()
          this.$toast.success('Registration Succesful').goAway(3000)
          this.$router.push("/merchant/login")
      }
      } catch (error) {
        this.$toast.error("Something went wrong, please try again").goAway(3000)
        this.registering = false
      }


    },
    resetForm() {
      this.businessName = null,
      this.businessAddress = null,
      this.email = null,
      this.username = null,
      this.password = null,
      this.retypePassword = null,
      this.registering = false
    }
  },
}
</script>
