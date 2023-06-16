<!--
 * @Author: along
 * @Description: 程序员盒子布局
 * @Date: 2023-05-30 21:31:24
 * @LastEditors: along
 * @LastEditTime: 2023-06-16 16:57:51
 * @FilePath: /cxy-web-tool/src/components/layout/cxy-content/index.vue
-->
<template>
  <div class="cxyContent">
    <CxyHeader ref="CxyHeader" />
    <div class="cxyView">
      <router-view />
    </div>
  </div>
</template>

<script lang='ts' setup>
  import { onMounted } from "vue";
  import CxyHeader from "@/components/layout/cxy-header/index.vue";

  onMounted(() => {});
</script>

<style lang="scss">
  @import "./index.scss";
</style>
