<!--
 * @Author: along
 * @Description:博客
 * @Date: 2023-05-30 21:31:24
 * @LastEditors: along
 * @LastEditTime: 2025-01-15 09:23:01
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
import { message } from "ant-design-vue";

const routers = useRouter();
const state = reactive({});

onMounted(() => {});

const onArticleContent = (type: string) => {
  const isLogin = localStorage.getItem("access_token");

  if (!isLogin) return message.warning("请先登录系统");

  router.push({ path: "/writingText" });
};
</script>

<style lang="scss">
@import url("./index.scss");
</style>
