<!--
 * @Author: along
 * @Description: 
 * @Date: 2025-03-03 14:29:43
 * @LastEditors: along
 * @LastEditTime: 2025-03-03 15:51:00
 * @FilePath: /cxy-web-tool/src/views/dm/components/codeEdit.vue
-->

<script lang="ts" setup>
import { ref, nextTick, toRaw } from "vue";
import * as monaco from "monaco-editor";

const isEdit = ref(false);
const editor = ref(null);
const theme = ref("vs-dark");
const language = ref("typescript");

// // 自定义语言开始
// monaco.languages.register({ id: language.value });

// // 给自定义语言添加自动补全括号
// monaco.languages.setLanguageConfiguration(language.value, {
//   comments: {
//     lineComment: "//",
//     blockComment: ["/*", "*/"],
//   },
//   brackets: [
//     ["{", "}"],
//     ["[", "]"],
//     ["(", ")"],
//   ],
//   autoClosingPairs: [
//     { open: "{", close: "}" },
//     { open: "[", close: "]" },
//     { open: "(", close: ")" },
//     { open: '"', close: '"', notIn: ["string"] },
//     { open: "'", close: "'", notIn: ["string", "comment"] },
//     { open: "`", close: "`", notIn: ["string", "comment"] },
//     { open: "/**", close: " */", notIn: ["string"] },
//   ],
//   surroundingPairs: [
//     { open: "{", close: "}" },
//     { open: "[", close: "]" },
//     { open: "(", close: ")" },
//   ],
// });
// // 给自定义语言添加匹配规则
// monaco.languages.setMonarchTokensProvider(language.value, {
//   tokenizer: {
//     root: [
//       [/\bif\b/, "keyword"],
//       [/\b\d+\b/, "number"],
//       [/\b(a|an|the)\b/, "article"],
//       [/[a-z][a-z0-9]*/, "identifier"],
//       [/[A-Z][a-z0-9]*/, "type.identifier"],
//       [/'([^'\\]|\\.)*'/, "string"],
//       [/"/, "string", "@string"],
//     ],
//     string: [
//       [/[^\\"]+/, "string"],
//       [/\\./, "string.escape"],
//       [/"/, "string", "@pop"],
//     ],
//   },
// });
// // 自定义语言结束

const initEditor = () => {
  editor.value = monaco.editor.create(document.querySelector("#editor"), {
    value: "", //编辑器初始显示文字
    language: language.value, //语言支持
    theme: theme.value, //主题
    selectOnLineNumbers: true, //显示行号
    roundedSelection: false,
    readOnly: false, // 只读
    cursorStyle: "line", //光标样式
    automaticLayout: true, //自动布局
    glyphMargin: true, //字形边缘
    useTabStops: false,
    fontSize: 12, //字体大小
    autoIndent: true, //自动布局
    quickSuggestionsDelay: 100, //代码提示延时
  });

  // console.log(editor.value.getLanguages());

  // 监听值的变化
  // editor.value.onDidChangeModelContent((val) => {
  // 	console.log(val.changes[0].text)
  // })
};
nextTick(() => {
  initEditor();
});

const setThemeEdit = () => {
  toRaw(editor.value).updateOptions({
    theme: theme.value,
    // language: language.value,
  });
};

// 获取编辑器中的文本
const getEditorValue = () => {
  const value = toRaw(editor.value).getValue();
  // console.log(value);
};
// 修改编辑器的文本
const setEditorValue = (val) => {
  toRaw(editor.value).getModel().setValue(val);
};
</script>

<template>
  <div class="codeEdit">
    <div class="nav">
      <div class="left">
        <div class="icon">
          <div class="icon-1"></div>
          <div class="icon-2"></div>
          <div class="icon-3"></div>
        </div>

        <div>
          <div v-if="!isEdit" class="title">代码片段</div>
        </div>
      </div>

      <div class="right">
        <a-select
          ref="select"
          v-model:value="theme"
          style="width: 120px"
          @change="setThemeEdit()"
        >
          <a-select-option value="vs">vs</a-select-option>
          <a-select-option value="vs-dark">vs-dark</a-select-option>
          <a-select-option value="hc-black">hc-black</a-select-option>
          <a-select-option value="hc-light">hc-light</a-select-option>
        </a-select>
      </div>
    </div>

    <div style="margin-top: 24px" class="editorBox"></div>
    <div id="editor" style="height: 370px"></div>
  </div>
</template>

<style lang="scss">
.codeEdit {
  color: hsla(0, 0%, 100%, 0.85);
  width: 1200px;
  margin-top: 24px;
  border: 1px solid #434343;
  height: 500px;
  border-radius: 12px 12px 0 0;
  background-color: rgba(0, 0, 0, 0.7);
  box-sizing: border-box;
  padding: 24px;
  .nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 32px;
    .icon,
    .left {
      display: flex;
      align-items: center;
      .icon-1 {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background-color: #ff5f56;
        margin-right: 10px;
      }
      .icon-2 {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background-color: #ffbd2e;
        margin-right: 10px;
      }
      .icon-3 {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background-color: #27c93f;
        margin-right: 10px;
      }
    }
    .title {
      font-size: 18px;
      margin-left: 24px;
    }
  }

  .monaco-editor .margin-view-overlays .line-numbers {
    text-align: center !important;
  }

  .editorBox {
    height: 30px;
    background-color: #1e1e1e;
  }
}
</style>
