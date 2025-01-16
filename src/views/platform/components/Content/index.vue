<!--
 * @Author: along
 * @Description:博客
 * @Date: 2023-05-30 21:31:24
 * @LastEditors: along
 * @LastEditTime: 2025-01-16 14:33:32
 * @FilePath: /cxy-web-tool/src/views/platform/components/Content/index.vue
-->

<script lang="ts" setup>
import { onMounted, reactive, ref, computed } from "vue";
import { getPosts } from "@/api/posts";
import moment from "moment";
import CxyLogin from "@/components/login/index.vue";
import { message } from "ant-design-vue";

const activeKey = ref<string>(0);
const tabIndex = ref<string>("1");
const postList = ref<any>([]);

const cxyLoginRef = ref<InstanceType<typeof CxyLogin> | null>(null);

const isLogin = computed(() => {
  return !!localStorage.getItem("access_token");
});

const changeIndex = (index) => {
  activeKey.value = index;

  getPostsList();
};

const getPostsList = () => {
  getPosts({
    params: {
      page: 1,
      pageSize: 999999,
    },
  }).then((res) => {
    console.log(res);
    if (!res?.list?.length) {
      postList.value = [];
      return;
    }

    postList.value = res.list?.filter((v) => ~~v.type === ~~activeKey.value);
  });
};

const goLogin = () => {
  cxyLoginRef.value?.preview();
};

const getPostData = (row) => {
  const fullPath = window.location.origin + "/posts" + `?id=${row.id}`;
  window.open(fullPath, "_blank");
};

onMounted(() => {
  getPostsList();
});

defineExpose({
  changeIndex,
});
</script>

<template>
  <div class="CxyPlatformMain">
    <a-tabs v-model:activeKey="tabIndex">
      <a-tab-pane key="1" tab="推荐"></a-tab-pane>
      <!-- <a-tab-pane key="2" tab="最新"></a-tab-pane> -->
    </a-tabs>

    <template v-if="isLogin">
      <a-empty
        v-if="!postList.length"
        description="暂无数据"
        style="margin-top: 100px"
      />

      <div class="post-main" v-if="postList.length">
        <div
          class="post-list"
          v-for="(item, index) in postList"
          :key="index"
          @click="getPostData(item)"
        >
          <div class="post-item">
            <div class="title">{{ item.title }}</div>
            <div class="content">{{ item.desc }}</div>
            <div class="info">
              <div class="auth">{{ item.author }}</div>
              <div class="create_time">
                {{ moment(item.create_time).format("YYY-MM-DD HH:mm:ss") }}
              </div>
            </div>
          </div>
          <img :src="item.thumb_url" class="thumb_url" />
        </div>
      </div>
    </template>

    <template v-else>
      <div @click="goLogin()" class="goLogin">去登录</div>
    </template>
  </div>

  <!-- 登录 -->
  <CxyLogin ref="cxyLoginRef" @refresh="getPostsList()" />
</template>

<style lang="scss">
@import url("./index.scss");
</style>
