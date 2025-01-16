<!--
 * @Author: along
 * @Description: 程序员盒子liux工具
 * @Date: 2023-05-30 21:31:24
 * @LastEditors: along
 * @LastEditTime: 2024-10-24 16:02:41
 * @FilePath: /cxy-web-tool/src/views/linux/index.vue
-->
<template>
  <div class="lMain">
    <div class="lHeader">
      <div class="logo" @click="goHome()">
        <!-- <img src="http://www.alongweb.top/image/logo.svg" alt="" /> -->
        <!-- <div class="name">WebBox</div> -->
      </div>

      <div></div>
    </div>
    <div class="lBox">
      <div class="nav">
        <img src="http://cdn.alongweb.top/images/linux.svg" class="img" />
      </div>

      <div class="flexCenter">
        <a-input-group compact style="width: 800px; display: flex">
          <a-input
            size="large"
            placeholder="请输入Linux命令..."
            v-model:value="keywords"
            allowClear
            @pressEnter="onSearchMethod()"
          />
          <a-button size="large" type="primary" @click="onSearchMethod()"
            >搜索</a-button
          >
        </a-input-group>
      </div>

      <!-- <a-input v-model:value="keywords" placeholder="请输入Linux命令..." /> -->
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { notification } from "ant-design-vue";

onMounted(() => {});

const keywords = ref<string>("");

const onSearchMethod = () => {
  notification["info"]({
    message: "提示",
    description: "正在开发中...",
  });
};

const goHome = () => {
  window.location.href = "http://www.alongweb.top/";
};
</script>

<style lang="scss" scoped>
@import url("./index.scss");
</style>
