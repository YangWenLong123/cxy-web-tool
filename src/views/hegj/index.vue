<!--
 * @Author: along
 * @Description: 
 * @Date: 2025-01-22 17:33:00
 * @LastEditors: along
 * @LastEditTime: 2025-02-17 16:41:18
 * @FilePath: /cxy-web-tool/src/views/hegj/index.vue
-->
<script lang="ts" setup>
import { message } from "ant-design-vue";
import { ref } from "vue";

const bgList = ref([
  "http://cdn.alongweb.top/bg/b.jpg",
  "http://cdn.alongweb.top/bg/a.jpg",
  // "http://cdn.alongweb.top/bg/c.jpg",
  "http://cdn.alongweb.top/bg/d.jpg",
  "http://cdn.alongweb.top/bg/e.jpg",
  "http://cdn.alongweb.top/bg/f.jpg",
]);
const bgIndex = ref<number>(0);

const bgIndexStoge = localStorage.getItem("bgIndex");

const bg = ref(bgList.value[bgIndexStoge ? bgIndexStoge : bgIndex.value]);

const value = ref("");
const visible = ref<boolean>(false);
const title = ref<string>("");
const url = ref<string>("");

const contentData = ref([
  {
    id: 1,
    title: "Code to Image",
    description: "代码导出为图片在线小工具",
    url: "http://43.143.65.230/02/index.html",
    logo: "http://cdn.alongweb.top/bg/300.jpeg",
    color: "#12a272",
  },
  {
    id: 2,
    title: "Json to diff",
    description: "JSON对比工具",
    url: "http://43.143.65.230/04/index.html",
    logo: "http://cdn.alongweb.top/bg/json.png",
    color: "#12a272",
  },
  {
    id: 3,
    title: "Image to base64",
    description: "图片转base64工具",
    url: "http://43.143.65.230/05/index.html",
    logo: "http://cdn.alongweb.top/bg/base64.png",
    color: "#12a272",
  },
  {
    id: 4,
    title: "时间戳转换",
    description: "时间戳转换工具",
    url: "http://43.143.65.230/06/index.html",
    logo: "http://cdn.alongweb.top/bg/scends.png?v=1",
    color: "#12a272",
  },
  {
    id: 5,
    title: "Color Palette",
    description: "调色板工具",
    url: "http://43.143.65.230/07/index.html",
    logo: "http://cdn.alongweb.top/bg/tsb.png",
    color: "#12a272",
  },
]);

const copyData = ref(JSON.parse(JSON.stringify(contentData.value)));

const searchContent = (e) => {
  contentData.value = copyData.value.filter((item) => {
    return item.title.includes(e.target.value);
  });
};

const previewContent = (item) => {
  title.value = item.title;
  url.value = item.url;
  visible.value = true;
};

const changeGlobalNodesTarget = () => {
  bgIndex.value++;

  if (bgIndex.value === bgList.value.length) bgIndex.value = 0;
  bg.value = bgList.value[bgIndex.value];

  localStorage.setItem("bgIndex", bgIndex.value);

  message.success(`切换成功`);
};
</script>

<template>
  <div class="CxyHzgj" :style="{ backgroundImage: `url(${bg}) ` }">
    <a-input
      v-model:value="value"
      size="large"
      placeholder="请输入工具名称..."
      class="search"
      allowClear
      @change="searchContent"
    >
      <template #prefix>
        <i
          class="iconfont icon-icongongju"
          style="color: #12a272; font-size: 28px"
        ></i>
      </template>
    </a-input>

    <div class="config">
      <div class="config-items" @click="changeGlobalNodesTarget()">
        切换壁纸
      </div>
    </div>

    <!-- 工具 -->

    <div class="main">
      <template v-if="contentData.length">
        <div
          class="items"
          v-for="(item, index) in contentData"
          :key="index"
          @click="previewContent(item)"
        >
          <!-- <i
            :class="item.logo"
            class="iconfont"
            :style="{ color: item.color }"
          ></i> -->
          <img v-if="item.logo" :src="item.logo" class="logo" />
          <div class="title">{{ item.title }}</div>
        </div>
      </template>

      <div class="no-results" v-else>
        <div class="no-results-icon">🔍</div>
        <h3>未找到匹配的数据</h3>
        <p>试试其他关键词类</p>
      </div>
    </div>
  </div>

  <a-drawer
    v-model:visible="visible"
    class="custom-class"
    :width="'100%'"
    style="color: red"
    :title="title"
    :keyboard="false"
    :destroyOnClose="true"
    :maskClosable="false"
    placement="right"
  >
    <iframe
      v-if="url"
      :src="url"
      frameborder="0"
      width="100%"
      height="98%"
    ></iframe>
  </a-drawer>
</template>

<style lang="scss">
@import url("./index.scss");
</style>
