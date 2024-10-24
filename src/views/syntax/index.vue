<!--
 * @Author: along
 * @Description: 程序员盒子常用工具
 * @Date: 2023-05-30 21:31:24
 * @LastEditors: along
 * @LastEditTime: 2024-10-24 13:17:34
 * @FilePath: /cxy-web-tool/src/views/syntax/index.vue
-->
<template>
  <div class="CxySyntax">
    <div id="navbar">
      <div class="logo" @click="goHome">
        <img
          src="http://www.alongweb.top/image/logo.svg"
          class="logo_img"
          style="width: 32px"
        />
        <div class="title">Web Box</div>
      </div>

      <div
        v-for="(item, i) in treeList"
        :key="i"
        class="border-item"
        :style="{ color: i === currentIndex ? '#fff' : '#999' }"
        @click="onChangeItem(i)"
      >
        {{ item.title }}
      </div>
    </div>

    <div class="mainBox">
      <div class="main">
        <div
          v-for="(item, i) in treeList[currentIndex].children"
          :key="i"
          class="tree_item"
          :style="{ background: backgroundList[i] }"
        >
          <div class="board-title">{{ item.title }}</div>

          <div v-for="(child, j) in item.children" :key="j" class="board-card">
            <div class="board-card-title">
              <div v-html="child.title"></div>
            </div>

            <div v-for="(grandChild, k) in child.children" :key="k">
              <div
                class="board-card-content"
                :class="grandChild.url ? 'underline' : ''"
                @click="goUrl(grandChild)"
                :style="{ color: !grandChild.url ? '#eee' : '#fff' }"
              >
                <div v-html="grandChild.title"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div :style="{ height: '24px' }"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, nextTick } from "vue";

import { javascript } from "./config/javascript";
import { jquery } from "./config/jquery";
import { HTML } from "./config/HTML";
import { CSS } from "./config/css";

const currentIndex = ref<number>(0);

const backgroundList = ref<Array>([
  "rgba(14, 251, 252, 0.25)",
  "rgba(158, 134, 255, 0.25)",
  "rgba(60, 255, 20, 0.25)",
  "rgba(44, 158, 52, 0.25)",
  "rgba(225, 211, 20, 0.25)",
  "rgba(100, 117, 121, 0.25)",
  "rgba(251, 34, 240, 0.25)",
  "rgba(14, 251, 252, 0.25)",
  "#714AE8",
  "#4263EB",
  "#FD836E",
  "#F6C1C1",
  "#55262D",
]);

const treeList = ref([
  {
    title: "JavaScript",
    children: [...javascript],
  },
  {
    title: "Jquery",
    children: [...jquery],
  },
  {
    title: "HTML",
    children: [...HTML],
  },
  {
    title: "CSS",
    children: [...CSS],
  },
]);

const goHome = () => {
  window.location.href = "http://www.alongweb.top";
};

const goUrl = (item) => {
  if (item?.disabled) return;
  window.open(item.url);
};

const initMasonry = () => {
  const main = document.querySelector(".main");
  const columnWidth = 230;
  let columnCount = Math.floor(main.offsetWidth / columnWidth);

  let columnHeights = new Array(columnCount).fill(0);

  const treeItems = document.querySelectorAll(".tree_item");

  treeItems.forEach((item) => {
    let minColumnHeight = Math.min(...columnHeights);
    let columnIndex = columnHeights.indexOf(minColumnHeight);
    const leftMargin = columnIndex * columnWidth;
    const topMargin = minColumnHeight + 50;
    item.style.position = "absolute";
    item.style.left = `${leftMargin + 20}px`;
    item.style.top = `${topMargin}px`;
    columnHeights[columnIndex] += item.offsetHeight + 10;
  });

  getItemHeight();
};

const onChangeItem = (i) => {
  currentIndex.value = i;

  nextTick(() => {
    initMasonry();
  });
};

const getItemHeight = () => {
  nextTick(() => {
    const items = Array.from(document.querySelectorAll(".tree_item"));

    if (items?.length) {
      const height = items.map((el) => el.offsetHeight);
      const maxHeight = Math.max(...height);

      document.querySelector(".main").style.height = maxHeight + 50 + "px";
    }
  });
};

onMounted(() => {
  initMasonry();
  window.addEventListener("resize", initMasonry);
});
</script>

<style lang="scss">
@import "./index.scss";
</style>
