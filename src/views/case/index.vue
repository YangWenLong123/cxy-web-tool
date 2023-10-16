<!--
 * @Author: along
 * @Description: 
 * @Date: 2023-10-13 17:24:55
 * @LastEditors: along
 * @LastEditTime: 2023-10-13 17:55:13
 * @FilePath: /cxy-web-tool/src/views/case/index.vue
-->
<template>
  <div class="CxyCase">
    <div class="cxyItems" v-for="(record, index) in caseList" :key="index">
      <a-button type="primary" @click="onNext(record.path)">
        {{ record.label }}
      </a-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import router from "@/router";
import { ref } from "vue";

const caseList = ref([
  {
    label: "鼠标右键创建菜单",
    path: "/contextMenu",
  },
]);

const onNext = (path: string) => {
  router.push({ path: path });
};
</script>

<style lang="scss">
@import url("./index.scss");
</style>
