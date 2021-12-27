<template>
  <div class="h-screen bg-gray-200">
    <AlternatePages title="Best Sellers" icon="best_sellers"/>
  </div>
</template>

<script>
import AlternateDefault from "~/layouts/alternateDefault.vue";
import AlternatePages from "~/components/AlternatePages.vue";
export default {
    layout: "alternateDefault",
    components: { AlternateDefault, AlternatePages }
}
</script>
