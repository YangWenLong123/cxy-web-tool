<!--
 * @Author: along
 * @Description: 标题
 * @Date: 2023-05-30 21:31:24
 * @LastEditors: along
 * @LastEditTime: 2023-08-04 13:45:48
 * @FilePath: /cxy-web-tool/src/views/upload/components/Head/index.vue
-->
<template>
  <div class="CxyHeadComponents">
    <div class="head">
      <img
        src="@/assets/images/logo.png"
        :style="{ width: '90px' }"
        @click="onBackHome(1)"
      />
      <img
        src="http://cdn.alongweb.top/images/webbox/upload-title.jpg"
        :style="{ width: '364px' }"
        @click="onBackHome(1)"
      />
    </div>
    <div class="flexWrap">
      <i class="iconfont icon-shouye" @click="onBackHome(1)"></i>
      <i class="iconfont icon-gongju" @click="onBackHome(2)"></i>
      <i class="iconfont icon-kefu" @click="changeRouter()"></i>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import { usePopupStore } from "@/store/modules/popup";

const store = usePopupStore();

onMounted(() => {});

const onBackHome = (type: number) => {
  if (type === 1) {
    location.href = import.meta.env.VITE_APP_HOME_API;
  } else if (type === 2) {
    location.href = import.meta.env.VITE_APP_TOOL_API;
  }
};

const changeRouter = () => {
  store.setPopup({
    showPopup: true,
    popup_type: "1",
    popup_mode: ["WeChat"],
  });
};
</script>

<style lang="scss">
@import "./index.scss";
</style>
