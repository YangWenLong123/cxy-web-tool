<!--
 * @Author: along
 * @Description: 图片上传
 * @Date: 2023-05-30 21:31:24
 * @LastEditors: along
 * @LastEditTime: 2023-07-28 21:24:18
 * @FilePath: /cxy-web-tool/src/views/upload/index.vue
-->
<template>
  <div class="CxyUpload">

    <Head />
    <Search />
    <List />
  </div>
</template>

<script lang='ts' setup>
  import { onMounted } from "vue";
  import Head from "./components/Head/index.vue";
  import Search from "./components/Search/index.vue";
  import List from "./components/List/index.vue";

  onMounted(() => {});
</script>

<style lang="scss">
  @import "./index.scss";
</style>
