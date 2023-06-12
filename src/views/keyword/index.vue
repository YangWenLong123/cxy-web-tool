<!--
 * @Author: along
 * @Description: 程序员盒子内容搜索
 * @Date: 2023-05-30 21:31:24
 * @LastEditors: along
 * @LastEditTime: 2023-06-12 19:45:57
 * @FilePath: /cxy-web-tool/src/views/keyword/index.vue
-->
<template>
  <div class="CxyKeyword">
    <KeywordComponents ref="KeywordComponents" />
  </div>
</template>

<script lang='ts' setup>
  import { onMounted } from "vue";
  import KeywordComponents from "@/components/keyword/index.vue";

  onMounted(() => {});
</script>

<style lang="scss">
  .CxyKeyword {
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
