<template>
  <div class="w-screen h-screen bg-gray-300 flex flex-col items-center justify-center content-start">
    <NuxtLink to="/">
      <img src="~/assets/images/a2logo-black.png" class="w-24"/>
    </NuxtLink>
    <h3 class="text-a2blue text-3xl font-bold">Become A <span class="text-a2yellow">Merchant</span></h3>
    <p class="text-sm text-a2blue tracking-widest">register & start selling today!</p>

    <form action="" class="flex flex-col mt-4 gap-4">

      <div class="flex flex-row p-2 border-0 rounded-full bg-gray-100">
        <solid-office-building-icon class="w-5 h-5 text-a2yellow"/>
        <ValidationProvider rules="secret" v-slot="{ errors }">
          <input class="bg-transparent w-80 text-xs ml-4" type="text" v-model="businessName" id="" placeholder="Enter Business Name e.g: Joe Collections" required>
          <span>{{ errors[0] }}</span>
        </ValidationProvider>
      </div>

      <div class="flex flex-row p-2 border-0 rounded-full bg-gray-100">
        <solid-location-marker-icon class="w-5 h-5 text-a2yellow"/>
        <input class="bg-transparent w-80 text-xs ml-4" type="text" v-model="businessAddress" id="" placeholder="Enter Business Address e.g: No 7 Mayweather Close..." required>
      </div>

      <div class="flex flex-row p-2 border-0 rounded-full bg-gray-100">
        <solid-mail-icon class="w-5 h-5 text-a2yellow"/>
        <input class="bg-transparent w-80 text-xs ml-4" type="email" v-model="email" id="" placeholder="Enter email: joecollections@gmail.com" required>
      </div>

      <div class="flex flex-row p-2 border-0 rounded-full bg-gray-100">
        <solid-user-circle-icon class="w-5 h-5 text-a2yellow"/>
        <input class="bg-transparent w-80 text-xs ml-4" type="rext" v-model="username" id="" placeholder="Choose a username" required>
      </div>

      <div class="flex flex-row p-2 border-0 rounded-full bg-gray-100">
        <solid-shield-exclamation-icon class="w-5 h-5 text-a2yellow"/>
        <input class="bg-transparent w-80 text-xs ml-4" type="password" v-model="password" id="" placeholder="Type a password" required>
      </div>

      <div class="flex flex-row p-2 border-0 rounded-full bg-gray-100">
        <solid-shield-check-icon class="w-5 h-5 text-a2yellow"/>
        <input class="bg-transparent w-80 text-xs ml-4" type="password" v-model="retypePassword" id="" placeholder="Retype Password" required>
      </div>

      <button :class="btnEnabled" class="flex flex-row justify-center p-2 border-0 rounded-full bg-a2blue mt-4 disabled">
        <svg v-if="registering" class="animate-spin h-5 w-5 mr-3 border-b-2 border-r-2 rounded-full border-a2yellow" viewBox="0 0 24 24">
          <!-- ... -->
        </svg>
        <solid-badge-check-icon v-else class="w-5 h-5 text-a2yellow"/>
        <span v-if="!registering" @click="registerMerchant(e)" class="text-a2yellow bg-transparent text-xs ml-1">REGISTER</span>
      </button>
    </form>

    <div class="flex justify-around text-xs p-4 w-60">
      <p class="text-a2blue">Already have an account?</p>
      <NuxtLink class="text-a2yellow" to="/merchant/login">
      Sign In.
    </NuxtLink>
    </div>
  </div>
</template>

<script>
// import { ValidationObserver, ValidationProvider } from "nuxt-validate"
export default {
  // components: {
  //   ValidationObserver,
  //   ValidationProvider
  // },
  data() {
    return {
      businessName: null,
      businessAddress: null,
      email: null,
      username: null,
      password: null,
      retypePassword: null,
      registering: false,
      btnEnabled: "disabled"
    }
  },

  methods: {
    registerMerchant(e) {
      e.preventDefault();

    },
    isRequired(value) {
      return value ? true : 'This field is required';
    },
  },
}
</script>
