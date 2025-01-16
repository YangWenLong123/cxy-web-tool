<!--
 * @Author: along
 * @Description: 程序员盒子内容搜索
 * @Date: 2023-05-30 21:31:24
 * @LastEditors: along
 * @LastEditTime: 2024-10-24 13:09:19
 * @FilePath: /cxy-web-tool/src/views/keyword/index.vue
-->
<template>
  <div class="CxyKeyword">
    <KeywordComponents ref="KeywordComponents" />
    <div class="footer" @click="goGov()">
      Copyright © 2023 Web Box 皖ICP备2023007113号
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import KeywordComponents from "@/components/keyword/index.vue";

onMounted(() => {});

const goGov = () => {
  window.open("https://beian.miit.gov.cn/");
};
</script>

<style lang="scss">
@import url("./index.scss");
</style>
