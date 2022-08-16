<template>
  <tr>
    <td>{{ cartItem.market.group + "." + cartItem.market.name }}</td>
    <td><input v-model="cartItem.count" /></td>
    <td>{{ fullPrice }}</td>
    <td><button @click="deleteItem">Удалить</button></td>
    <td>{{ cartItem.market.id }}</td>
  </tr>
</template>

<script setup lang="ts">
import { ICartItem } from "@/store";
import { computed } from "vue";
import { useStore } from "vuex";

interface Props {
  cartItem: ICartItem;
}
const { cartItem } = defineProps<Props>();
const fullName = computed(
  () => cartItem.market.group + "." + cartItem.market.name
);
const fullPrice = computed(() => cartItem.market.currency * 60);

const store = useStore();

function deleteItem() {
  console.log(cartItem.market.id);
  store.commit("removeFromCart", cartItem.market.id);
}
</script>

<style scoped></style>
