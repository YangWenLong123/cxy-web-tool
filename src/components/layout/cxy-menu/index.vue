<!--
 * @Author: along
 * @Description: 程序员盒子菜单
 * @Date: 2023-05-30 21:31:24
 * @LastEditors: along
 * @LastEditTime: 2023-06-15 16:07:42
 * @FilePath: /cxy-web-tool/src/components/layout/cxy-menu/index.vue
-->
<template>
  <div
    class="cxyMenu"
    :style="{width: state.collapse ? '240px' : '70px'}"
  >
    <div
      class="collapse"
      @click="isCollapse()"
      :style="{ left: state.collapse ? '220px' : '50px'}"
    >
      <i class="iconfont icon-zuojiantou" />
    </div>

    <div class="cxyBox">
      <img
        v-if="state.collapse"
        src="@/assets/images/logo.png"
        class="cxyLogo"
        @click="goHome()"
      >
      <img
        v-if="!state.collapse"
        src="@/assets/images/logo-small.png"
        class="cxyLogoSmall"
        @click="goHome()"
      >

      <!-- 目录 -->
      <div
        v-for="(record, index) in menuList"
        :key="index"
        class="cxyFlex"
        :style="{
          borderTop: state.collapse ? '1px rgba(0, 0, 0, 0.3) solid' : 'none'
        }"
        @click="replacePath(record.path)"
      >
        <i
          class="iconfont cxyIconfont"
          :class="record.icon"
          :style="{
            color: state.path === record.path ? '#6ee7b7' : '#ffffff'
          }"
        ></i>
        <div
          v-if="state.collapse"
          class="cxyItems"
          :style="{
            color: state.path === record.path ? '#6ee7b7' : '#ffffff'
          }"
        >
          {{ record.title }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts' setup>
  import { onMounted, reactive, ref } from "vue";
  import { useRouter } from "vue-router";

  const router = useRouter();

  const menuList = ref([
    { title: "内容搜索", path: "/keyword", icon: "icon-sousuo" },
    { title: "常用工具", path: "/tool", icon: "icon-xiumeigongju-" },
    {
      title: "技术社区",
      path: "/community",
      icon: "icon-shequ-weijihuo",
    },
    { title: "技术团队", path: "/team", icon: "icon-tuandui" },
    { title: "学习平台", path: "/platform", icon: "icon-ziyuan1" },
    { title: "资源下载", path: "/resources", icon: "icon-ziyuan" },
    { title: "Chrome插件", path: "/chrome", icon: "icon-wulianwang-" },
    { title: "vue社区", path: "/vue", icon: "icon-vue" },
    { title: "react社区", path: "/react", icon: "icon-react" },
  ]);

  const state = reactive({
    collapse: true,
    path: location.pathname,
  });

  onMounted(() => {
    console.log();
  });

  const isCollapse = () => {
    state.collapse = !state.collapse;
  };

  const goHome = () => {
    location.href = "http://www.alongweb.top";
  };

  const replacePath = (path: string) => {
    state.path = path;
    router.push({
      path,
    });
  };
</script>

<style lang="scss">
  .cxyMenu {
    display: flex;
    flex-direction: column;
    position: relative;
    background-color: #1c1e21;
    transition: all 0.2s;
    color: #fff;
    .cxyBox {
      width: 100%;
      flex: 1;
      display: flex;
      flex-direction: column;
      .cxyLogo {
        width: 140px;
        margin-left: 50px;
        cursor: pointer;
      }
      .cxyLogoSmall {
        width: 70px;
        margin-top: 20px;
        cursor: pointer;
      }
      .cxyFlex {
        display: flex;
        align-items: center;
        cursor: pointer;
        height: 50px;
        .cxyIconfont {
          // color: #fff;
          font-size: 18px;
          padding-left: 25px;
          padding-right: 30px;
        }
        .cxyItems {
          flex: 1;
          height: 50px;
          box-sizing: border-box;
          line-height: 50px;
        }
        &:hover {
          .cxyIconfont,
          .cxyItems {
            color: #6ee7b7 !important;
          }
        }
      }
    }
  }
  .collapse {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    background-color: #1c1e21;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.2s;
    .icon-zuojiantou {
      font-size: 22px;
      position: relative;
      right: -2px;
    }
    &:hover {
      color: #6ee7b7;
    }
  }
</style>
