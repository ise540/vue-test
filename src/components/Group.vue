<template>
  <div>
    <div class="group_title">{{ title }}</div>
    <Market v-for="(market, index) in markets" :key="index" :market="market" />
  </div>
</template>

<script setup lang="ts">
import Market from "@/components/Market.vue";
import type { IMarket } from "@/types/IMarket";

interface Props {
  title: string,
  markets: IMarket[]
}

const { title, markets } = defineProps<Props>();

</script>

<style>
.group_title {
  background-color: #dae8f1;
  color: #1e2752;
  font-size: 20px;
  padding: 5px;
}
</style>
