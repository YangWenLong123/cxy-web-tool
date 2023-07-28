<!--
 * @Author: along
 * @Description: 程序员盒子内容搜索
 * @Date: 2023-05-30 21:31:24
 * @LastEditors: along
 * @LastEditTime: 2023-07-26 10:36:43
 * @FilePath: /cxy-web-tool/src/views/gpt/index.vue
-->
<template>
  <div class="CxyGpt">
    <View />
    <TextArea />
  </div>
</template>

<script lang='ts' setup>
  import { onMounted } from "vue";
  import View from "./components/view/view.vue";
  import TextArea from "./components/textarea/textarea.vue";

  onMounted(() => {});
</script>

<style lang="scss">
  @import "./index.scss";
</style>
