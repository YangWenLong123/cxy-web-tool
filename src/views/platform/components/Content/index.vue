<!--
 * @Author: along
 * @Description:博客
 * @Date: 2023-05-30 21:31:24
 * @LastEditors: along
 * @LastEditTime: 2024-10-28 11:18:35
 * @FilePath: /cxy-web-tool/src/views/platform/components/Content/index.vue
-->
<template>
  <div class="CxyPlatformMain">
    <a-tabs v-model:activeKey="activeKey">
      <a-tab-pane key="1" tab="推荐"></a-tab-pane>
      <a-tab-pane key="2" tab="最新"></a-tab-pane>
    </a-tabs>

    <a-empty description="开发中" style="margin-top: 100px" />
  </div>
</template>

<script lang="ts" setup>
import { onMounted, reactive, ref } from "vue";

const activeKey = ref<string>("1");

const state = reactive({});

onMounted(() => {});
</script>

<style lang="scss">
@import "./index.scss";
</style>
