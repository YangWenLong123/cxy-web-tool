<template>
  <div class="CxySwaggerAigc">
    <div class="nav">
      <a-input
        v-model:value="api"
        size="large"
        placeholder="请输入API地址"
        allowClear
      >
        <template #addonBefore>
          <a-select v-model:value="methods" style="width: 90px">
            <a-select-option value="get">GET</a-select-option>
            <a-select-option value="post">POST</a-select-option>
          </a-select>
        </template>
      </a-input>
      <div class="button" @click="onSendApi()">
        <i class="iconfont icon-fasong"></i>
        <div class="send">Send</div>
      </div>
    </div>

    <div class="code">
      <Codemirror
        v-model:value="code"
        :options="cmOptions"
        border
        ref="cmRef"
        height="200"
        width="100%"
        @change="onChange"
        @input="onInput"
        @ready="onReady"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { message } from "ant-design-vue";
import "codemirror/mode/javascript/javascript.js";
import Codemirror from "codemirror-editor-vue3";

const api = ref("https://");
const methods = ref("get");
const code = ref(JSON.stringify({ a: 1 }, "", 2));

const onSendApi = () => {
  message.error("开发中");
};

const cmRef = ref();
const cmOptions = {
  mode: "text/javascript",
  lint: true,
};
const onChange = (val, cm) => {
  console.log(val);
  console.log(cm.getValue());
};

const onInput = (val) => {
  console.log(val);
};

const onReady = (cm) => {
  console.log(cm.focus());
};

onMounted(() => {
  setTimeout(() => {
    cmRef.value?.refresh();
  }, 1000);

  setTimeout(() => {
    cmRef.value?.resize(300, 200);
  }, 2000);

  setTimeout(() => {
    cmRef.value?.cminstance.isClean();
  }, 3000);
});

onUnmounted(() => {
  cmRef.value?.destroy();
});
</script>

<style lang="scss">
@import url("./index.scss");
</style>
