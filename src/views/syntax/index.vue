<!--
 * @Author: along
 * @Description: 程序员箱子常用工具
 * @Date: 2023-05-30 21:31:24
 * @LastEditors: along
 * @LastEditTime: 2025-01-17 17:37:27
 * @FilePath: /cxy-web-tool/src/views/syntax/index.vue
-->
<template>
  <div class="CxySyntax">
    <!-- <div class="gradient-bg"></div> -->

    <div id="navbar">
      <!-- <div class="logo" @click="goHome">
        <img
          src="http://www.alongweb.top/image/logo.svg"
          class="logo_img"
          style="width: 32px"
        />
        <div class="title">Web Box</div>
      </div> -->

      <!-- <a-input
        v-model:value="keyword"
        style="width: 600px; margin-top: 32px; margin-bottom: 20px"
        size="large"
      /> -->

      <div style="display: flex; align-items: center; justify-content: center">
        <div
          v-for="(item, i) in treeList"
          :key="i"
          class="category-item"
          :class="{ actives: selectedCategory === item.title }"
          @click="onChangeItem(item, i)"
        >
          {{ item.icon }} {{ item.title }}
        </div>
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
import { NodeJs } from "./config/NodeJs";
import { Python } from "./config/Python";

const keyword = ref("");
const selectedCategory = ref("JavaScript");

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
  "#00CAFE",
  "#0650B5",
  "#192E44",
  "#FF8435",
  "#55262D",
]);

const treeList = ref([
  {
    title: "JavaScript",
    children: [...javascript],
    icon: "🐶",
  },
  {
    title: "Jquery",
    children: [...jquery],
    icon: "🐱",
  },
  {
    title: "HTML",
    children: [...HTML],
    icon: "🐷",
  },
  {
    title: "CSS",
    children: [...CSS],
    icon: "🐑",
  },
  {
    title: "NodeJs",
    children: [...NodeJs],
    icon: "🐮",
  },
  {
    title: "Python",
    children: [...Python],
    icon: "🐯",
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
    const topMargin = minColumnHeight + 10;
    item.style.position = "absolute";
    item.style.left = `${leftMargin + 50}px`;
    item.style.top = `${topMargin}px`;
    columnHeights[columnIndex] += item.offsetHeight + 10;
  });

  getItemHeight();
};

const onChangeItem = (item, i) => {
  selectedCategory.value = item.title;
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
@import url("./index.scss");
</style>
