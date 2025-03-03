<!--
 * @Author: along
 * @Description: 
 * @Date: 2024-11-13 14:19:44
 * @LastEditors: along
 * @LastEditTime: 2025-03-03 14:32:35
 * @FilePath: /cxy-web-tool/src/views/dm/index.vue
-->

<script lang="ts" setup>
import { ref } from "vue";
import CodeEdit from "./components/CodeEdit.vue";

const activeKey = ref(0);

const tabList = ref<any>(["+ 创建", "代码库", "我的代码", "我的收藏"]);
</script>

<template>
  <div class="CxyCodeCopy">
    <div class="box">
      <i class="iconfont icon-daima2"></i>
      <div style="margin-left: 8px; margin-right: 80px">代码小抄</div>
      <div
        class="items"
        v-for="(item, index) in tabList"
        :key="index"
        :style="{ color: activeKey == index ? '#12a272' : '#fff' }"
        @click="activeKey = index"
      >
        {{ item }}
      </div>
    </div>

    <CodeEdit v-if="activeKey == 0" />
  </div>
</template>

<style lang="scss">
@import url("./index.scss");
</style>
