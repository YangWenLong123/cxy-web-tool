<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { juejin, sifou, bokeyuan, gitee } from "@/api/news";

const isH5 = ref(window.innerWidth < 768);

const newsList = ref<any[]>([]);
const newsList2 = ref<any[]>([]);
const newsList3 = ref<any[]>([]);
const newsList4 = ref<any[]>([]);

const spinning = ref(true);
const spinning2 = ref(true);
const spinning3 = ref(true);
const spinning4 = ref(true);

const getNewsList = async (type: any) => {
  if (type === "juejin" || !type) {
    const re = await juejin({});
    newsList.value = re ?? [];
    spinning.value = false;
  }

  if (type === "sifou" || !type) {
    const re = await sifou({});
    newsList2.value = re ?? [];
    spinning2.value = false;
  }

  if (type === "bokeyuan" || !type) {
    const re = await bokeyuan({});
    newsList3.value = re ?? [];
    spinning3.value = false;
  }

  if (type === "gitee" || !type) {
    const re = await gitee({});
    newsList4.value = re ?? [];
    spinning4.value = false;
  }
};

const getModeForUsageLocation = (item) => {
  window.open(item.href);
};

const refrsh = (type) => {
  switch (type) {
    case "juejin":
      spinning.value = true;
      getNewsList(type);
      break;
    case "sifou":
      spinning2.value = true;
      getNewsList(type);
      break;
    case "bokeyuan":
      spinning3.value = true;
      getNewsList(type);
      break;
    case "gitee":
      spinning4.value = true;
      getNewsList(type);
      break;
  }
};

getNewsList("juejin");
getNewsList("sifou");
getNewsList("bokeyuan");
getNewsList("gitee");
</script>

<template>
  <div class="newsMain" :style="{ display: isH5 ? '' : 'flex' }">
    <div
      class="wb"
      :style="{
        width: isH5 ? '100%' : '24%',
        marginLeft: isH5 ? '0' : '15px',
        marginBottom: isH5 ? '15px' : '0',
      }"
    >
      <div class="wb_head flex">
        <div></div>
        <div style="color: rgb(48, 49, 51)">
          <img
            src="@/assets/images/juejin.png"
            alt=""
            style="width: 22px; margin-right: 6px"
          />
          <span>掘金热搜榜</span>
        </div>
        <i
          style="color: rgb(48, 49, 51)"
          class="iconfont icon-shuaxin"
          @click="refrsh('juejin')"
        ></i>
      </div>

      <a-spin :spinning="spinning" tip="正在努力的爬取数据...">
        <div class="wb_content">
          <div
            v-for="(item, index) in newsList"
            :key="index"
            class="wb_item"
            @click="getModeForUsageLocation(item)"
          >
            <div class="flex">
              <div
                class="number"
                :style="{
                  color:
                    index === 0
                      ? '#fadb14'
                      : index == 1
                      ? '#a9a9a9'
                      : index == 2
                      ? '#d48806'
                      : '#7a7a7a',
                }"
              >
                {{ index + 1 }}
              </div>
              <div class="note" style="color: #495060">{{ item.note }}</div>
            </div>

            <div class="flex">
              <div class="hot-text" style="color: #7a7a7a">
                {{ item.num }}热度
              </div>
            </div>
          </div>
        </div>
      </a-spin>
    </div>

    <div
      class="wb"
      :style="{
        width: isH5 ? '100%' : '24%',
        marginLeft: isH5 ? '0' : '15px',
        marginBottom: isH5 ? '15px' : '0',
      }"
    >
      <div class="wb_head flex">
        <div></div>
        <div style="color: rgb(48, 49, 51)">
          <img
            src="@/assets/images/sifou.png"
            alt=""
            style="width: 22px; margin-right: 6px"
          />
          <span>思否热搜榜</span>
        </div>
        <i
          style="color: rgb(48, 49, 51)"
          class="iconfont icon-shuaxin"
          @click="refrsh('sifou')"
        ></i>
      </div>

      <a-spin :spinning="spinning2" tip="正在努力的爬取数据...">
        <div class="wb_content">
          <div
            v-for="(item, index) in newsList2"
            :key="index"
            class="wb_item"
            @click="getModeForUsageLocation(item)"
          >
            <div class="flex">
              <div
                class="number"
                :style="{
                  color:
                    index === 0
                      ? '#fadb14'
                      : index == 1
                      ? '#a9a9a9'
                      : index == 2
                      ? '#d48806'
                      : '#7a7a7a',
                }"
              >
                {{ index + 1 }}
              </div>
              <div class="note" style="color: #495060">{{ item.note }}</div>
            </div>

            <div class="flex" v-if="item.num">
              <div class="hot-text" style="color: #7a7a7a">
                {{ item.num }}热度
              </div>
            </div>
          </div>
        </div>
      </a-spin>
    </div>

    <div
      class="wb"
      :style="{
        width: isH5 ? '100%' : '24%',
        marginLeft: isH5 ? '0' : '15px',
        marginBottom: isH5 ? '15px' : '0',
      }"
    >
      <div class="wb_head flex">
        <div></div>
        <div style="color: rgb(48, 49, 51)">
          <img
            src="@/assets/images/bokeyuan.png"
            alt=""
            style="width: 22px; margin-right: 6px"
          />
          <span>博客园热搜榜</span>
        </div>
        <i
          style="color: rgb(48, 49, 51)"
          class="iconfont icon-shuaxin"
          @click="refrsh('bokeyuan')"
        ></i>
      </div>

      <a-spin :spinning="spinning3" tip="正在努力的爬取数据...">
        <div class="wb_content">
          <div
            v-for="(item, index) in newsList3"
            :key="index"
            class="wb_item"
            @click="getModeForUsageLocation(item)"
          >
            <div class="flex">
              <div
                class="number"
                :style="{
                  color:
                    index === 0
                      ? '#fadb14'
                      : index == 1
                      ? '#a9a9a9'
                      : index == 2
                      ? '#d48806'
                      : '#7a7a7a',
                }"
              >
                {{ index + 1 }}
              </div>
              <div class="note" style="color: #495060">{{ item.note }}</div>
            </div>

            <div class="flex" v-if="item.num">
              <div class="hot-text" style="color: #7a7a7a">
                {{ item.num }}热度
              </div>
            </div>
          </div>
        </div>
      </a-spin>
    </div>

    <div
      class="wb"
      :style="{
        width: isH5 ? '100%' : '24%',
        marginLeft: isH5 ? '0' : '15px',
        marginBottom: isH5 ? '15px' : '0',
      }"
    >
      <div class="wb_head flex">
        <div></div>
        <div style="color: rgb(48, 49, 51)">
          <img
            src="@/assets/images/gitee.png"
            alt=""
            style="width: 22px; margin-right: 6px"
          />
          <span>gitee热搜榜</span>
        </div>
        <i
          style="color: rgb(48, 49, 51)"
          class="iconfont icon-shuaxin"
          @click="refrsh('gitee')"
        ></i>
      </div>

      <a-spin :spinning="spinning4" tip="正在努力的爬取数据...">
        <div class="wb_content">
          <div
            v-for="(item, index) in newsList4"
            :key="index"
            class="wb_item"
            @click="getModeForUsageLocation(item)"
          >
            <div class="flex">
              <div
                class="number"
                :style="{
                  color:
                    index === 0
                      ? '#fadb14'
                      : index == 1
                      ? '#a9a9a9'
                      : index == 2
                      ? '#d48806'
                      : '#7a7a7a',
                }"
              >
                {{ index + 1 }}
              </div>
              <div class="note" style="color: #495060">{{ item.note }}</div>
            </div>

            <div class="flex" v-if="item.num">
              <div class="hot-text" style="color: #7a7a7a">
                {{ item.num }}热度
              </div>
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
  padding: 10px 12px;
  // display: flex;
  align-items: center;
  .wb {
    display: flex;
    flex-direction: column;
    // width: 24%;
    // width: 100%;
    background-color: rgb(255, 255, 255);
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 8px;
    border-radius: 10px;
    // margin-left: 15px;
    .wb_head {
      // background-color: rgb(240, 36, 36, 0.6);
      text-align: center;
      display: flex;
      justify-content: space-between;
      position: relative;
      color: #fff;
      font-size: 16px;
      border-radius: 8px 8px 0 0;
      box-sizing: border-box;
      padding: 18px 20px;
      font-weight: 700;
      cursor: pointer;
      border-bottom: 1px solid #ebeef5;
    }
    .wb_content {
      height: calc(100vh - 320px);
      max-height: calc(100vh - 320px);
      overflow: hidden;
      overflow-y: auto;
      box-sizing: border-box;
      padding: 8px;

      .wb_item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 8px 8px;
        border-bottom: 1px solid #e8e8e8;
        .note:hover {
          cursor: pointer;
          color: #61c1a1 !important;
          text-decoration: underline;
        }
      }
      .flex {
        display: flex;
        align-items: center;
        color: #fff;
        line-height: 28px;
        .number {
          width: 20px;
          text-align: left;
          font-size: 16px;
          font-weight: 700;
          margin-right: 8px;
          color: #7a7a7a;
        }

        .hot-text {
          white-space: nowrap;
          margin-left: 18px;
        }

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
