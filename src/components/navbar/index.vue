<!--
 * @Author: along
 * @Description: 
 * @Date: 2023-08-11 15:14:59
 * @LastEditors: along
 * @LastEditTime: 2024-03-29 10:11:10
 * @FilePath: /cxy-web-tool/src/components/navbar/index.vue
-->
<template>
  <div
    class="navbarComponents"
    :style="{ border: showBottom ? '1px #000000 solid' : '' }"
  >
    <div class="left" @click="onGoHome()">
      <img src="http://www.alongweb.top/image/logo.svg" alt="" />
      <div class="left_title">Web Box</div>
    </div>

    <div class="right">
      <div
        class="items"
        v-for="(record, index) in props.customNav"
        :key="index"
        @click="opNextUrl(record)"
      >
        <div class="item">
          <div class="item_text" :class="path === record.link ? 'active' : ''">
            {{ record.tooltip }}
          </div>
          <i class="iconfont" :class="record.icon"></i>
        </div>
      </div>
      <div class="lines"></div>
      <div @click="onGitHub()">
        <i class="iconfont icon-github"></i>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  reactive,
  ref,
  onMounted,
  watch,
  nextTick,
  defineProps,
  withDefaults,
} from "vue";
import router from "@/router";
import { useRouter } from "vue-router";

const routers = useRouter();
const path = ref();
const showBottom = ref(true);

type Props = {
  customNav: any;
};

const props = withDefaults(defineProps<Props>(), {});

onMounted(() => {
  nextTick(() => {
    // const dom = document.querySelector(".cxyView") as any;
    // dom.addEventListener("scroll", (e: any) => {
    //   showBottom.value = e.target?.scrollTop > 10 ? true : false;
    // });
  });
});

watch(
  () => routers.currentRoute.value,
  (newValue: any) => {
    path.value = newValue?.path;
  },
  { immediate: true }
);

const onGoHome = () => {
  window.location.href = import.meta.env.VITE_APP_HOME_API;
};

const onGitHub = () => {
  window.location.href = "https://github.com/YangWenLong123";
};

const opNextUrl = (record: any) => {
  if (record.type === "outside") {
    window.location.href = record.link;
  } else if (record.type === "station") {
    router.push({ path: record.link });
  }
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
