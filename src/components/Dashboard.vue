<template>
  <div class="dashboard">
    <h1 class="title">Маркет</h1>
    <Loader v-if="dashboardData.length == 0" />

    <Group
      v-else
      v-for="(group, index) in getGroups"
      :key="index"
      :title="group"
      :markets="getData(group)"
    />
  </div>
</template>

<script setup lang="ts">
import Group from "@/components/Group.vue";
import Loader from "./Loader.vue";
import { IMarketResponse } from "../types/IMarketResponse";
import { INamesResponse } from "../types/INamesResponse";
import { IMarket } from "@/types/IMarket";
import { ref, unref, computed, onMounted, watchEffect, watch } from "vue";
import { useStore } from "vuex";

const groupObject = ref<INamesResponse | undefined>(undefined);
const dashboardData = ref<IMarket[]>([]);

onMounted(async () => {
  const response = await fetch("./names.json");
  groupObject.value = (await response.json()) as INamesResponse;
});

const getGroups = computed(() => {
  if (!groupObject.value) return [];
  let groups: string[] = [];
  const entries = Object.entries(groupObject.value);
  entries.forEach((entrie) => groups.push(entrie[1].G));
  return groups;
});

const getJsonData = async () => {
  const response = await fetch("./data.json");
  return (await response.json()) as IMarketResponse;
};

const getParsedData = (json: IMarketResponse) => {
  const parsedData = json.Value.Goods.map((item) => {
    return {
      currency: item.C,
      group: getGroupName(item.G.toString()) ?? "1",
      id: item.T,
      remain: item.P,
      name: getItemName(item.G.toString(), item.T.toString()) ?? "",
    };
  });
  return parsedData;
};

function getData(group: string) {
  return unref(dashboardData).filter((item) => item.group === group);
}

function getGroupName(groupId: string) {
  if (groupObject.value) return groupObject.value[groupId].G;
}

function getItemName(groupId: string, itemId: string) {
  if (groupObject.value) {
    const group = groupObject.value[groupId];
    const itemName = group.B[itemId].N;

    return itemName;
  }
}

const recieveData = async () => {
  const json = await getJsonData();
  const parsedData = getParsedData(json);
  if (dashboardData.value) dashboardData.value = parsedData;

  console.log("Updated");
};

watch(groupObject, recieveData);

recieveData();
setInterval(recieveData, 15000);
</script>

<style>
.title {
  font-size: 32px;
  background-color: #5181b8;
  color: white;
  text-align: center;
}
</style>
