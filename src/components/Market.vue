<template>
  <div @click="addItem" class="market">
    <p>
      {{ marketDescription }}
    </p>
    <div class="market_currency">
      <span>{{ marketPrice }}</span>
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

const marketPrice = computed(() => {
  return parseFloat(
    (store.getters.getCurrentExchange * market.currency).toFixed(2)
  );
});

const store = useStore();
const addItem = () => store.commit("addToCart", market);
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
  width: 80px;
  text-align: center;
}
</style>
