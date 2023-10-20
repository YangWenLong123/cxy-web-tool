<!--
 * @Author: along
 * @Description: 程序员盒子内容搜索
 * @Date: 2023-05-30 21:31:24
 * @LastEditors: along
 * @LastEditTime: 2023-07-28 18:01:26
 * @FilePath: /cxy-web-tool/src/views/gpt/components/view/view.vue
-->
<template>
  <div class="CxyView"></div>
</template>

<script lang="ts" setup>
import { onMounted, reactive, watch, h } from "vue";
import { storeToRefs } from "pinia";
import { appGptStore } from "@/store/modules/gpt";
import { Modal } from "ant-design-vue";

const store = appGptStore();
const { keyword } = storeToRefs(store);
const state = reactive({
  keyword: keyword,
  answerList: [
    {
      type: 1,
      text: "你好,我对这个问题深入研究了一下，并简单实现了一个打字机的效果,",
      id: 1,
    },
    {
      type: 1,
      text: "内容都是前端固定的，不是通过接口返回。对于的打字机的设计，目前有三种类型",
      id: 2,
    },
    {
      type: 1,
      text: `第一种类型是标题,`,
      id: 3,
    },
    { type: 1, text: "第二种类型是文本,", id: 4 },
    { type: 1, text: "第三种类型是代码块,", id: 5 },
    { type: 1, text: "第四种类型是图片,", id: 6 },
    { type: 1, text: "第五种类型是视频,", id: 7 },
    { type: 1, text: "后面我准备添加更多的类型,包括音乐，文件等", id: 8 },
    { type: 1, text: "下面将生成一个代码块", id: 9 },
    { type: 2, text: "function Add (a, b) {", id: 10 },
    { type: 2, text: "  return a + b;", id: 11 },
    { type: 2, text: "}", id: 12 },
    // { type: 1, text: "下面将生成一个图片" },
    // { type: 3, url: "http://cdn.alongweb.top/images/file.png" },
    // { type: 1, text: "下面将生成一个视频" },
    // { type: 4, url: "http://cdn.alongweb.top/images/file.png" },
    // { type: 1, text: "好的，就这些内容，谢谢观看" },
  ],
});
const renderDOM = (record) => {};

const insertDOM = async (length, index) => {};

watch(
  () => state.keyword,
  (value) => {
    const answerList: any = state.answerList.filter((item) => item.type);
    state.answerList = [{ type: 0, text: value, id: "title" }].concat(
      answerList
    );

    Modal.info({
      title: "提示",
      content: h("div", {}, [h("p", "正在开发中...")]),
      onOk() {
        console.log("ok");
      },
    });

    console.log("list", state.answerList);
  }
);

onMounted(() => {});
</script>

<style lang="scss">
@import "./index.scss";
</style>
