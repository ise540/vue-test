<template>
  <div class="dashboard">
    <h1 class="title">Маркет</h1>
    <Loader v-if="dashboardData.length == 0" />
    <Group v-else v-for="(group, index) in getGroups" :key="index" :title="group" :markets="getData(group)" />
  </div>
</template>

<script setup lang="ts">
import Group from "@/components/Group.vue";
import groupData from "@/assets/names.json" 
import { IMarketResponse } from "../types/IMarketResponse";
import { INamesResponse } from "../types/INamesResponse"
import { IMarket } from "@/types/IMarket";
import { ref, unref, computed } from "vue"
import Loader from "./Loader.vue"

const dashboardData = ref<IMarket[]>([])

const getJson = async () => {
  const rawData = await import("../assets/data.json");
  return rawData;
}

const getParsedData = (json: IMarketResponse) => {
  const parsedData = json.Value.Goods.map((item) => {
    return {
      currency: item.C,
      group: getGroupName(item.G),
      id: item.T,
      remain: item.P,
      name: getItemName(item.G, item.T),
    };
  });
  return parsedData;
};

function getData(group: string) {
  return unref(dashboardData).filter((item) => item.group === group);
}

function getGroupName(number: number) {
  const group = Object.entries(groupData).find(item => item[0] === number.toString())
  return group![1].G
}

function getItemName(groupNumber: number, itemNumber: number) {
  const item = Object.entries(groupData).find(([key, item]) => key === groupNumber.toString())
  const object = Object.entries(item![1].B).find(item => item[0] === itemNumber.toString())
  return object?.[1].N;
}

const getGroups = computed(() => {
  let groups = [];
  const obj: { [index: string]: any } = groupData;
  for (let item in groupData) {
    groups.push(groupData[item].G);
  }

  return groups;
})

const recieveData = async () => {
  const json = await getJson()
  const parsedData = getParsedData(json)
  dashboardData.value = parsedData;
}

recieveData();

setInterval(recieveData
  , 3000);

</script>

<style>
.title {
  font-size: 32px;
  background-color: #5181b8;
  color: white;
  text-align: center;
}
</style>
