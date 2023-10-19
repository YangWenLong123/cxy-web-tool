<!--
 * @Author: along
 * @Description:
 * @Date: 2023-08-07 14:44:13
 * @LastEditors: along
 * @LastEditTime: 2023-10-18 16:03:29
 * @FilePath: /cxy-web-tool/src/views/swagger/index.vue
-->
<template>
  <div class="CxySwagger">
    <navbar />
    <router-view />
  </div>
</template>

<script lang="ts" setup>
import navbar from "@/components/navbar/index.vue";
</script>

<style lang="scss">
.CxySwagger {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: #1e1e20;
}
</style>
