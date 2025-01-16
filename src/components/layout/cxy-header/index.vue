<!--
 * @Author: along
 * @Description: 程序员盒子头部icon
 * @Date: 2023-05-30 21:31:24
 * @LastEditors: along
 * @LastEditTime: 2025-01-16 17:43:34
 * @FilePath: /cxy-web-tool/src/components/layout/cxy-header/index.vue
-->
<template>
  <div class="cxyHeaderComponents_top">
    <div class="cxyHeaderComponents">
      <div class="flex">
        <div class="left" @click="onGoHome()">
          <img src="http://www.alongweb.top/image/logo.svg" alt="" />
          <div class="left_title">
            <!-- <img src="@/assets/images/logo2.png" style="width: 500px" /> -->
            程序员盒子
          </div>
        </div>
        <div class="right">
          <div
            class="items"
            v-for="(record, index) in state.iconList"
            :key="index"
            @click="opNextUrl(record)"
          >
            <div class="item">
              <div
                class="item_text"
                :class="path === record.link ? 'active' : ''"
              >
                {{ record.tooltip }}
              </div>
              <i class="iconfont" :class="record.icon"></i>
            </div>
          </div>
          <!-- <div class="lines"></div>
          <div @click="onGitHub()">
            <i class="iconfont icon-github"></i>
          </div> -->
        </div>
      </div>
      <div>
        <!-- <img src="@/assets/images/photo.jpeg" alt="" class="touxiang" /> -->
        <template v-if="username">
          <a-dropdown>
            <a class="ant-dropdown-link">
              <div class="flexRow">
                <img src="@/assets/images/pic.png" alt="" class="pic" />
                <div style="color: #000">{{ username }}</div>
              </div>
              <DownOutlined />
            </a>
            <template #overlay>
              <a-menu @click="onkeydown">
                <a-menu-item :key="1">
                  <a href="javascript:;">退出登录</a>
                </a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>
        </template>
        <div v-else class="login" type="link" @click="onRegister()">登录</div>
      </div>
    </div>
  </div>

  <!-- 登录 -->
  <CxyLogin ref="cxyLoginRef" @refresh="getUserInfo()" />
</template>

<script lang="ts" setup>
import { onMounted, reactive, watch, ref, nextTick } from "vue";
import { usePopupStore } from "@/store/modules/popup";
import router from "@/router";
import { useRouter } from "vue-router";
import CxyLogin from "@/components/login/index.vue";
import { message } from "ant-design-vue";

const cxyLoginRef = ref<InstanceType<typeof CxyLogin> | null>(null);

const username = ref<string>("");

const getUserInfo = () => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  if (userInfo) {
    username.value = userInfo.username;
  } else {
    username.value = "";
  }
};

const store = usePopupStore();
const routers = useRouter();
const path = ref(null);
const showBottom = ref(false);
const state = reactive({
  iconList: [
    // {
    //   icon: "icon-jiantou-right-top",
    //   tooltip: "盒子首页",
    //   type: "outside",
    //   link: import.meta.env.VITE_APP_HOME_API,
    // },
    {
      icon: "",
      tooltip: "首页",
      type: "station",
      link: "/home",
    },
    {
      icon: "",
      tooltip: "博客",
      type: "station",
      link: "/platform",
    },
    {
      icon: "",
      tooltip: "开发工具",
      type: "station",
      link: "/gjk",
    },
    // {
    //   icon: "",
    //   tooltip: "语法速查表",
    //   type: "station",
    //   link: "/syntax",
    // },
    // {
    //   icon: "",
    //   tooltip: "摸鱼划水",
    //   type: "station",
    //   link: "/tc",
    // },
    // {
    //   icon: "",
    //   tooltip: "面试题",
    //   type: "station",
    //   link: "/ms",
    // },

    // {
    //   icon: "",
    //   tooltip: "遇见你",
    //   type: "station",
    //   link: "/jy",
    // },
    // {
    //   icon: "",
    //   tooltip: "插件库",
    //   type: "station",
    //   link: "/chrome",
    // },

    // {
    //   icon: "",
    //   tooltip: "代码小抄",
    //   type: "station",
    //   link: "/dm",
    // },

    // {
    //   icon: "",
    //   tooltip: "赞助",
    //   type: "station",
    //   link: "/zz",
    // },
    // {
    //   icon: "",
    //   tooltip: "资源网站",
    //   type: "station",
    //   link: "/tool",
    // },
    // {
    //   icon: "",
    //   tooltip: "技术社区",
    //   type: "station",
    //   link: "/community",
    // },
    // {
    //   icon: "",
    //   tooltip: "AI社区",
    //   type: "station",
    //   link: "/ai",
    // },
    // {
    //   icon: "",
    //   tooltip: "学习平台",
    //   type: "station",
    //   link: "/platform",
    // },

    // {
    //   icon: "icon-jiantou-right-top",
    //   tooltip: "小册",
    //   link: import.meta.env.VITE_APP_TOOL_API + "/book",
    // },
    // {
    //   icon: "icon-jiantou-right-top",
    //   tooltip: "联系客服",
    //   link: "popup",
    // },
    // {
    //   icon: "icon-jiantou-right-top",
    //   tooltip: "摸鱼社区",
    //   link: import.meta.env.VITE_APP_TOOL_API + "/lazy",
    // },
  ],
});

onMounted(() => {
  nextTick(() => {
    const dom = document.querySelector(".cxyView") as any;
    dom.addEventListener("scroll", (e: any) => {
      showBottom.value = e.target?.scrollTop > 10 ? true : false;
    });

    getUserInfo();
  });
});

watch(
  () => routers.currentRoute.value,
  (newValue: any) => {
    path.value = newValue?.path;
  },
  { immediate: true }
);

const onGitHub = () => {
  window.location.href = "https://github.com/YangWenLong123";
};

const opNextUrl = (record: any) => {
  if (record.type === "outside") {
    window.location.href = record.link;
  } else if (record.type === "station") {
    router.push({ path: record.link });
  }
};

const onGoHome = () => {
  window.location.href = import.meta.env.VITE_APP_HOME_API;
};

const changeRouter = (link: string) => {
  if (link === "popup") {
    store.setPopup({
      showPopup: true,
      popup_type: "1",
      popup_mode: ["WeChat"],
    });
  } else {
    location.href = link;
  }
};

const onkeydown = (e) => {
  console.log(e);

  if (e.key === 1) {
    localStorage.removeItem("access_token");
    localStorage.removeItem("userInfo");
    getUserInfo();
    window.location.reload();
    message.success("退出成功");
  }
};

const onRegister = () => {
  // router.push({ path: "/login" });

  cxyLoginRef.value?.preview();
};
</script>

<style lang="scss">
@import url("./index.scss");
</style>
