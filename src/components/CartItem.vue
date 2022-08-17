<template>
  <tr class="cart_item">
    <td>{{ fullName }}</td>
    <td><input class="cart_input" v-model="cartItem.count" @input="setCount" />
      шт.</td>
    <td>{{ fullPrice }} руб./шт.</td>
    <td><button class="delete_button" @click="deleteItem">Удалить</button></td>
  </tr>
</template>

<script setup lang="ts">
import { ICartItem } from "@/types/ICartItem";
import { computed } from "vue";
import { useStore } from "vuex";

interface Props {
  cartItem: ICartItem;
}
const { cartItem } = defineProps<Props>();



const store = useStore();

const setCount = () => {
  cartItem.count = Number(cartItem.count.toString().replace(/([^0-9])+/i, ""))
  store.commit("setCount", { itemId: cartItem.market.id, value: cartItem.count })
}

const deleteItem = () => {
  store.commit("removeFromCart", cartItem.market.id);
}


const fullName = computed(
  () => cartItem.market.group + ". " + cartItem.market.name
);
const fullPrice = computed(() => {
  const value = cartItem.market.currency * store.getters.getCurrentExchange;
  return value.toFixed(2)
}
);

</script>

<style scoped>
.cart_item {
  display: grid;
  grid-template-columns: 3fr 1fr 1fr 1fr;
  margin-bottom: 5px;
  padding: 2px;
  align-items: center;
  border-bottom: 1px solid black;
}

.cart_input {
  width: 50px;
  -webkit-appearance: none;
}

.cart_input::-webkit-outer-spin-button,
.cart_input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

.delete_button {
  border: 0;
  background-color: inherit;
  cursor: pointer;
}

.delete_button:hover {
  color: red;
}
</style>
