<template>
  <div class="h-screen bg-gray-200">
    <AlternatePages title="Sports Goods" icon="sports_goods"/>
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
