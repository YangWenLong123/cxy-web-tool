<!--
 * @Author: along
 * @Description:博客
 * @Date: 2023-05-30 21:31:24
 * @LastEditors: along
 * @LastEditTime: 2025-01-15 11:11:17
 * @FilePath: /cxy-web-tool/src/views/platform/index.vue
-->
<template>
  <div class="CxyBoKe">
    <CxyMenu ref="cxyMenuRef" @change="changeIndex" />
    <CxyMain ref="cxyMainRef" />
    <CxySide />
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, reactive } from "vue";
import CxyMenu from "./components/Menu/index.vue";
import CxyMain from "./components/Content/index.vue";
import CxySide from "./components/Side/index.vue";

const cxyMainRef = ref<InstanceType<typeof CxyMain> | null>(null);

const changeIndex = (index) => {
  cxyMainRef.value?.changeIndex(index);
};

onMounted(() => {});
</script>

<style lang="scss">
@import url("./index.scss");
</style>
