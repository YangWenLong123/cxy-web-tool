<!--
 * @Author: along
 * @Description: 程序员盒子内容搜索
 * @Date: 2023-05-30 21:31:24
 * @LastEditors: along
 * @LastEditTime: 2023-06-16 17:00:44
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
  @import "./index.scss";
</style>
