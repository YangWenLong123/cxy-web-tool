<!--
 * @Author: along
 * @Description: 程序员盒子搜索组件
 * @Date: 2023-05-30 21:31:24
 * @LastEditors: along
 * @LastEditTime: 2023-06-12 22:39:04
 * @FilePath: /cxy-web-tool/src/components/keyword/index.vue
-->
<template>
  <div class="CxyKeywordComponents">
    <img
      src="@/assets/images/keyword.png"
      class="logo"
    >
    <div class="box">
      <div class="type">
        <a-dropdown>
          <a
            class="ant-dropdown-link"
            @click.prevent
          >
            <span class="type_name">{{ state.typeName  }}</span>
            <i class="iconfont icon-xiajiantou"></i>
          </a>
          <template #overlay>
            <a-menu @click="selectType">
              <a-menu-item
                v-for="(record) in state.keywordList[state.category]"
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
        placeholder="Web Box 内容搜索，更快，更方便"
        @pressEnter="searchKeyword()"
        @change="changeValue()"
        id="cxyInput"
      />
      <div
        class="search"
        @click="searchKeyword()"
      >
        搜索
      </div>
    </div>
    <div class="category">
      <div
        class="category_items"
        v-for="(option, index) in state.categoryList"
        :key="index"
        :style="{color: state.category === index ? '#9aeecd' : '#000'}"
        @click="() => {
          state.category = index;
          state.typeName = state.keywordList[index][0];
        }"
      >
        {{ option  }}
      </div>
    </div>

    <div>
      {{  state.suggestions  }}
    </div>
  </div>
</template>

<script lang='ts' setup>
  import { onMounted, reactive } from "vue";

  const state = reactive({
    value: "",
    category: 0,
    categoryList: ["搜索", "技术", "图片", "生活"],
    typeName: "百度",
    keywordList: [
      ["百度", "Google", "必应", "开发者搜索", "头条", "perplexity"],
      ["GitHub", "CSDN", "知乎", "产品经理", "掘金", "和鲸"],
      ["文心一格", "花瓣AI圈", "Civitai", "Lexica"],
      ["网易云音乐", "淘宝", "京东", "下厨房", "12306", "快递100"],
    ],
    suggestions: [],
  });

  onMounted(() => {
    document.getElementById("cxyInput")?.focus();
  });

  const selectType = ({ key }: { key: string }) => {
    state.typeName = key;
  };

  const searchKeyword = () => {
    if (state.typeName === "百度") {
      window.open("https://www.baidu.com/s?wd=" + state.value);
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
    if (state.typeName === "百度") {
      const { s }: any = await jsonp(
        `https://www.baidu.com/su?wd=${state.value}`
      );
      state.suggestions = s;
      console.log("百度", state.suggestions);
    }
  };
</script>

<style lang="scss">
  .CxyKeywordComponents {
    width: 100%;
    flex: 1;
    overflow: hidden;
    overflow-y: auto;
    // border: 1px red solid;
    display: flex;
    flex-direction: column;
    align-items: center;
    .logo {
      transform: translateX(120px);
    }
    .box {
      width: 700px;
      height: 50px;
      border-radius: 6px;
      border: 2px #9aeecd solid;
      display: flex;
      align-items: center;
      .type {
        min-width: 130px;
        color: #000;
        display: flex;
        align-items: center;
        .type_name {
          padding: 0 20px 0 30px;
          color: #000;
          white-space: nowrap;
        }
        .icon-xiajiantou {
          color: #000;
          position: relative;
          top: 2px;
        }
      }
      .ant-input {
        height: 46px;
        background-color: #f5f7f8;
        border: none;
        flex: 1;
      }
      .ant-input:focus {
        border: none;
        box-shadow: none;
      }
      .search {
        width: 100px;
        height: 50px;
        text-align: center;
        line-height: 50px;
        color: #ffffff;
        border: 0 6px 6px 0;
        font-size: 20px;
        font-weight: bold;
        background-color: #9aeecd;
        cursor: pointer;
      }
    }
    .category {
      width: 700px;
      display: flex;
      align-items: center;
      height: 40px;
      .category_items {
        margin-right: 14px;
        cursor: pointer;
      }
    }
  }
</style>
