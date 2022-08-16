<template>
  <Dashboard />
  <Cart/>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Dashboard from "@/components/Dashboard.vue";
import Cart from "@/components/Cart.vue";

export default defineComponent({
  name: "App",
  components: {
    Dashboard,
    Cart,
  },
});
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
