<!--
 * @Author: along
 * @Description: 写文章
 * @Date: 2024-11-13 09:05:02
 * @LastEditors: along
 * @LastEditTime: 2025-01-15 15:13:36
 * @FilePath: /cxy-web-tool/src/views/writingText/index.vue
-->
<template>
  <div class="CxyWritingText">
    <div class="nav">
      <a-input
        v-model:value="title"
        placeholder="请输入文章标题"
        style="width: 40%"
      />

      <a-button type="primary" @click="publishedArticleID()">发布</a-button>
    </div>

    <div id="vditor" />

    <a-modal
      v-model:visible="visible"
      :closable="false"
      title="文章信息"
      cancelText="取消"
      okText="发布"
      @ok="handleOk"
    >
      <a-form :label-col="{ span: 4 }" :wrapper-col="{ span: 14 }">
        <a-form-item label="用户名" v-bind="validateInfos.author">
          <a-input
            v-model:value="modelRef.author"
            placeholder="请输入用户名"
            allowClear
            :maxLength="20"
          />
        </a-form-item>
        <a-form-item label="文章分类" v-bind="validateInfos.type">
          <a-select
            ref="select"
            v-model:value="modelRef.type"
            placeholder="请选择文章分类"
            allowClear
          >
            <a-select-option
              v-for="row in typeList"
              :value="row.value"
              :key="row.value"
              >{{ row.lable }}</a-select-option
            >
          </a-select>
        </a-form-item>

        <a-form-item label="文章封面" v-bind="validateInfos.thumb_url">
          <a-upload
            v-model:file-list="fileList"
            name="avatar"
            list-type="picture-card"
            class="avatar-uploader"
            :show-upload-list="false"
            :customRequest="customRequestMethod"
          >
            <img
              v-if="modelRef.thumb_url"
              :src="modelRef.thumb_url"
              alt="avatar"
              style="width: 102px"
            />
            <div v-else>
              <loading-outlined v-if="loading"></loading-outlined>
              <plus-outlined v-else></plus-outlined>
              <div class="ant-upload-text">Upload</div>
            </div>
          </a-upload>
        </a-form-item>

        <a-form-item label="文章描述" v-bind="validateInfos.desc">
          <a-textarea
            v-model:value="modelRef.desc"
            placeholder="请输入文字描述"
            allowClear
            :maxLength="200"
            :auto-size="{ minRows: 4, maxRows: 6 }"
          />
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, reactive, toRaw, nextTick } from "vue";
import Vditor from "vditor";
import "vditor/dist/index.css";
import { message } from "ant-design-vue";
import { Form } from "ant-design-vue";
import { createPosts } from "@/api/posts";
import router from "@/router";

const title = ref<any>("");
const visible = ref<boolean>(false);
const vditor = ref<Vditor | null>(null);
const loading = ref<boolean>(false);
const fileList = ref<any>([]);

const typeList = ref<any>([
  { value: 0, lable: "HTML5" },
  { value: 1, lable: "CSS3" },
  { value: 2, lable: "JavaScript" },
  { value: 3, lable: "设计模式" },
  { value: 4, lable: "数据结构" },
  { value: 5, lable: "TypeScript" },
  { value: 6, lable: "Vue" },
  { value: 7, lable: "react" },
  { value: 8, lable: "uniapp" },
  { value: 9, lable: "小程序" },
  { value: 10, lable: "性能优化" },
  { value: 11, lable: "前端工程化" },
  { value: 12, lable: "NestJs" },
]);

const useForm = Form.useForm;
const modelRef = reactive({
  author: "",
  type: undefined,
  thumb_url: "",
  desc: "",
});

const rulesRef = reactive({
  author: [
    {
      required: true,
      message: "请输入用户名",
    },
  ],
  type: [
    {
      required: true,
      message: "请选择文章分类",
    },
  ],
  thumb_url: [
    {
      required: true,
      message: "请上传文章封面图",
    },
  ],
  desc: [
    {
      required: true,
      message: "请输入文章描述",
    },
  ],
});

const { resetFields, validate, validateInfos } = useForm(modelRef, rulesRef, {
  onValidate: (...args) => console.log(...args),
});

const publishedArticleID = () => {
  if (!title.value) return message.warning("请输入文章标题");

  const content = vditor.value.getHTML();

  if (!content) return message.warning("请输入文章内容");

  visible.value = true;

  nextTick(() => {
    resetFields();
  });

  console.log("vditor", vditor.value.getHTML());
};

const customRequestMethod = (info: any) => {
  console.log("info", info.file);

  let file = info.file;
  var reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    modelRef.thumb_url = reader.result;
  };
  reader.onerror = function (err) {
    console.log(err);
  };
};

const handleOk = () => {
  validate()
    .then(() => {
      console.log(toRaw(modelRef));

      const dd = toRaw(modelRef);

      const data = {
        title: title.value,
        content: vditor.value.getHTML(),
        ...dd,
        user_id: JSON.parse(localStorage.getItem("userInfo") || "{}")?.id,
      };

      createPosts(data).then(() => {
        message.success("发布成功");
        visible.value = false;

        setTimeout(() => {
          router.push({ path: "/platform" });
        }, 100);
      });
    })
    .catch((err) => {
      console.log("error", err);
    });
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
      accept: ".png, .jpg, .jpeg, .gif, .bmp, .webp",
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
@import url("./index.scss");
</style>
