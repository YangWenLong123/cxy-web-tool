<!--
 * @Author: along
 * @Description: 
 * @Date: 2024-10-21 15:01:15
 * @LastEditors: along
 * @LastEditTime: 2024-10-22 16:40:44
 * @FilePath: /cxy-web-tool/src/components/keyword/components/Main/index.vue
-->
<template>
  <div class="CxyHomeMainComponents">
    <div class="itemBox" id="itemBox">
      <div class="card" v-for="(item, index) in state.composite" :key="index">
        <a :href="item.url">
          <template v-if="item.color.length > 1">
            <span v-for="(v, i) in item.name" :key="i">
              <span :style="{ color: item.color[i] }">{{ v }}</span>
            </span>
          </template>
          <template v-else>
            <span :style="{ color: item.color[0] }">{{ item.name }}</span>
          </template>
        </a>
      </div>
    </div>

    <div class="studyManual" id="studyManual">
      <div class="navBar">
        <img src="http://cdn.alongweb.top/cxy/icon-book.png" alt="" />
        <div>常用学习手册</div>
      </div>
      <a
        class="studyManualCard"
        v-for="(item, index) in state.studyManual"
        :href="item.url"
        :key="index"
        target="_blank"
      >
        <div class="flexRow">
          <img
            v-if="item.icon"
            :src="item.icon"
            style="width: 20px; margin-right: 6px"
          />
          <div class="name">{{ item.name }}</div>
        </div>

        <div class="content">{{ item.content }}</div>
      </a>
    </div>

    <div class="AIModal" id="AIModal">
      <div class="navBar">
        <img src="http://cdn.alongweb.top/cxy/icon-game.png" alt="" />
        <div>AI大模型</div>
      </div>
      <a
        class="studyManualCard"
        v-for="(item, index) in state.aiList"
        :href="item.url"
        :key="index"
        target="_blank"
      >
        <div class="flexCum">
          <img v-if="item.icon" :src="item.icon" />
          <div class="name">{{ item.name }}</div>
        </div>
      </a>
    </div>

    <div class="techCommunity" id="techCommunity">
      <div class="navBar">
        <img src="http://cdn.alongweb.top/cxy/icon-book.png" alt="" />
        <div>技术社区</div>
      </div>
      <a
        class="studyManualCard"
        v-for="(item, index) in state.techCommunity"
        :href="item.url"
        :key="index"
        target="_blank"
      >
        <div class="flexRow">
          <img
            v-if="item.icon"
            :src="item.icon"
            style="width: 20px; margin-right: 6px"
          />
          <div class="name">{{ item.name }}</div>
        </div>

        <div class="content">{{ item.content }}</div>
      </a>
    </div>

    <div class="techType" id="techType">
      <div class="navBar">
        <img src="http://cdn.alongweb.top/cxy/icon-game.png" alt="" />
        <div>技术团队</div>
      </div>
      <a
        class="studyManualCard"
        v-for="(item, index) in state.techType"
        :href="item.url"
        :key="index"
        target="_blank"
      >
        <div class="flexCum">
          <img v-if="item.icon" :src="item.icon" />
          <div class="name">{{ item.name }}</div>
        </div>
      </a>
    </div>

    <div class="startup" id="startup">
      <div class="navBar">
        <img src="http://cdn.alongweb.top/cxy/icon-game.png" alt="" />
        <div>创业/资讯</div>
      </div>
      <a
        class="studyManualCard"
        v-for="(item, index) in state.startup"
        :href="item.url"
        :key="index"
        target="_blank"
        :style="{ background: item.background }"
      >
        <div class="flexCum">
          <img v-if="item.icon" :src="item.icon" />
          <div class="name">{{ item.name }}</div>
        </div>
      </a>
    </div>

    <div class="slacking" id="slacking">
      <div class="navBar">
        <img src="http://cdn.alongweb.top/cxy/icon-game.png" alt="" />
        <div>摸鱼社区</div>
      </div>
      <a
        class="studyManualCard"
        v-for="(item, index) in state.slacking"
        :href="item.url"
        :key="index"
        target="_blank"
        :style="{ background: item.background }"
      >
        <div class="flexCum">
          <img v-if="item.icon" :src="item.icon" />
          <div class="name">{{ item.name }}</div>
        </div>
      </a>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
import {
  composite,
  studyManual,
  aiList,
  techCommunity,
  techType,
  startup,
  slacking,
} from "./config";

const state = reactive<any>({
  composite,
  studyManual,
  aiList,
  techCommunity,
  techType,
  startup,
  slacking,
});
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
