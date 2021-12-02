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
        <input class="bg-transparent w-80 text-xs ml-4" type="rext" name="" id="" placeholder="Email or Username">
      </div>

      <div class="flex flex-row p-2 border-0 rounded-full bg-gray-100">
        <solid-shield-exclamation-icon class="w-5 h-5 text-a2yellow"/>
        <input class="bg-transparent w-80 text-xs ml-4" type="password" name="" id="" placeholder="Password">
      </div>

      <div class="flex flex-row justify-center p-2 border-0 rounded-full bg-a2blue mt-4">
        <solid-check-circle-icon class="w-5 h-5 text-a2yellow"/>
        <input class="text-a2yellow bg-transparent text-xs ml-1" type="submit" name="" id="" value="LOGIN">
      </div>
    </form>

    <div class="flex justify-around text-xs p-4 w-60">
      <p class="text-a2blue">Don't have an account?</p>
      <NuxtLink class="text-a2yellow" to="/merchant">
      Sign Up.
    </NuxtLink>
    </div>
  </div>
</template>
