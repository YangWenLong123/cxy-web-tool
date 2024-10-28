<!--
 * @Author: along
 * @Description: 
 * @Date: 2024-10-21 10:56:20
 * @LastEditors: along
 * @LastEditTime: 2024-10-28 10:17:04
 * @FilePath: /cxy-web-tool/src/views/platform/components/Menu/index.vue
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
    name: "HTML5",
    id: "itemBox",
  },
  {
    icon: "icon-shiyongshouce",
    name: "CSS3",
    id: "studyManual",
  },
  {
    icon: "icon-AI-money",
    name: "JavaScript",
    id: "AIModal",
  },
  {
    icon: "icon-shequ",
    name: "设计模式",
    id: "techCommunity",
  },
  {
    icon: "icon-tuandui1",
    name: "TypeScript",
    id: "techType",
  },
  {
    icon: "icon-chuangyejiuye",
    name: "数据结构",
    id: "startup",
  },
  {
    icon: "icon-a-5b5560fa46f35d0572b18d9c219238c01",
    name: "Vue2",
    id: "slacking",
  },
  {
    icon: "icon-qiuzhi",
    name: "Vue3",
    id: "worker",
  },
  {
    icon: "icon-bangong",
    name: "react",
    id: "collabOffice",
  },
  {
    icon: "icon-kecheng",
    name: "uniapp",
    id: "course",
  },
  {
    icon: "icon-xuexi",
    name: "小程序",
    id: "study",
  },
]);

onMounted(() => {});

const onChangeItem = (index: number, item: any) => {
  currentIndex.value = index;
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
