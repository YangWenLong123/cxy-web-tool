<!--
 * @Author: along
 * @Description: 程序员盒子首页
 * @Date: 2023-05-30 21:31:24
 * @LastEditors: along
 * @LastEditTime: 2023-06-08 21:32:38
 * @FilePath: /cxy-web-tool/src/views/index.vue
-->
<template>
  <div class="container">
    <!--  -->
  </div>
</template>

<script lang='ts' setup>
  import { useUserStore } from "@/store";
  import { getUserInfo } from "@/api/demo.js";
  import { onMounted } from "vue";

  onMounted(() => {});
</script>

<style lang="scss">
  .container {
    width: 1200px;
    margin: 0 auto;
    flex: 1;
    border: 1px red solid;
    overflow: hidden;
  }
</style>
