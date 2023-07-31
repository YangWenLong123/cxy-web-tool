<!--
 * @Author: along
 * @Description: 标题
 * @Date: 2023-05-30 21:31:24
 * @LastEditors: along
 * @LastEditTime: 2023-07-31 17:52:58
 * @FilePath: /cxy-web-tool/src/views/upload/components/Head/index.vue
-->
<template>
  <div class="CxyHeadComponents">
    <div class="head">
      <img
        src="@/assets/images/logo.png"
        :style="{width: '90px'}"
        @click="onBackHome('http://www.alongweb.top/')"
      >
      <img
        src="http://cdn.alongweb.top/images/webbox/upload-title.jpg"
        :style="{width: '364px'}"
      >
    </div>
    <div class="flexWrap">
      <i
        class="iconfont icon-shouye"
        @click="onBackHome('http://www.alongweb.top/')"
      ></i>
      <i
        class="iconfont icon-gongju"
        @click="onBackHome('http://xyz.alongweb.top/')"
      ></i>
      <i
        class="iconfont icon-kefu"
        @click="changeRouter()"
      ></i>
    </div>
  </div>
</template>

<script lang='ts' setup>
  import { onMounted } from "vue";
  import { usePopupStore } from "@/store/modules/popup";

  const store = usePopupStore();

  onMounted(() => {});

  const onBackHome = (url: any) => {
    location.href = url;
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
