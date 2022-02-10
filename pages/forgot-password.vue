<template>
  <div class="w-screen h-screen flex flex-col items-center justify-center content-center bg-gray-400">

    <NuxtLink to="/">
      <img src="~/assets/images/a2logonew.png" class="w-44"/>
    </NuxtLink>

    <h3 class="text-a2blue text-3xl font-bold">Forgot your <span class="text-a2yellow">password</span></h3>
    <p class="text-sm text-a2blue tracking-widest">input your email & we'll send you instructions on how to change it...</p>

  <ValidationObserver v-slot="{ invalid, handleSubmit }">
    <form @submit.prevent="handleSubmit(onSubmit)" class="flex flex-col mt-4 gap-4">
        <ValidationProvider name="Email" :rules="{ email, required }" v-slot="{ errors }">
        <div class="flex flex-row p-2 border-0 rounded-full bg-gray-100">
          <solid-user-circle-icon class="w-5 h-5 text-a2yellow"/>
          <input v-model="email" class="bg-transparent w-80 text-xs ml-4 outline-none" type="email" placeholder="Email" required>
        </div>
        <span class="text-xs text-red-900 ml-5">{{ errors[0] }}</span>
        </ValidationProvider>

      <button :disabled="invalid" type="submit" class="flex flex-row justify-center p-2 border-0 rounded-full bg-a2blue">
        <svg v-if="initiatingPasswordReset" class="animate-spin h-5 w-5 mr-3 border-b-2 border-r-2 rounded-full border-a2yellow" viewBox="0 0 24 24">
            <!-- ... -->
        </svg>

        <span class="flex flex-row" v-if="!initiatingPasswordReset">
          <solid-lock-open-icon class="w-4 h-4 text-a2yellow"/>
          <span class="text-a2yellow bg-transparent text-xs ml-1">Initiate Password Reset</span>
        </span>
      </button>
    </form>
  </ValidationObserver>
  </div>
</template>

<script>
import { ValidationObserver, ValidationProvider } from "vee-validate/dist/vee-validate.full.esm"

export default {
  // layout: "alternateDefault"
  components: {
    ValidationObserver,
    ValidationProvider
  },
  data() {
    return {
      initiatingPasswordReset: false,
      email: null
    }
  },
  methods: {
    async onSubmit(e) {

      const formData = {
        email: this.email
      }

      try {
        identifier
      } catch (error) {
        this.initiatingPasswordReset = true
      }
    }
  },
}
</script>
