<!--
 * @Author: along
 * @Description: 程序员箱子布局入口
 * @Date: 2023-05-30 21:31:24
 * @LastEditors: along
 * @LastEditTime: 2024-10-24 13:05:51
 * @FilePath: /cxy-web-tool/src/components/layout/index.vue
-->
<template>
  <div class="layoutPage">
    <!-- <CxyMenu ref="CxyMenu" /> -->
    <CxyHeader ref="CxyHeader" />
    <CxyContent ref="CxyContent" />
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
// import CxyMenu from "@/components/layout/cxy-menu/index.vue";
import CxyContent from "@/components/layout/cxy-content/index.vue";
import CxyHeader from "@/components/layout/cxy-header/index.vue";

onMounted(() => {});
</script>

<style lang="scss">
.layoutPage {
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
</style>
