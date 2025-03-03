<!--
 * @Author: along
 * @Description: 
 * @Date: 2025-03-03 09:13:13
 * @LastEditors: along
 * @LastEditTime: 2025-03-03 10:04:38
 * @FilePath: /cxy-web-tool/src/components/logVisitor/index.vue
-->
<script lang="ts" setup>
import { onMounted, ref, nextTick } from "vue";
import { moveTarget } from "@/utils/index";
import { statistics } from "@/api/common";
const isDom = ref(false);

const totalPV = ref(0);
const totalUV = ref(0);

const popover = ref(true);

onMounted(async () => {
  statistics().then((res) => {
    totalPV.value = res?.totalPV;
    totalUV.value = res?.totalUV;
  });

  setTimeout(async () => {
    isDom.value = true;
    await nextTick({});
    moveTarget("logVisitor", { x: 12, y: 10 });

    window.onresize = () => {
      moveTarget("logVisitor", { x: 12, y: 10 });
    };
  }, 1000);
});
</script>

<template>
  <a-popover v-model="popover" placement="left" v-if="isDom">
    <template #content>
      <div>PV：{{ totalPV }}</div>
      <div>UV：{{ totalUV }}</div>
    </template>
    <div id="logVisitor">
      <i class="iconfont icon-tongji"></i>
    </div>
  </a-popover>
</template>

<style lang="scss">
#logVisitor {
  position: fixed;
  z-index: 9999999999;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  // border: 1px solid #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000;
  cursor: pointer;
  overflow: hidden;
  &:active {
    transform: scale(1.2);
  }

  i {
    color: #fff;
    font-size: 20px;
  }
}

#logVisitor.ant-popover-open {
  padding-bottom: 0xp !important;
}
</style>
