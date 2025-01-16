<!--
 * @Author: along
 * @Description: 
 * @Date: 2025-01-16 14:30:45
 * @LastEditors: along
 * @LastEditTime: 2025-01-16 15:04:01
 * @FilePath: /cxy-web-tool/src/views/posts/index.vue
-->
<script lang="ts" setup>
import { ref, nextTick } from "vue";
import { getByPosts } from "@/api/posts";

import "highlight.js/styles/monokai-sublime.css";
import his from "highlight.js";

const postInfo = ref<any>({});

getByPosts({ id: window.location.search.split("=")[1] }).then((res) => {
  console.log(res);

  postInfo.value = res;

  nextTick(() => {
    let blocks = document.querySelectorAll(" pre code");
    blocks.forEach((block) => {
      his.highlightAll(block);
    });
  });
});
</script>

<template>
  <div class="postMain">
    <div v-html="postInfo.content"></div>
  </div>
</template>

<style lang="scss">
.postMain {
  width: 960px;
  background-color: #fff;
  border-radius: 4px;
  margin: 1% auto;
  box-sizing: border-box;
  padding: 24px 32px;

  img {
    max-width: 800px;
    margin-left: 50%;
    transform: translateX(-50%);
  }
}
</style>
