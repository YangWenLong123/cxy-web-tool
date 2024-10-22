<!--
 * @Author: along
 * @Description: 
 * @Date: 2024-10-21 10:56:20
 * @LastEditors: along
 * @LastEditTime: 2024-10-22 16:31:55
 * @FilePath: /cxy-web-tool/src/components/keyword/components/Menu/index.vue
-->
<template>
  <div
    class="CxyHomeMenuComponents"
    :style="{ height: 45 * menuList.length + 16 + 'px' }"
  >
    <div
      class="box"
      v-for="(item, index) in menuList"
      :key="item.name"
      :class="currentIndex === index ? 'active' : ''"
      @click="onChangeItem(index, item)"
    >
      <i class="iconfont" :class="item.icon"></i>
      <div class="name">{{ item.name }}</div>
    </div>
  </div>

  <div v-if="isFixed" style="width: 180px"></div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { debounce } from "@/utils/index";

const currentIndex = ref<number>(0);

const isFixed = ref<boolean>(false);

const menuList = ref<any>([
  {
    icon: "icon-zonghe",
    name: "综合",
    id: "itemBox",
  },
  {
    icon: "icon-shiyongshouce",
    name: "常用手册",
    id: "studyManual",
  },
  {
    icon: "icon-AI-money",
    name: "AI大模型",
    id: "AIModal",
  },
  {
    icon: "icon-shequ",
    name: "技术社区",
    id: "techCommunity",
  },
  {
    icon: "icon-tuandui1",
    name: "技术团队",
    id: "techType",
  },
  {
    icon: "icon-chuangyejiuye",
    name: "创业",
    id: "startup",
  },
  {
    icon: "icon-a-5b5560fa46f35d0572b18d9c219238c01",
    name: "摸鱼划水",
    id: "slacking",
  },
  {
    icon: "icon-qiuzhi",
    name: "求职",
  },
  {
    icon: "icon-bangong",
    name: "协同办公",
  },
  {
    icon: "icon-kecheng",
    name: "精品课程",
  },
  {
    icon: "icon-xuexi",
    name: "学习",
  },
]);

onMounted(() => {
  // const debouncedScroll = debounce(handleScroll, 60);

  document.querySelector(".cxyView").addEventListener("scroll", handleScroll);
});

const handleScroll = (e: any) => {
  const { scrollTop } = e.srcElement;
  console.log("scrollTop>>>>>", scrollTop);

  if (scrollTop >= 135) {
    isFixed.value = true;
    document.querySelector(".CxyHomeMenuComponents").style.position = "fixed";
    document.querySelector(".CxyHomeMenuComponents").style.top = "60px";
    document.querySelector(".CxyHomeMenuComponents").style.left =
      (document.querySelector("body").offsetWidth - 1300) / 2 + "px";
    document.querySelector(".CxyHomeMenuComponents").style.zIndex = "10px";
  } else {
    isFixed.value = false;
    document.querySelector(".CxyHomeMenuComponents").style.position = "";
  }
};

const onChangeItem = (index: number, item: any) => {
  currentIndex.value = index;

  document.getElementById(item?.id).scrollIntoView({ behavior: "smooth" });
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
