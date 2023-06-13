<!--
 * @Author: along
 * @Description: 程序员盒子布局
 * @Date: 2023-05-30 21:31:24
 * @LastEditors: along
 * @LastEditTime: 2023-06-13 19:57:42
 * @FilePath: /cxy-web-tool/src/components/layout/cxy-content/index.vue
-->
<template>
  <div class="cxyContent">
    <div class="cxyView">
      <router-view />
    </div>
  </div>
</template>

<script lang='ts' setup>
  import { onMounted } from "vue";

  onMounted(() => {});
</script>

<style lang="scss">
  .cxyContent {
    flex: 1;
    background-color: #ffffff;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 20px 44px;
    .cxyView {
      widows: 100%;
      flex: 1;
      overflow: hidden;
      overflow-y: auto;
      color: #333;
      display: flex;
      flex-direction: column;
    }
  }
</style>
