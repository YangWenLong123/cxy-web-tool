<!--
 * @Author: along
 * @Description: 技术博客
 * @Date: 2023-05-30 21:31:24
 * @LastEditors: along
 * @LastEditTime: 2023-08-25 11:02:45
 * @FilePath: /cxy-web-tool/src/views/ai/index.vue
-->
<template>
  <div class="CxyAi">
    <CardBox :tool="state.tool" />
  </div>
</template>

<script lang='ts' setup>
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
            icon: "https://www.phind.com/_next/static/media/phind_square.38930863.svg",
            desc: "Your AI search engine and pair programmer.",
          },
          {
            label: "文学一言",
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
            icon: "https://psc2.cf2.poecdn.net/7c541a4db20c256ff69f219e9d7dcaffc3a2ebf3/_next/static/media/openAIBlue.915c0399.png",
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
            icon: "icon-Pixabay",
            desc: "设计稿智能生成代码",
          },
        ],
      },
    ] as any,
  });

  onMounted(() => {});
</script>

<style lang="scss">
  @import "./index.scss";
</style>
