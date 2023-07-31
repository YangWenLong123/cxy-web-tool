<!--
 * @Author: along
 * @Description: 图片上传
 * @Date: 2023-05-30 21:31:24
 * @LastEditors: along
 * @LastEditTime: 2023-07-31 17:20:23
 * @FilePath: /cxy-web-tool/src/views/upload/index.vue
-->
<template>
  <div class="CxyUpload">

    <Head ref="Head" />
    <Search
      ref="Search"
      @click="onSuccess()"
      @loading="onLoading()"
    />
    <List ref="listComponents" />
  </div>
</template>

<script lang='ts' setup>
  import { onMounted, ref, reactive } from "vue";
  import Head from "./components/Head/index.vue";
  import Search from "./components/Search/index.vue";
  import List from "./components/List/index.vue";

  const listComponents = ref(null);

  onMounted(() => {});

  const onSuccess = () => {
    listComponents.value.init();
  };

  const onLoading = () => {
    listComponents.value.showLoading();
  };
</script>

<style lang="scss">
  @import "./index.scss";
</style>
