<!--
 * @Author: along
 * @Description:
 * @Date: 2023-08-07 14:44:13
 * @LastEditors: along
 * @LastEditTime: 2024-03-29 10:10:30
 * @FilePath: /cxy-web-tool/src/views/swagger/index.vue
-->
<template>
  <div class="CxySwagger">
    <navbar :customNav="customNav" />
    <router-view />
  </div>
</template>

<script lang="ts" setup>
import navbar from "@/components/navbar/index.vue";
import { ref } from "vue";

const customNav = ref<any>([
  {
    icon: "icon-jiantou-right-top",
    tooltip: "盒子首页",
    type: "outside",
    link: import.meta.env.VITE_APP_HOME_API,
  },
  {
    icon: "",
    tooltip: "开放API",
    type: "station",
    link: "/swagger-api",
  },
  {
    icon: "",
    tooltip: "API在线调试",
    type: "station",
    link: "/swagger-aigc",
  },
]);
</script>

<style lang="scss">
.CxySwagger {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: #1e1e20;
  overflow-y: auto;
}
</style>
