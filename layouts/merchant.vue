<template>
  <div>
    <MerchantDashboardHeader/>

    <main class="flex flex-row bg-gray-100">
      <MerchantSideMenu/>

      <section class="w-screen min-h-screen">
        <Nuxt/>
      </section>
    </main>

    <Footer/>
  </div>
</template>
