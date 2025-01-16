<!--
 * @Author: along
 * @Description: 技术博客
 * @Date: 2023-05-30 21:31:24
 * @LastEditors: along
 * @LastEditTime: 2024-07-25 14:58:57
 * @FilePath: /cxy-web-tool/src/views/ai/index.vue
-->
<template>
  <div class="CxyAi">
    <CardBox :tool="state.tool" />
  </div>
</template>

<script lang="ts" setup>
import { onMounted, reactive } from "vue";
import CardBox from "@/components/card/index.vue";

const state = reactive({
  tool: [
    {
      title: "Ai社区",
      icon: "icon-tubiaozhizuomoban-",
      list: [
        {
          label: "phind",
          url: "https://www.phind.com/",
          icon: "http://cdn.alongweb.top/images/phind.png",
          desc: "Your AI search engine and pair programmer.",
        },
        {
          label: "文心一言",
          url: "https://yiyan.baidu.com/",
          icon: "icon-qiatongxingxiang",
          desc: "百度全新一代知识增强大语言模型",
        },
        {
          label: "通义千问",
          url: "https://tongyi.aliyun.com/",
          icon: "https://img.alicdn.com/imgextra/i4/O1CN01c26iB51UyR3MKMFvk_!!6000000002586-2-tps-124-122.png",
          desc: "阿里大模型统一品牌，覆盖语言、听觉、多模态等领域",
        },
        {
          label: "poe",
          url: "https://poe.com/Assistant?handle=sage",
          icon: "http://cdn.alongweb.top/images/poe.png",
          desc: "Ai对话机器人",
        },
        {
          label: "CodeGeex",
          url: "https://codegeex.cn/zh-CN/",
          icon: "icon-mogui",
          desc: "CodeGeeX 智能编程助手",
        },
        {
          label: "Cursor",
          url: "https://www.cursor.so/",
          icon: "icon-wuguan",
          desc: "Build software faster in an editor designed for pair-programming with AI",
        },
        {
          label: "imgcook",
          url: "https://www.imgcook.com/",
          icon: "http://cdn.alongweb.top/images/imgcook.png",
          desc: "设计稿智能生成代码",
        },
        {
          label: "智能工具图谱",
          url: "https://www.coderutil.com/graph/ai",
          icon: "http://cdn.alongweb.top/images/ai.ico",
          desc: "链接全球智能ai产品",
        },
        {
          label: "办公小浣熊",
          url: "https://raccoon.sensetime.com/login?utm_source=bljuly15",
          icon: "https://raccoon-sta.sensetime.com/assets/web/logo.svg",
          desc: "AI数据分析助手",
        },
        {
          label: "白日梦",
          url: "https://aibrm.com/",
          icon: "http://cdn.alongweb.top/images/bairimeng.png",
          desc: "一款好玩的ai生成视频产品",
        },
        {
          label: "Kimi智能助手",
          url: "https://kimi.moonshot.cn/",
          icon: "https://statics.moonshot.cn/kimi-chat/favicon.ico",
          desc: "当前最火的的ai助手",
        },
        {
          label: "D-ID",
          url: "https://studio.d-id.com/",
          icon: "https://studio.d-id.com/favicon/apple-icon-120x120.png",
          desc: "静态人像图开口说话",
        },
        {
          label: "weeklyreport",
          url: "https://weeklyreport.avemaria.fun/zh",
          icon: "https://weeklyreport.avemaria.fun/icon.svg",
          desc: "周报生成器",
        },
        {
          label: "免费ChatGPT",
          url: "https://www.uyanai.com/",
          icon: "https://www.uyanai.com/images/web_logo.svg",
          desc: "免费chatgpt、多模态、MJ绘画",
        },
        {
          label: "agentgpt",
          url: "https://agentgpt.reworkd.ai/zh",
          icon: "http://cdn.alongweb.top/images/agent.png",
          desc: "自主人工智能开源项",
        },
        {
          label: "包阅Ai",
          url: "https://baoyueai.com/channel",
          icon: "https://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_ad9f775dec8a4a26bdffa8eb41ec6288.png",
          desc: "你的智能Ai阅读助手",
        },
        {
          label: "Web3导航",
          url: "https://web3.yunyingbiji.cn/",
          icon: "https://web3.yunyingbiji.cn/wp-content/uploads/2022/10/ac1v2-lsg7h-001.ico",
          desc: "全网web3热门工具集",
        },
      ],
    },
  ] as any,
});

onMounted(() => {});
</script>

<style lang="scss">
@import url("./index.scss");
</style>
