<!--
 * @Author: along
 * @Description: 程序员盒子布局入口
 * @Date: 2023-05-30 21:31:24
 * @LastEditors: along
 * @LastEditTime: 2023-06-09 17:00:08
 * @FilePath: /cxy-web-tool/src/components/layout/index.vue
-->
<template>
  <div class="layoutPage">
    <CxyMenu ref="CxyMenu" />
    <CxyContent ref="CxyContent" />
  </div>
</template>

<script lang='ts' setup>
  import { onMounted } from "vue";
  import CxyMenu from "./cxy-menu/index.vue";
  import CxyContent from "./cxy-content/index.vue";

  onMounted(() => {});
</script>

<style lang="scss">
  .layoutPage {
    width: 100%;
    flex: 1;
    display: flex;
    overflow: hidden;
  }
</style>
