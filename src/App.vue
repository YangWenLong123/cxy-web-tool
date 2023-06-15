<!--
 * @Author: along
 * @Description: 程序员盒子网站页面总入口
 * @Date: 2023-05-31 10:31:46
 * @LastEditors: along
 * @LastEditTime: 2023-06-15 13:52:50
 * @FilePath: /cxy-web-tool/src/App.vue
-->
<template>
  <CxyPopup v-if="showPopup" />
  <router-view></router-view>
</template>

<script setup lang="ts">
  import CxyPopup from "@/components/popup/index.vue"; //全局弹窗通知
  import { storeToRefs } from "pinia";
  import { usePopupStore } from "@/store/modules/popup";

  const store = usePopupStore();

  const { showPopup } = storeToRefs(store);
</script>

<style lang="scss">
  @import url("@/assets/styles/iconfont.css");
  @import url("@/assets/styles/global.css");
</style>
