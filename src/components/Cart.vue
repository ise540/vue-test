<template>
  <div class="cart">
    <h1 class="cart_title">Корзина</h1> 
    <CartTable />
    <div v-if="store.getters.getCart.length === 0" class="cart_empty">Нет товаров</div>
    <div class="cart_price">Общая стоимость: {{ fullPrice }} руб.</div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue"
import { useStore } from "vuex";
import CartTable from "./CartTable.vue";

const store = useStore()

const fullPrice = computed(() => {
  const value = store.getters.getFullPrice * store.getters.getCurrentExchange;
  return parseFloat(value.toFixed(2))
})


</script>

<style scoped>
.cart_title{
  text-align: center;
}
.cart_price{
  font-weight: bold;
  font-size: 18px;
  text-align: end;
  padding: 10px;
}
.cart_empty{
  text-align: center;
  font-size: 20px;
}

</style>
