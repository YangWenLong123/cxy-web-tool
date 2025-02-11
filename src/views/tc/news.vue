<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { weibo } from "@/api/news";
import { message } from "ant-design-vue";

const newsList = ref<any[]>([]);

const spinning = ref(true);

const getNewsList = async () => {
  const re = await weibo({});

  newsList.value = re;

  spinning.value = false;

  console.log(11, newsList.value);
};

const getModeForUsageLocation = (item) => {
  window.open(
    `https://s.weibo.com/weibo?q=%23${encodeURI(item.note)}%23&band_rank=${
      item.rank
    }&Refer=top`,
    "_blank"
  );
};

const refrsh = () => {
  spinning.value = true;

  getNewsList();
  message.success("刷新成功");
};

getNewsList();
</script>

<template>
  <div class="newsMain">
    <div class="wb">
      <div class="wb_head flex">
        <div></div>
        <div>微博热搜榜</div>
        <i class="iconfont icon-shuaxin" @click="refrsh()"></i>
      </div>

      <a-spin :spinning="spinning">
        <div class="wb_content">
          <div
            v-for="(item, index) in newsList"
            :key="index"
            class="wb_item"
            @click="getModeForUsageLocation(item)"
          >
            <div class="flex">
              <div>{{ index + 1 }}、</div>
              <div>{{ item.note }}</div>
            </div>

            <div class="flex">
              <div v-if="item.flag_desc" style="margin-right: 4px">
                {{ item.flag_desc }}
              </div>
              <div>{{ (item.num / 10000).toFixed(2) }}万</div>
            </div>
          </div>
        </div>
      </a-spin>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.newsMain {
  box-sizing: border-box;
  padding-top: 20px;
  .wb {
    display: flex;
    flex-direction: column;
    width: 48%;
    .wb_head {
      background-color: rgb(240, 36, 36, 0.6);
      text-align: center;
      display: flex;
      justify-content: space-between;
      position: relative;
      color: #fff;
      font-size: 20px;
      line-height: 32px;
      border-radius: 8px 8px 0 0;
      box-sizing: border-box;
      padding: 0 10px;
      cursor: pointer;
    }
    .wb_content {
      height: 300px;
      max-height: 300px;
      overflow: hidden;
      overflow-y: auto;
      box-sizing: border-box;
      padding: 8px 18px;
      background-color: rgba(0, 0, 0, 0.7);
      border-radius: 0 0 8px 8px;

      .wb_item {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .flex {
        display: flex;
        align-items: center;
        color: #fff;
        cursor: pointer;
        line-height: 28px;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
