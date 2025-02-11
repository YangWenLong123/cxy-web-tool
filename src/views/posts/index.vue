<!--
 * @Author: along
 * @Description: 
 * @Date: 2025-01-16 14:30:45
 * @LastEditors: along
 * @LastEditTime: 2025-01-20 09:51:59
 * @FilePath: /cxy-web-tool/src/views/posts/index.vue
-->
<script lang="ts" setup>
import { ref, nextTick, onMounted, defineExpose } from "vue";
import { getByPosts } from "@/api/posts";
import { appCxyStore } from "@/store/modules/cxy";
import { storeToRefs } from "pinia";
import { isMorningOrAfternoon } from "@/utils/index";

const { postId } = storeToRefs(appCxyStore());

// import "highlight.js/styles/monokai-sublime.css";
import "highlight.js/styles/a11y-dark.css";
import his from "highlight.js";

const postInfo = ref<any>({});

const getData = () => {
  if (!postId.value) return;
  getByPosts({ id: postId.value }).then((res) => {
    console.log(res);

    postInfo.value = res;

    nextTick(() => {
      let blocks = document.querySelectorAll("pre code");
      blocks.forEach((block) => {
        his.highlightAll(block);
      });
    });
  });
};

const onArticleContent = () => {
  appCxyStore().setReadingMode(false);
};

onMounted(() => {
  getData();
});

defineExpose({
  getData,
});
</script>

<template>
  <div class="postMain">
    <div
      id="vditor"
      language="javascript"
      class="postWrap vditor-reset"
      v-html="postInfo.content"
    ></div>
    <!--  -->
    <div class="side">
      <div class="card-item">
        <div class="card-title">{{ isMorningOrAfternoon() }}好!</div>
        <div class="card-desc">点亮在社区的每一天</div>
      </div>
      <div class="card-button" @click="onArticleContent('info')">返回首页</div>
    </div>
  </div>
</template>

<style lang="scss">
.postMain {
  width: 1200px;
  margin: 1% auto;
  display: flex;

  .postWrap {
    width: 920px;
    background-color: #fff;
    box-sizing: border-box;
    padding: 24px 32px 24px 64px;
    border-radius: 4px;
  }

  .side {
    flex: 1;
    margin-left: 24px;
    background-color: #fff;
    box-sizing: border-box;
    padding: 20px;
    height: 90px;
    position: fixed;
    top: 84px;
    right: calc((100vw - 1200px) / 2);
    width: 256px;
    display: flex;
    justify-content: space-between;

    .card-item {
      display: flex;
      flex-direction: column;

      .card-title {
        font-size: 16px;
        font-weight: 600;
        line-height: 24px;
        color: #252932;
      }
      .card-desc {
        font-size: 12px;
        font-weight: 400;
        line-height: 24px;
        margin-top: 2px;
        color: #9ba2ae;
      }
    }

    .card-button {
      border-radius: 4px;
      height: 36px;
      width: 74px;
      box-sizing: border-box;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      border: 1px solid #12a272;
      background-color: rgba(65, 180, 142, 0.1) !important;
      outline: none;
      transition: background-color 0.3s, color 0.3s;
      cursor: pointer;
      appearance: none;
      color: #12a272;
      font-size: 14px;
      font-weight: 400;
      white-space: nowrap;
      &:hover {
        opacity: 0.8;
      }
    }
  }

  img {
    max-width: 800px;
    margin-left: 50%;
    transform: translateX(-50%);
  }
}
</style>
