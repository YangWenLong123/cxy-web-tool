<!--
 * @Author: along
 * @Description: 图片列表
 * @Date: 2023-05-30 21:31:24
 * @LastEditors: along
 * @LastEditTime: 2023-07-28 23:36:02
 * @FilePath: /cxy-web-tool/src/views/upload/components/List/index.vue
-->
<template>
  <div class="CxyListComponents">
    <div
      v-for="(record, index) in state.imgList"
      :key="index"
      :style="{
        background: `url(${record.url}) center center/contain no-repeat rgb(49, 49, 54)`,
      }"
      class="image-cove"
    />
  </div>
</template>

<script lang='ts' setup>
  import { onMounted, reactive } from "vue";
  import { getUserInfo } from "@/api/upload";

  const state = reactive({
    imgList: [] as any,
  });

  onMounted(async () => {
    const { data }: any = await getUserInfo();

    state.imgList = data.list || [];
  });
</script>

<style lang="scss">
  @import "./index.scss";
</style>
