<!--
 * @Author: along
 * @Description: 程序员盒子头部icon
 * @Date: 2023-05-30 21:31:24
 * @LastEditors: along
 * @LastEditTime: 2023-06-15 21:54:06
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
        link: "http://www.alongweb.top",
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
        popup_mode: ["WeChat", "Side"],
      });
    } else {
      location.href = link;
    }
  };
</script>

<style lang="scss">
  .cxyHeaderComponents {
    color: #000;
    height: 32px;
    display: flex;
    justify-content: flex-end;
    box-sizing: border-box;
    padding-right: 32px;
    .iconfont {
      margin-left: 20px;
      font-size: 18px;
      cursor: pointer;
      color: rgba(93, 93, 93, 1);
      &:hover {
        opacity: 0.8;
      }
    }
  }
</style>
