<!--
 * @Author: along
 * @Description: 
 * @Date: 2025-02-06 16:13:20
 * @LastEditors: along
 * @LastEditTime: 2025-02-06 17:00:34
 * @FilePath: /cxy-web-tool/src/views/bk/index.vue
-->
<script lang="ts" setup>
import { onMounted, ref } from "vue";

const spinning = ref(true);

onMounted(() => {
  document.getElementById("iframe")?.addEventListener("load", () => {
    spinning.value = false;
  });
});
</script>

<template>
  <a-spin :spinning="spinning">
    <div class="iframe-container">
      <iframe
        src="http://boke.alongweb.top"
        frameborder="0"
        width="100%"
        height="100%"
        id="iframe"
      ></iframe>
    </div>
  </a-spin>
</template>

<style lang="scss" scoped>
.iframe-container {
  width: 100vw;
  height: 100vh;
}
</style>
