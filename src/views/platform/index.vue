<!--
 * @Author: along
 * @Description:博客
 * @Date: 2023-05-30 21:31:24
 * @LastEditors: along
 * @LastEditTime: 2025-02-28 10:02:56
 * @FilePath: /cxy-web-tool/src/views/platform/index.vue
-->

<script lang="ts" setup>
import { ref, onMounted, reactive, nextTick } from "vue";
import CxyMenu from "./components/Menu/index.vue";
import CxyMain from "./components/Content/index.vue";
import CxySide from "./components/Side/index.vue";
import { appCxyStore } from "@/store/modules/cxy";
import { storeToRefs } from "pinia";
import PostsReading from "@/views/posts/index.vue";

const spinning = ref(false);

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

const showloading = () => {
  spinning.value = true;
};

const hideloading = () => {
  spinning.value = false;
};

onMounted(() => {});
</script>

<template>
  <div class="CxyBoKe">
    <a-spin :spinning="spinning">
      <div style="display: flex" v-show="!readingMode">
        <CxyMenu ref="cxyMenuRef" @change="changeIndex" />
        <CxyMain ref="cxyMainRef" @set="setPostId" @showloading="showloading" />
        <CxySide />
      </div>
      <div v-show="readingMode">
        <PostsReading
          ref="postsReadingRef"
          :id="postId"
          @hideloading="hideloading"
        />
      </div>
    </a-spin>
  </div>
</template>

<style lang="scss">
@import url("./index.scss");
</style>
