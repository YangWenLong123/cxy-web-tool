<!--
 * @Author: along
 * @Description:博客
 * @Date: 2023-05-30 21:31:24
 * @LastEditors: along
 * @LastEditTime: 2025-01-17 10:28:13
 * @FilePath: /cxy-web-tool/src/views/platform/index.vue
-->
<template>
  <div class="CxyBoKe">
    <div style="display: flex" v-show="!readingMode">
      <CxyMenu ref="cxyMenuRef" @change="changeIndex" />
      <CxyMain ref="cxyMainRef" @set="setPostId" />
      <CxySide />
    </div>
    <div v-show="readingMode">
      <PostsReading ref="postsReadingRef" :id="postId" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, reactive, nextTick } from "vue";
import CxyMenu from "./components/Menu/index.vue";
import CxyMain from "./components/Content/index.vue";
import CxySide from "./components/Side/index.vue";
import { appCxyStore } from "@/store/modules/cxy";
import { storeToRefs } from "pinia";
import PostsReading from "@/views/posts/index.vue";

const { readingMode } = storeToRefs(appCxyStore());

const cxyMainRef = ref<InstanceType<typeof CxyMain> | null>(null);
const postsReadingRef = ref<InstanceType<typeof PostsReading> | null>(null);

const changeIndex = (index) => {
  cxyMainRef.value?.changeIndex(index);
};

const setPostId = () => {
  nextTick(() => {
    postsReadingRef.value?.getData();
  });
};

onMounted(() => {});
</script>

<style lang="scss">
@import url("./index.scss");
</style>
