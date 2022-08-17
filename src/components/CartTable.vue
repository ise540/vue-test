<template lang="">
    <table class="table">
      <tr class="table_head">
        <th>Наименование товара и описание</th>
        <th>Количество</th>
        <th>Цена</th>
        <th>Удалить</th>
      </tr>
      <CartItem v-for="item in store.getters.getCart" :cartItem="item" :key='item.market.id' />
    </table>
</template>

<script setup lang="ts">
import CartItem from "./CartItem.vue";
import { useStore } from "vuex";

const store = useStore();
</script>


<style>
.table_head {
    display: grid;
    grid-template-columns: 3fr 1fr 1fr 1fr;
    margin-bottom: 5px;
    border-bottom: 1px solid black;
}

.table_head th {
    text-align: start;
}

.table {
    width: 100vw
}
</style>