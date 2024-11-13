<!--
 * @Author: along
 * @Description:博客
 * @Date: 2023-05-30 21:31:24
 * @LastEditors: along
 * @LastEditTime: 2024-11-13 09:08:59
 * @FilePath: /cxy-web-tool/src/views/platform/components/Side/index.vue
-->
<template>
  <div class="CxyPlatformSide">
    <div class="card">
      <div class="card-item">
        <div class="card-title">{{ isMorningOrAfternoon() }}好!</div>
        <div class="card-desc">点亮在社区的每一天</div>
      </div>
      <div class="card-button" @click="onArticleContent('info')">写文章</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, reactive } from "vue";
import { isMorningOrAfternoon } from "@/utils/index";
import { notification } from "ant-design-vue";
import router from "@/router";
import { useRouter } from "vue-router";

const routers = useRouter();
const state = reactive({});

onMounted(() => {});

const onArticleContent = (type: string) => {
  // notification[type]({
  //   message: "提示",
  //   description: "正在开发中",
  // });

  router.push({ path: "/writingText" });
};
</script>

<style lang="scss">
@import "./index.scss";
</style>
