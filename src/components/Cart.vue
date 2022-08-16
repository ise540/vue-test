<template>
  <table>
    <tr>
      <th>Наименование товара и описание</th>
      <th>Количество</th>
      <th>Цена</th>
      <th />
    </tr>
    <CartItem v-for="item in store.getters.getState" :cartItem="item" />
  </table>
</template>

<script setup lang="ts">
import { useStore } from "vuex";
import { ref } from "vue";
import CartItem from "./CartItem.vue";

const store = useStore();

</script>

<style scoped></style>
