<!--
 * @Author: along
 * @Description: 程序员盒子菜单
 * @Date: 2023-05-30 21:31:24
 * @LastEditors: along
 * @LastEditTime: 2023-10-17 13:14:12
 * @FilePath: /cxy-web-tool/src/components/layout/cxy-menu/index.vue
-->
<template>
  <div class="cxyMenu" :style="{ width: state.collapse ? '240px' : '70px' }">
    <div
      class="collapse"
      @click="isCollapse()"
      :style="{ left: state.collapse ? '220px' : '50px' }"
    >
      <i class="iconfont icon-zuojiantou" />
    </div>

    <div class="cxyBox">
      <img
        v-if="state.collapse"
        src="@/assets/images/logo.png"
        class="cxyLogo"
        @click="goHome()"
      />
      <img
        v-if="!state.collapse"
        src="@/assets/images/logo-small.png"
        class="cxyLogoSmall"
        @click="goHome()"
      />

      <!-- 目录 -->
      <div
        v-for="(record, index) in menuList"
        :key="index"
        class="cxyFlex"
        :style="{
          borderTop: state.collapse ? '1px rgba(0, 0, 0, 0.3) solid' : 'none',
        }"
        @click="replacePath(record.path)"
      >
        <i
          class="iconfont cxyIconfont"
          :class="record.icon"
          :style="{
            color: state.path === record.path ? '#6ee7b7' : '#ffffff',
          }"
        />
        <div
          v-if="state.collapse"
          class="cxyItems"
          :style="{
            color: state.path === record.path ? '#6ee7b7' : '#ffffff',
          }"
        >
          {{ record.title }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { appCxyStore } from "@/store/modules/cxy";
import { storeToRefs } from "pinia";

const router = useRouter();
const store = appCxyStore();

const { collapse } = storeToRefs(store);

const menuList = ref([
  { title: "内容搜索", path: "/keyword", icon: "icon-sousuo" },
  { title: "常用工具", path: "/tool", icon: "icon-xiumeigongju-" },
  // { title: "GPT", path: "/gpt", icon: "icon-wuguan" },
  {
    title: "技术社区",
    path: "/community",
    icon: "icon-shequ-weijihuo",
  },
  { title: "AI社区", path: "/ai", icon: "icon-tuandui" },
  { title: "学习平台", path: "/platform", icon: "icon-ziyuan1" },
  // { title: "常用案例", path: "/case", icon: "icon-ziyuan1" },
  // { title: "资源下载", path: "/resources", icon: "icon-ziyuan" },
  { title: "Chrome插件", path: "/chrome", icon: "icon-wulianwang-" },
  // { title: "vue社区", path: "/vue", icon: "icon-vue" },
  // { title: "react社区", path: "/react", icon: "icon-react" },
]);

const state = reactive({
  collapse: collapse,
  path: location.pathname,
});

onMounted(() => {
  console.log();
});

const isCollapse = () => {
  store.setCollapse(!state.collapse);
};

const goHome = () => {
  location.href = import.meta.env.VITE_APP_HOME_API;
};

const replacePath = (path: string) => {
  state.path = path;
  router.push({
    path,
  });
};
</script>

<style lang="scss">
@import "./index.scss";
</style>
