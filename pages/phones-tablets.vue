<template>
  <div class="bg-gray-200">
    <AlternatePages title="Phones & Tablets" icon="phones-and-tablets"/>
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
