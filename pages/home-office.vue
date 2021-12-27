<template>
  <div class="h-screen bg-gray-200">
    <AlternatePages title="Home & Office" icon="home_office"/>
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
