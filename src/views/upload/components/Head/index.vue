<!--
 * @Author: along
 * @Description: 标题
 * @Date: 2023-05-30 21:31:24
 * @LastEditors: along
 * @LastEditTime: 2023-07-28 21:13:52
 * @FilePath: /cxy-web-tool/src/views/upload/components/Head/Head.vue
-->
<template>
  <div class="CxyHeadComponents">
    <div class="head">
      <img
        src="@/assets/images/logo.png"
        :style="{width: '90px'}"
      >
      <img
        src="http://cdn.alongweb.top/images/webbox/upload-title.jpg"
        :style="{width: '364px'}"
      >
    </div>
  </div>
</template>

<script lang='ts' setup>
  import { onMounted } from "vue";

  onMounted(() => {});
</script>

<style lang="scss">
  @import "./index.scss";
</style>
