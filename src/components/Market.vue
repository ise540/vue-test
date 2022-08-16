<template>
  <div @click="addToCart" class="market">
    <p>
      {{ marketDescription }}
    </p>
    <div class="market_currency">
      <span>{{ market.currency }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { IMarket } from "@/types/IMarket";
import { useStore } from "vuex";

interface Props {
  market: IMarket;
}
const { market } = defineProps<Props>();

const marketDescription = computed(() => {
  return market.name + " (" + market.remain + ")";
});

const store = useStore();
const addToCart = () => store.commit("addToCart", market);
</script>

<style>
.market {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid black;
  padding: 3px;
  cursor: pointer;
}
.market:hover {
  background-color: tan;
}
.market_currency {
  background-color: #cecccc;
  width: 60px;
  text-align: center;
}
</style>
