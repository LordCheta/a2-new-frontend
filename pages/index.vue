<template>
  <div class="bg-gray-100 h-auto">
    <HeaderBanner />
    <Header class="sticky top-0 z-50"/>
    <Carousel/>
    <main class="flex flex-row w-screen min-h-screen">
      <CategoriesSideMenu />

      <section class="flex flex-col w-10/12">


        <BestSellers/>

        <NewAdditions/>
      </section>
    </main >
    <Footer />
  </div >
</template>

<script lang="ts">
import Vue from 'vue'
import BestSellers from '~/components/BestSellers.vue'
import NewAdditions from '~/components/NewAdditions.vue'

export default Vue.extend({
  components: { BestSellers, NewAdditions },
  })
</script>
