<!--
 * @Author: along
 * @Description: 
 * @Date: 2023-10-18 15:59:55
 * @LastEditors: along
 * @LastEditTime: 2023-10-18 18:01:21
 * @FilePath: /cxy-web-tool/src/views/swagger/api/index.vue
-->
<template>
  <div class="CxySwaggerApi">1122</div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const apiList = ref([
  {
    label: "自研",
    list: [
      {
        title: "获取图片",
        desc: "从云服务器中获取图片地址，方便快速使用",
      },
      {
        title: "上传图片",
        desc: "上传本地资源到服务器中对象COS存储中,方便管理、使用",
      },
    ],
  },
]);
</script>

<style scoped>
@import url("./index.scss");
</style>
