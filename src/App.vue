<!--
 * @Author: along
 * @Description: 程序员盒子网站页面总入口
 * @Date: 2023-05-31 10:31:46
 * @LastEditors: along
 * @LastEditTime: 2025-03-03 09:50:04
 * @FilePath: /cxy-web-tool/src/App.vue
-->
<template>
  <CxyPopup v-if="showPopup" />
  <router-view></router-view>
  <SimulateFireworks />
  <LogVisitor />
</template>

<script setup lang="ts">
import CxyPopup from "@/components/popup/index.vue";
import { storeToRefs } from "pinia";
import { usePopupStore } from "@/store/modules/popup";
import SimulateFireworks from "@/components/simulateFireworks/index.vue";
import LogVisitor from "@/components/logVisitor/index.vue";

const store = usePopupStore();
const { showPopup } = storeToRefs(store);
</script>

<style lang="scss">
@import url("@/assets/styles/iconfont.css");
@import url("@/assets/styles/global.css");
</style>
