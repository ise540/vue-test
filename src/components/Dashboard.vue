<template>
  <div class="dashboard">
    <h1 class="title">Маркет</h1> 
    <Group
      v-for="(group, index) in getGroups()"
      :key="index"
      :title="group"
      :markets="getData(group)"
    />
  </div>
</template>

<script lang="ts">
import Group from "@/components/Group.vue";
import { defineComponent } from "vue";
import dashboardData from "../assets/data.json";
import groupData from "../assets/names.json";
import type { IMarket } from "../types/IMarket";

export default defineComponent({
  data() {
    return dashboardData;
  },
  name: "Dashboard",
  components: {
    Group,
  },
  setup() {
    function getParsedData() {
      const parsedData = dashboardData.Value.Goods.map((item) => {
        return {
          currency: item.C,
          group: getGroupName(item.G),
          id: item.T,
          remain: item.P,
          name: getItemName(item.G, item.T),
        };
      });
      return parsedData as IMarket[];
    }
    function getData(group: string) {
      return getParsedData().filter((item: IMarket) => item.group === group);
    }

    function getGroupName(number: number) {
      const obj: { [index: string]: any } = groupData;
      return obj[number].G;
    }

    function getItemName(group: number, item: number) {
      const obj: { [index: string]: any } = groupData;
      return obj[group].B[item].N;
    }

    function getGroups() {
      let groups = [];
      const obj: { [index: string]: any } = groupData;
      for (let item in groupData) {
        groups.push(obj[item].G);
      }

      return groups;
    }

    return {
      getParsedData,
      getData,
      getGroupName,
      getItemName,
      getGroups,
    };
  },
});

</script>

<style>
.title {
    font-size: 32px;
    background-color: #5181b8;
    color: white;
    text-align: center;
}
</style>
