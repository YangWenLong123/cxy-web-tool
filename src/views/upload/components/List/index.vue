<!--
 * @Author: along
 * @Description: 图片列表
 * @Date: 2023-05-30 21:31:24
 * @LastEditors: along
 * @LastEditTime: 2024-03-29 15:36:47
 * @FilePath: /cxy-web-tool/src/views/upload/components/List/index.vue
-->
<template>
  <div class="CxyListComponents">
    <div class="flexWrap">
      <a-spin size="large" :spinning="state.spinning">
        <div class="imagesWrap">
          <div
            class="ImagesMain"
            v-for="(record, index) in state.imgList.slice(
              (state.current - 1) * state.pageSize,
              state.current * state.pageSize
            )"
            :key="index"
          >
            <div
              :style="{
                background: `url(${record.url}) center center/contain no-repeat rgb(49, 49, 54)`,
              }"
              class="image-cove"
            >
              <div class="ImagesOprate">
                <i class="iconfont icon-yulan" @click="onPreview(index)"></i>
                <i
                  class="iconfont icon-fuzhilianjie"
                  :style="{ margin: '0 14px' }"
                  @click="onCopyUrl(record.url)"
                ></i>
                <i class="iconfont icon-xiazai" @click="onDownLoad(record)"></i>
              </div>
            </div>
          </div>
        </div>
      </a-spin>
    </div>

    <div class="pagination">
      <a-pagination
        v-model:current="state.current"
        v-model:page-size="state.pageSize"
        :page-size-options="pageSizeOptions"
        :total="state.total"
        show-quick-jumper
        show-size-changer
        show-less-items
        :show-total="(total) => `共 ${total} 条`"
        @change="onChange"
        @showSizeChange="onShowSizeChange"
      >
        <template #buildOptionText="props">
          <span>{{ props.value }}条/页</span>
          <!-- <span v-else>全部</span> -->
        </template>
      </a-pagination>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { message } from "ant-design-vue";
import { onMounted, ref, reactive } from "vue";
import { getImagesList } from "@/api/upload";
import { v3ImgPreviewFn } from "v3-img-preview";
import useClipboard from "vue-clipboard3";
import moment from "moment";

const { toClipboard } = useClipboard();
const pageSizeOptions = ref<string[]>(["30", "50", "80", "100"]);
const state = reactive({
  imgList: [] as any,
  current: 1,
  total: 0,
  pageSize: 30,
  spinning: true,
});

onMounted(async () => {
  state.spinning = true;
  init();
});

const init = async () => {
  const { data }: any = await getImagesList();

  state.imgList = data.list || [];

  if (state.imgList?.length) {
    state.imgList = state.imgList.sort((a, b) => {
      return (
        new Date(b.create_time).getTime() - new Date(a.create_time).getTime()
      );
    });
  }

  state.total = data.list.length;
  state.spinning = false;
};

const onPreview = (index: number) => {
  const images = state.imgList.map((item) => item.url);

  v3ImgPreviewFn({ images, index });
};

const onCopyUrl = async (url: any) => {
  try {
    await toClipboard(url);

    message.success("复制成功");
  } catch (error) {
    message.warning("复制失败");
  }
};

const onDownLoad = async (record: any) => {
  const a = document.createElement("a");
  fetch(record.url)
    .then((res) => {
      return res.blob();
    })
    .then((blob) => {
      a.href = URL.createObjectURL(blob);
      a.download = record.name.split(".")[0];
      document.body.appendChild(a);
      a.click();
    });
};

const showLoading = () => {
  state.spinning = true;
};

const onShowSizeChange = (current: number, pageSize: number) => {
  state.pageSize = pageSize;
};

const onChange = (page: number) => {
  state.page = page;
};

defineExpose({ init, showLoading });
</script>

<style lang="scss">
@import "./index.scss";
</style>
