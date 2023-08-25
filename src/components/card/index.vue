<!--
 * @Author: along
 * @Description: 卡片
 * @Date: 2023-08-25 10:17:30
 * @LastEditors: along
 * @LastEditTime: 2023-08-25 10:36:40
 * @FilePath: /cxy-web-tool/src/components/card/index.vue
-->
<template>
  <div
    v-for="(record, index) in props.tool"
    :key="index"
    class="toolBox"
  >
    <div
      class="tool_header"
      v-if="record?.title"
    >
      <i
        class="iconfont tool_title_icon"
        :class="record.icon"
        :style="{color: randomColor()}"
      />
      <div class="tool_title">{{ record.title }}</div>
    </div>

    <template v-if="record.list.length">
      <div class="tool_wrap">
        <div
          v-for="(option, idx) in record.list"
          :key="idx"
          class="toolItems"
          @click="goPage(option.url)"
        >
          <div class="header">
            <!-- 在线地址 -->
            <template v-if="option.icon.includes('http')">
              <img
                :src="option.icon"
                :style="{width: '20px'}"
              />
            </template>

            <!-- icon -->
            <template v-else>
              <i
                class="iconfont tool_title_icon"
                :class="option.icon"
                :style="{color: randomColor()}"
              />
            </template>
            <div class="label">{{ option.label }}</div>
          </div>
          <div class="desc">{{  option.desc  }}</div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup >
  import { defineProps } from 'vue';

  const props = defineProps({
    tool: {
      type: Array,
      default: []
    }
  })

  const randomColor = () => {
    return "#" + (((1 << 24) * Math.random()) | 0).toString(16).padStart(6, "0");
  };

  const goPage = (url) => {
    window.open(url);
  };
</script>

<style lang="scss">
  @import "./index.scss";
</style>