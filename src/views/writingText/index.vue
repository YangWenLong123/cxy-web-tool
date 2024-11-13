<!--
 * @Author: along
 * @Description: 写文章
 * @Date: 2024-11-13 09:05:02
 * @LastEditors: along
 * @LastEditTime: 2024-11-13 13:53:48
 * @FilePath: /cxy-web-tool/src/views/writingText/index.vue
-->
<template>
  <div class="CxyWritingText">
    <div class="nav">
      <a-input
        v-model="title"
        placeholder="请输入文章标题"
        style="width: 40%"
      />
      <a-button type="primary" @click="publishedArticleID()">发布</a-button>
    </div>

    <div id="vditor" />
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import Vditor from "vditor";
import "vditor/dist/index.css";
import { message } from "ant-design-vue";

const title = ref<any>("");

const vditor = ref<Vditor | null>(null);

const publishedArticleID = () => {
  message.error("开发中...");
};

onMounted(() => {
  vditor.value = new Vditor("vditor", {
    after: () => {
      vditor.value!.setValue("");
    },
    mode: "sv", // sv, ir, wysiwyg
    height: "calc(100vh - 63px)",
    toolbar: [
      "emoji",
      "headings",
      "bold",
      "italic",
      "strike",
      "|",
      "line",
      "quote",
      "list",
      "ordered-list",
      "check",
      "outdent",
      "indent",
      "code",
      "inline-code",
      "insert-after",
      "insert-before",
      "undo",
      "redo",
      "upload",
      "link",
      "table",
      // "record",
      // "edit-mode",
      // "both",
      // "preview",
      // "fullscreen",
      "outline",
      "code-theme",
      // "content-theme",
      // "export",
      // "devtools",
      // "info",
      // "help",
      // "br",
    ],
    counter: {
      enable: true,
    },
    preview: {
      delay: 100,
      hljs: {
        defaultLang: "javascript",
        style: "a11y-dark",
      },
    },

    upload: {
      url: "http://abc.alongweb.top:3000/upload/single",
      success: (editor, msg) => {
        console.log("editor", editor);
        console.log("msg", msg);

        message.success("上传成功");

        vditor.value.insertValue(`![](${JSON.parse(msg).url})`);

        setTimeout(() => {
          document.querySelector(".vditor-tip__content").style.display = "none";
        }, 500);
      },
      multiple: false,
      fieldName: "file",
      renderLinkDest: (vditor) => {},
    },
  });
});
</script>

<style lang="scss">
@import "./index.scss";
</style>
