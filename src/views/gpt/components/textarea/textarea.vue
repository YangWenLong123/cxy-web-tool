<!--
 * @Author: along
 * @Description: 程序员盒子内容搜索
 * @Date: 2023-05-30 21:31:24
 * @LastEditors: along
 * @LastEditTime: 2023-07-27 18:08:45
 * @FilePath: /cxy-web-tool/src/views/gpt/components/textarea/textarea.vue
-->
<template>
  <div class="CxyTextArea">
    <div class="input-box">
      <a-input
        v-model:value="state.keyword"
        placeholder="清输入要搜索的内容..."
        class="input"
        @onSearch="onSearch"
        @onPressEnter="onSearch"
      />
      <img src="@/assets/images/search.png" @click="onSearch" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, reactive } from "vue";
import { appGptStore } from "@/store/modules/gpt";

const store = appGptStore();

const state = reactive({
  keyword: "",
});

onMounted(() => {});

const onSearch = () => {
  console.log(state.keyword);
  store.setKeyword(state.keyword);
  state.keyword = "";
};
</script>

<style lang="scss">
@import url("./index.scss");
</style>
