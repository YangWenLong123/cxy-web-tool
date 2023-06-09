<!--
 * @Author: along
 * @Description: 程序员盒子首页
 * @Date: 2023-05-30 21:31:24
 * @LastEditors: along
 * @LastEditTime: 2023-06-09 17:38:37
 * @FilePath: /cxy-web-tool/src/components/layout/cxy-menu/index.vue
-->
<template>
  <div
    class="cxyMenu"
    :style="{width: state.collapse ? '260px' : '70px'}"
  >
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
    </div>
  </div>
  <div
    class="collapse"
    @click="isCollapse()"
    :style="{ left: state.collapse ? '240px' : '50px'}"
  >
    <i class="iconfont icon-zuojiantou" />
  </div>
</template>

<script lang='ts' setup>
  import { onMounted, reactive } from "vue";

  const state = reactive({
    collapse: true,
  });

  onMounted(() => {});

  const isCollapse = () => {
    state.collapse = !state.collapse;
  };

  const goHome = () => {
    location.href = "http://www.alongweb.top";
  };
</script>

<style lang="scss">
  .cxyMenu {
    display: flex;
    flex-direction: column;
    position: relative;
    background-color: #1c1e21;
    transition: all 0.2s;
    .cxyBox {
      width: 100%;
      flex: 1;
      display: flex;
      flex-direction: column;
      .cxyLogo {
        width: 160px;
        margin-left: 50px;
      }
      .cxyLogoSmall {
        width: 70px;
        margin-top: 20px;
      }
    }
  }
  .collapse {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    position: fixed;
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
