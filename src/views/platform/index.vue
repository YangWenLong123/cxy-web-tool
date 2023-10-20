<!--
 * @Author: along
 * @Description: 学习平台
 * @Date: 2023-05-30 21:31:24
 * @LastEditors: along
 * @LastEditTime: 2023-08-25 11:24:26
 * @FilePath: /cxy-web-tool/src/views/platform/index.vue
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
      title: "视频网站",
      icon: "icon-mogui",
      list: [
        {
          label: "腾讯课堂",
          url: "https://ke.qq.com/course/list?mt=1001&st=2004",
          icon: "icon-huanjiaozhongxin02",
          desc: "腾讯推出的综合性在线终身学习平台,聚合大量优质教育机构和名师",
        },
        {
          label: "网易云课堂",
          url: "https://study.163.com/",
          icon: "icon-sanxianglogo",
          desc: "云课堂，是网易公司倾力打造的在线实用技能学习平台",
        },
        {
          label: "慕课网",
          url: "https://www.imooc.com/",
          icon: "https://static3.sycdn.imooc.com/static/images/header-title-icon.png",
          desc: "慕课网隶属于北京奥鹏远程教育中心有限公司。我们是IT教育行业的造梦者，也是前沿技术内容的创造者和传播者！",
        },
        {
          label: "bilibili",
          url: "https://www.bilibili.com/?spm_id_from=333.337.0.0",
          icon: "icon-bilibili-fill",
          desc: "哔哩哔哩是中国年轻世代高度聚集的综合性视频社区，被用户亲切地称为“B站”",
        },
        {
          label: "IT大咖说",
          url: "https://www.itdks.com/ActivityC/index?type=meet&cate_id=205",
          icon: "icon-shujukeshihua1",
          desc: "知识共享平台，大咖带你来学习",
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
