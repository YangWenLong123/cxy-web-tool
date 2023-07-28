<!--
 * @Author: along
 * @Description: 程序员盒子头部icon
 * @Date: 2023-05-30 21:31:24
 * @LastEditors: along
 * @LastEditTime: 2023-07-09 11:14:46
 * @FilePath: /cxy-web-tool/src/components/layout/cxy-header/index.vue
-->
<template>
  <div class="cxyHeaderComponents">
    <a-tooltip
      v-for="(record, index) in state.iconList"
      :key="index"
      placement="bottom"
    >
      <template #title>
        <span>{{ record.tooltip }}</span>
      </template>
      <i
        class="iconfont"
        :class="record.icon"
        @click="changeRouter(record.link)"
      />
    </a-tooltip>
  </div>
</template>

<script lang='ts' setup>
  import { onMounted, reactive } from "vue";
  import { usePopupStore } from "@/store/modules/popup";

  const store = usePopupStore();

  const state = reactive({
    iconList: [
      {
        icon: "icon-shouye",
        tooltip: "盒子首页",
        link: "http://www.zxxweb.top",
      },
      {
        icon: "icon-navicon-wzgl",
        tooltip: "小册",
        link: import.meta.env.VITE_APP_BASE_API + "/book",
      },
      {
        icon: "icon-kefu",
        tooltip: "联系客服",
        link: "popup",
      },
      {
        icon: "icon-yu",
        tooltip: "摸鱼社区",
        link: import.meta.env.VITE_APP_BASE_API + "/lazy",
      },
    ],
  });

  onMounted(() => {});

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
