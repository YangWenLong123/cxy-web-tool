<!--
 * @Author: along
 * @Description: 
 * @Date: 2024-10-21 10:56:20
 * @LastEditors: along
 * @LastEditTime: 2025-03-03 10:24:09
 * @FilePath: /cxy-web-tool/src/views/platform/components/Menu/index.vue
-->
<template>
  <div
    class="CxyHomeMenuComponents2"
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

const emits = defineEmits(["change"]);

const currentIndex = ref<number>(0);
const isFixed = ref<boolean>(false);

const menuList = ref<any>([
  {
    icon: "icon-quanbu",
    name: "全部",
    id: "all",
  },
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
    icon: "icon-chuangyejiuye",
    name: "数据结构",
    id: "startup",
  },
  {
    icon: "icon-tuandui1",
    name: "TypeScript",
    id: "techType",
  },
  {
    icon: "icon-qiuzhi",
    name: "Vue",
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
  {
    icon: "icon-xingnengyouhua",
    name: "性能优化",
    id: "study",
  },
  {
    icon: "icon-09-jichusheshi",
    name: "前端工程化",
    id: "study",
  },
  {
    icon: "icon-vuesax-outline-status",
    name: "NestJs",
    id: "study",
  },
]);

onMounted(() => {});

const onChangeItem = (index: number, item: any) => {
  currentIndex.value = index;

  emits("change", index);
};
</script>

<style lang="scss" scoped>
@import url("./index.scss");
</style>
