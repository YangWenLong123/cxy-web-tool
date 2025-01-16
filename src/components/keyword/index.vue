<!--
 * @Author: along
 * @Description: 程序员盒子搜索组件
 * @Date: 2023-05-30 21:31:24
 * @LastEditors: along
 * @LastEditTime: 2024-10-22 10:06:18
 * @FilePath: /cxy-web-tool/src/components/keyword/index.vue
-->
<template>
  <div class="CxyKeywordComponents">
    <!-- <img src="@/assets/images/bg.png" class="logo" /> -->

    <!-- 时间 -->
    <!-- <div class="sideBox">
      <div class="timeBox">
        <div>{{ getCurrentDate }}</div>
        <div style="margin-left: 12px">{{ getDayOfWeekValue }}</div>
      </div>
      <div class="textBox">
        <div
          class="extend"
          v-for="(item, index) in state.extendedFunction"
          :key="index"
        >
          <i class="iconfont" :class="item.icon"></i>
          <div>{{ item.name }}</div>
        </div>
      </div>
    </div> -->

    <div class="box" style="margin-top: 20px">
      <div class="boxFlex">
        <div class="type">
          <a-dropdown>
            <a class="ant-dropdown-link" @click.prevent>
              <span class="type_name">{{ state.typeName }}</span>
              <i class="iconfont icon-xiajiantou"></i>
            </a>
            <template #overlay>
              <a-menu @click="selectType">
                <a-menu-item
                  v-for="record in state.keywordList[state.category]"
                  :key="record"
                >
                  <a href="javascript:;">{{ record }}</a>
                </a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>
        </div>
        <a-input
          v-model:value="state.value"
          placeholder="程序员盒子，内容搜索、更快、更方便"
          @pressEnter="searchKeyword(state.value)"
          @change="changeValue()"
          id="cxyInput"
          autocomplete="off"
          allowClear
        />
        <div class="search" @click="searchKeyword(state.value)">搜索</div>
      </div>
      <div class="searchBox" v-if="state.value && state.suggestions.length">
        <div
          v-for="(value, index) in state.suggestions"
          :key="index"
          class="searchItems"
          @click="
            () => {
              state.value = '';
              searchKeyword(value);
            }
          "
        >
          {{ value }}
        </div>
      </div>
    </div>
    <div class="category">
      <div
        class="category_items"
        v-for="(option, index) in state.categoryList"
        :key="index"
        :style="{ color: state.category === index ? '#12a272' : '#333' }"
        @click="
          () => {
            state.category = index;
            state.typeName = state.keywordList[index][0];
          }
        "
      >
        {{ option }}
      </div>
    </div>

    <!-- <div class="recommend">
      <div
        v-for="(name, index) in state.recommend"
        :key="index"
        class="recommend_items"
        @click="builtHref(index, name)"
      >
        <div>{{ name }}</div>
        <i class="iconfont icon-youjiantou"></i>
      </div>
    </div> -->

    <div class="main">
      <div class="mainBox">
        <Menu />
        <Main />
        <!-- <Side /> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, reactive, ref } from "vue";
import { getCurrentDateTime, getDayOfWeek } from "@/utils/index";
import Menu from "./components/Menu/index.vue";
import Main from "./components/Main/index.vue";
import Side from "./components/Side/index.vue";

const state = reactive({
  value: ``,
  category: 0,
  categoryList: ["搜索", "技术", "图片", "生活"],
  typeName: "百度",
  keywordList: [
    ["百度", "Google", "必应", "开发者搜索", "头条", "perplexity"],
    ["GitHub", "CSDN", "知乎", "产品经理", "掘金", "和鲸", "语雀"],
    ["文心一格", "花瓣AI圈", "Civitai", "Lexica"],
    ["网易云音乐", "淘宝", "京东", "下厨房", "12306", "快递100"],
  ],
  suggestions: [],
  recommend: [
    "axios详解",
    "JavaScript的防抖与节流",
    "Vue3项目",
    "我想要五彩斑斓的黑",
    "想听海阔天空",
    "我想买一件宽松的T恤",
  ],
  extendedFunction: [
    {
      icon: "icon-zanzhujin",
      name: "赞助榜",
    },
    {
      icon: "icon-rizhi",
      name: "更新日志",
    },
  ],
});

const getCurrentDate = ref<any>(getCurrentDateTime());
const getDayOfWeekValue = ref<any>(getDayOfWeek());

onMounted(() => {
  document.getElementById("cxyInput")?.focus();

  // updateTime();
});

const updateTime = () => {
  setTimeout(() => {
    getCurrentDate.value = getCurrentDateTime();
    updateTime();

    console.log("====", getCurrentDate.value);
  }, 1000);
};

const selectType = ({ key }: { key: string }) => {
  state.typeName = key;
};

const searchKeyword = (value: any) => {
  if (state.typeName === "百度") {
    window.open("https://www.baidu.com/s?wd=" + value);
  } else if (state.typeName === "Google") {
    window.open("https://www.google.com/search?q=" + value);
  } else if (state.typeName === "必应") {
    window.open("https://cn.bing.com/search?q=" + value);
  } else if (state.typeName === "开发者搜索") {
    window.open("https://kaifa.baidu.com/searchPage?wd=" + value);
  } else if (state.typeName === "头条") {
    window.open(
      `https://so.toutiao.com/search?wid_ct=${Date.now()}&dvpf=pc&source=input&keyword=1` +
        value
    );
  } else if (state.typeName === "perplexity") {
    window.open(`https://www.perplexity.ai/search?q=${value}&focus=internet`);
  } else if (state.typeName === "GitHub") {
    window.open(`https://github.com/search?q=` + value);
  } else if (state.typeName === "CSDN") {
    window.open(`https://so.csdn.net/so/search/all?q=` + value);
  } else if (state.typeName === "知乎") {
    window.open(`https://www.zhihu.com/search?type=content&q=` + value);
  } else if (state.typeName === "产品经理") {
    window.open(`http://api.woshipm.com/search/list.html?key=` + value);
  } else if (state.typeName === "掘金") {
    window.open(`https://juejin.cn/search?query=${value}&type=0`);
  } else if (state.typeName === "语雀") {
    window.open(
      `https://www.yuque.com/search?q=${value}&type=content&scope=%2F&tab=related&p=1&sence=modal`
    );
  } else if (state.typeName === "和鲸") {
    window.open(`https://www.heywhale.com/home/global?search=` + value);
  } else if (state.typeName === "文心一格") {
    window.open(`https://yige.baidu.com/search/` + value);
  } else if (state.typeName === "花瓣AI圈") {
    window.open(`https://huaban.com/search?q=${value}&type=aigc`);
  } else if (state.typeName === "Civitai") {
    window.open(`https://civitai.com/?query=` + value);
  } else if (state.typeName === "Lexica") {
    window.open(`https://lexica.art/?q=` + value);
  } else if (state.typeName === "网易云音乐") {
    window.open(`https://music.163.com/#/search/m/?s=` + value);
  } else if (state.typeName === "淘宝") {
    window.open(`https://s.taobao.com/search?q=` + value);
  } else if (state.typeName === "京东") {
    window.open(`https://search.jd.com/Search?keyword=` + value);
  } else if (state.typeName === "下厨房") {
    window.open(`https://www.xiachufang.com/search/?keyword=` + value);
  } else if (state.typeName === "12306") {
    window.open(`https://www.12306.cn?` + value);
  } else if (state.typeName === "快递100") {
    window.open(`https://www.kuaidi100.com/?` + value);
  }
  console.log(state.typeName, state.value);
};

const jsonp = (url: string) => {
  return new Promise((resolve) => {
    const callbackFuncName = `jsonp_${Date.now()}`;

    window[callbackFuncName] = (data: any) => {
      resolve(data);
      delete window[callbackFuncName];
    };

    const script = document.createElement("script");
    script.src = `${url}&cb=${callbackFuncName}`;
    document.body.appendChild(script);
  });
};

const changeValue = async () => {
  const { s }: any = await jsonp(`https://www.baidu.com/su?wd=${state.value}`);
  state.suggestions = s;
  console.log("百度", state.suggestions);
};

const builtHref = (index: number, value: string) => {
  if (index === 0) {
    window.open("https://www.baidu.com/s?wd=" + value);
  } else if (index === 1) {
    window.open("https://kaifa.baidu.com/searchPage?wd=" + value);
  } else if (index === 2) {
    window.open(`https://github.com/search?q=` + value);
  } else if (index === 3) {
    window.open(`https://yige.baidu.com/search/` + value);
  } else if (index === 4) {
    window.open(`https://music.163.com/#/search/m/?s=` + value);
  } else if (index === 5) {
    window.open(`https://s.taobao.com/search?q=` + value);
  }
};
</script>

<style lang="scss" scoped>
@import url("./index.scss");
</style>
