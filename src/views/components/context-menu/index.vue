<!--
 * @Author: along
 * @Description: 
 * @Date: 2023-10-13 17:35:11
 * @LastEditors: along
 * @LastEditTime: 2024-06-12 14:34:36
 * @FilePath: /cxy-web-tool/src/views/components/context-menu/index.vue
-->
<template>
  <div class="CxyContextMenu">
    <div class="nav" @click="onBack()">返回</div>
    <div class="box" @click.native.right="onNativeRight()"></div>
  </div>

  <Contextmenu />
</template>

<script setup>
import Contextmenu from "@/components/contextMenu/index.vue";
import router from "@/router";

const onNativeRight = () => {
  console.log("context menu");
};

const onBack = () => {
  router.go(-1);
};
</script>

<style lang="scss">
@import url("./index.scss");
</style>
