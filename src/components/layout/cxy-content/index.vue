<!--
 * @Author: along
 * @Description: 程序员盒子布局
 * @Date: 2023-05-30 21:31:24
 * @LastEditors: along
 * @LastEditTime: 2023-06-09 16:40:08
 * @FilePath: /cxy-web-tool/src/components/layout/cxy-content/index.vue
-->
<template>
  <div class="cxyContent" />
</template>

<script lang='ts' setup>
  import { onMounted } from "vue";

  onMounted(() => {});
</script>

<style lang="scss">
  .cxyContent {
    flex: 1;
    background-color: #fff;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }
</style>
