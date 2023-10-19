<!--
 * @Author: along
 * @Description: 程序员盒子布局
 * @Date: 2023-05-30 21:31:24
 * @LastEditors: along
 * @LastEditTime: 2023-10-18 14:26:39
 * @FilePath: /cxy-web-tool/src/components/layout/cxy-content/index.vue
-->
<template>
  <div class="cxyContent">
    <div class="cxyView">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";

onMounted(() => {});
</script>

<style lang="scss">
@import "./index.scss";
</style>
