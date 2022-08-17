<template>
    <div>
        <p>Текущий курс</p>
        <input v-model="currentExchange" @input="setExchange" />
    </div>
</template>

<script setup lang="ts">
import { useStore } from 'vuex';
import { ref } from 'vue';

const store = useStore()
const currentExchange = ref(store.getters.getCurrentExchange)

const setExchange = () => {
    currentExchange.value = Number(currentExchange.value.toString().replace(/([^0-9])+/i, ""))
    store.commit("setCurrentExchange", currentExchange.value)
}
</script>

<style>
</style>
