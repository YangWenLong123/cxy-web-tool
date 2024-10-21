<!--
 * @Author: along
 * @Description: 程序员盒子头部icon
 * @Date: 2023-05-30 21:31:24
 * @LastEditors: along
 * @LastEditTime: 2024-10-21 09:17:46
 * @FilePath: /cxy-web-tool/src/components/layout/cxy-header/index.vue
-->
<template>
  <div
    class="cxyHeaderComponents"
    :style="{ border: showBottom ? '1px #000000 solid' : '' }"
  >
    <div class="flex">
      <div class="left" @click="onGoHome()">
        <img src="http://www.alongweb.top/image/logo.svg" alt="" />
        <div class="left_title">
          <!-- <img src="@/assets/images/logo2.png" style="width: 500px" /> -->
          程序员盒子
        </div>
      </div>
      <div class="right">
        <div
          class="items"
          v-for="(record, index) in state.iconList"
          :key="index"
          @click="opNextUrl(record)"
        >
          <div class="item">
            <div
              class="item_text"
              :class="path === record.link ? 'active' : ''"
            >
              {{ record.tooltip }}
            </div>
            <i class="iconfont" :class="record.icon"></i>
          </div>
        </div>
        <!-- <div class="lines"></div>
        <div @click="onGitHub()">
          <i class="iconfont icon-github"></i>
        </div> -->
      </div>
    </div>
    <div>
      <img src="@/assets/images/photo.jpeg" alt="" class="touxiang" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, reactive, watch, ref, nextTick } from "vue";
import { usePopupStore } from "@/store/modules/popup";
import router from "@/router";
import { useRouter } from "vue-router";

const store = usePopupStore();
const routers = useRouter();
const path = ref(null);
const showBottom = ref(false);
const state = reactive({
  iconList: [
    // {
    //   icon: "icon-jiantou-right-top",
    //   tooltip: "盒子首页",
    //   type: "outside",
    //   link: import.meta.env.VITE_APP_HOME_API,
    // },
    {
      icon: "",
      tooltip: "首页",
      type: "station",
      link: "/home",
    },
    {
      icon: "",
      tooltip: "文章",
      type: "station",
      link: "/platform",
    },
    // {
    //   icon: "",
    //   tooltip: "资源网站",
    //   type: "station",
    //   link: "/tool",
    // },
    // {
    //   icon: "",
    //   tooltip: "技术社区",
    //   type: "station",
    //   link: "/community",
    // },
    // {
    //   icon: "",
    //   tooltip: "AI社区",
    //   type: "station",
    //   link: "/ai",
    // },
    // {
    //   icon: "",
    //   tooltip: "学习平台",
    //   type: "station",
    //   link: "/platform",
    // },
    // {
    //   icon: "",
    //   tooltip: "Chrome插件",
    //   type: "station",
    //   link: "/chrome",
    // },
    // {
    //   icon: "icon-jiantou-right-top",
    //   tooltip: "小册",
    //   link: import.meta.env.VITE_APP_TOOL_API + "/book",
    // },
    // {
    //   icon: "icon-jiantou-right-top",
    //   tooltip: "联系客服",
    //   link: "popup",
    // },
    // {
    //   icon: "icon-jiantou-right-top",
    //   tooltip: "摸鱼社区",
    //   link: import.meta.env.VITE_APP_TOOL_API + "/lazy",
    // },
  ],
});

onMounted(() => {
  nextTick(() => {
    const dom = document.querySelector(".cxyView") as any;
    dom.addEventListener("scroll", (e: any) => {
      showBottom.value = e.target?.scrollTop > 10 ? true : false;
    });
  });
});

watch(
  () => routers.currentRoute.value,
  (newValue: any) => {
    path.value = newValue?.path;
  },
  { immediate: true }
);

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

const onGoHome = () => {
  window.location.href = import.meta.env.VITE_APP_HOME_API;
};

const changeRouter = (link: string) => {
  if (link === "popup") {
    store.setPopup({
      showPopup: true,
      popup_type: "1",
      popup_mode: ["WeChat"],
    });
  } else {
    location.href = link;
  }
};
</script>

<style lang="scss">
@import "./index.scss";
</style>
