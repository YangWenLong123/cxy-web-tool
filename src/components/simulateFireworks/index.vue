<!--
 * @Author: along
 * @Description: 
 * @Date: 2025-03-03 09:13:13
 * @LastEditors: along
 * @LastEditTime: 2025-03-03 10:05:15
 * @FilePath: /cxy-web-tool/src/components/simulateFireworks/index.vue
-->
<script lang="ts" setup>
import { onMounted, ref, nextTick } from "vue";
import { moveTarget } from "@/utils/index";
import Confetti from "@/utils/confetti";

const isDom = ref(false);

const confettiMethod = () => {
  Confetti.init();
};

onMounted(() => {
  setTimeout(async () => {
    isDom.value = true;
    await nextTick({});

    moveTarget("simulate-fireworks", { x: 12, y: 5 });

    window.onresize = () => {
      moveTarget("simulate-fireworks", { x: 12, y: 5 });
    };
  }, 1000);
});
</script>

<template>
  <div id="simulate-fireworks" @click="confettiMethod()" v-if="isDom">
    <i class="iconfont icon-yanhua1"></i>
  </div>
</template>

<style lang="scss">
#simulate-fireworks {
  position: fixed;
  z-index: 9999;
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
</style>
