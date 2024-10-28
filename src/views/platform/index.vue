<!--
 * @Author: along
 * @Description:博客
 * @Date: 2023-05-30 21:31:24
 * @LastEditors: along
 * @LastEditTime: 2024-10-28 10:22:12
 * @FilePath: /cxy-web-tool/src/views/platform/index.vue
-->
<template>
  <div class="CxyBoKe">
    <CxyMenu ref="cxyMenuRef" />
    <CxyMain />
    <CxySide />
  </div>
</template>

<script lang="ts" setup>
import { onMounted, reactive } from "vue";
import CxyMenu from "./components/Menu/index.vue";
import CxyMain from "./components/Content/index.vue";
import CxySide from "./components/Side/index.vue";

const state = reactive({});

onMounted(() => {});
</script>

<style lang="scss">
@import "./index.scss";
</style>
