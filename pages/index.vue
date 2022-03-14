<template>
  <div class="bg-gray-100 h-auto">
    <HeaderBanner />
    <Header class="sticky top-0 z-50"/>
    <main class="flex flex-row w-screen">
      <CategoriesSideMenu class="w-2/12 sticky top-1" />

      <section class="flex flex-col w-10/12">
        <Carousel/>

        <BestSellers/>

        <NewAdditions/>
      </section>
    </main >
    <Footer/>
  </div >
</template>

<script lang="ts">
import Vue from 'vue'
import BestSellers from '~/components/BestSellers.vue'
import NewAdditions from '~/components/NewAdditions.vue'

export default Vue.extend({
  components: { BestSellers, NewAdditions }
  })
</script>
