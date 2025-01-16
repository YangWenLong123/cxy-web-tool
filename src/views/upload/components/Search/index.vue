<!--
 * @Author: along
 * @Description: 操作
 * @Date: 2023-05-30 21:31:24
 * @LastEditors: along
 * @LastEditTime: 2023-09-04 13:20:34
 * @FilePath: /cxy-web-tool/src/views/upload/components/Search/index.vue
-->
<template>
  <div class="CxySearchComponents">
    <a-upload
      v-model:file-list="state.fileList"
      name="file"
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      :customRequest="(e:any) => onCustomRequest(e)"
    >
      <upload-outlined></upload-outlined>
      <div class="button-primary">上传</div>
    </a-upload>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, reactive } from "vue";
import { uploadImageFile } from "@/api/upload";
import { message } from "ant-design-vue";

const state = reactive({
  fileList: [],
});

onMounted(() => {});

const emit = defineEmits(["click", "loading"]);

const onCustomRequest = (e: any) => {
  const formData = new FormData();

  formData.append("file", e.file);

  console.log("====e====", e);
  console.log("====formData====", formData);

  emit("loading");

  uploadImageFile(formData).then((resp) => {
    if (resp.data.code === 1) {
      console.log(resp);

      emit("click");

      message.success("上传成功");
    }
  });
};
</script>

<style lang="scss">
@import url("./index.scss");
</style>
