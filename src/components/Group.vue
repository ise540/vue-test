<template>
  <div>
    <div class="group_title">{{ title }}</div>
    <Market v-for="(market, index) in markets" :key="index" :market="market" />
  </div>
</template>

<script lang="ts">
import Market from "@/components/Market.vue";
import { defineComponent, PropType } from "vue";
import type { IMarket } from "@/types/IMarket";
export default defineComponent({
  components: {
    Market,
  },
  props: {
    title: String,
    markets: { type: Array as PropType<IMarket[]>, requered: true },
  },
});
</script>

<style>
.group_title {
    background-color: #dae8f1;
    color: #1e2752;
    font-size: 20px;
    padding: 5px;
}

</style>
