<!--
 * @Author: along
 * @Description: 截图
 * @Date: 2023-05-30 21:31:24
 * @LastEditors: along
 * @LastEditTime: 2024-03-29 13:49:57
 * @FilePath: /cxy-web-tool/src/views/screenshot/index.vue
-->
<script lang="ts" setup>
import { ref, onMounted, useCssModule } from "vue";
import navbar from "@/components/navbar/index.vue";
import "codemirror/mode/javascript/javascript.js";
import Codemirror from "codemirror-editor-vue3";
import "codemirror/theme/dracula.css";
import { message } from "ant-design-vue";

const css = useCssModule("screenshot");

const customNav = ref<any>([
  {
    icon: "icon-jiantou-right-top",
    tooltip: "盒子首页",
    type: "outside",
    link: import.meta.env.VITE_APP_HOME_API,
  },
]);

const code = ref<any>(`http://www.alongweb.top`);

const cmOptions = ref<any>({
  mode: "text/javascript", // Language mode
  theme: "dracula", // Theme
  lineNumbers: true, // Show line number
  smartIndent: true, // Smart indent
  indentUnit: 2, // The smart indent unit is 2 spaces in length
  foldGutter: true, // Code folding
  styleActiveLine: true, // Display the style of the selected row
});

const spinning = ref<any>(false);

const createBase64 = ref<string>("");

const onChange = (val, cm) => {
  console.log("cm", cm.getValue());
};

const onInput = (val) => {
  console.log("onInput", val);
};

const onReady = (cm) => {
  console.log(cm.focus());
};

const onCopyUrl = (url: string): void => {
  //
};

const onShotImg = () => {
  console.log("code", code.value);

  if (!code.value) {
    message.error("请输入url地址");
    return;
  }

  if (code.value.indexOf("http") === -1) {
    message.error("请输入正确的url地址");
    return;
  }

  spinning.value = !spinning.value;

  fetch("http://service.alongweb.top:43367/screenshot", {
    method: "POST",
    body: JSON.stringify({
      url: code.value,
    }),
    headers: {
      "Content-Type": "application/json",
    },
    timeout: 10000,
  })
    .then((response) => {
      return response.json();
    })
    .then((resp) => {
      console.log("resp", resp);

      if (resp.code === 200) {
        createBase64.value = resp.data;

        message.success(resp.msg);
      } else {
        message.error(resp.message);
      }

      spinning.value = !spinning.value;
    });
};

onMounted(() => {
  console.log("css", css);
});
</script>

<template>
  <a-spin :spinning="spinning">
    <navbar :customNav="customNav" />

    <div :class="[css.box]">
      <div>
        <div :class="[css.center]">
          <div :class="[css.title]">输入参数</div>
          <div :class="[css.flex]">
            <div>请输入URL网址,其他参数暂不支持配置</div>
            <div :class="[css.shotBtn]" @click="onShotImg()">开始截图</div>
          </div>
          <Codemirror
            v-model:value="code"
            :options="cmOptions"
            border
            ref="cmRef"
            height="200"
            width="100%"
            placeholder="请输入url"
            @change="onChange"
            @input="onInput"
            @ready="onReady"
          />
        </div>
        <div :class="[css.left]">
          <div :class="[css.title]">接口</div>
          <div :class="[css.url]">url</div>
          <div :class="[css.link]">
            <div :class="[css.shot]">
              http://service.alongweb.top:43367/screenshot
            </div>
            <img
              src="./copy.png"
              :class="[css.copy]"
              @click="onCopyUrl('http://service.alongweb.top:43367/screenshot')"
            />
          </div>
          <div :class="[css.url]">params</div>

          <table>
            <thead>
              <tr>
                <th><strong>key</strong></th>
                <th><strong>类型</strong></th>
                <th><strong>默认值</strong></th>
                <th><strong>说明</strong></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>fullPage</td>
                <td>boolean</td>
                <td>true</td>
                <td>是否滚动截屏</td>
              </tr>
              <tr>
                <td>width</td>
                <td>number</td>
                <td>-</td>
                <td>自定义截屏宽度, 默认不设置</td>
              </tr>
              <tr>
                <td>height</td>
                <td>number</td>
                <td>-</td>
                <td>自定义截屏高度 ,默认不设置</td>
              </tr>
              <tr>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>可自定义其他参数,会拼接在打开页面 url 上</td>
              </tr>
            </tbody>
          </table>

          <div :class="[css.url]">body</div>
          <table>
            <thead>
              <tr>
                <th><strong>key</strong></th>
                <th><strong>类型</strong></th>
                <th><strong>默认值</strong></th>
                <th><strong>说明</strong></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>url</td>
                <td>string</td>
                <td>''</td>
                <td>打开页面 url,必传</td>
              </tr>
              <tr>
                <td>className</td>
                <td>string</td>
                <td>-</td>
                <td>等待页面中元素加载完成，开始截屏，可传</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div :class="[css.right]">
        <img :src="createBase64" :class="[css.base64]" />
      </div>
    </div>
  </a-spin>
</template>

<style lang="scss" module="screenshot" scoped>
@import url("./index.module.css");
</style>

<style lang="scss" scoped>
table {
  display: block;
  width: 100%;

  & th {
    padding: 6px 13px;
    border: 1px #30363d solid;
    color: #fff;
  }

  & tr {
    background-color: #0d1117;
    border-top: 1px #30363db3 solid;
  }

  & tr:nth-child(2n) {
    background-color: #161b22;
  }

  & td {
    padding: 6px 13px;
    border: 1px #30363d solid;
    color: #fff;
  }
}
</style>
