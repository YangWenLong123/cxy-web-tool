<!--
 * @Author: along
 * @Description: 程序员盒子技术社区
 * @Date: 2023-05-30 21:31:24
 * @LastEditors: along
 * @LastEditTime: 2023-08-25 10:25:08
 * @FilePath: /cxy-web-tool/src/views/community/index.vue
-->
<template>
  <div class="CxyCommunity">
    <CardBox :tool="state.tool" />
  </div>
</template>

<script lang='ts' setup>
  import { onMounted, reactive } from "vue";
  import CardBox from "@/components/card/index.vue";

  const state = reactive({
    tool: [
      {
        title: "",
        icon: "",
        list: [
          {
            label: "博客园",
            url: "https://www.cnblogs.com/",
            icon: "https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/cnblogs.png",
            desc: "开发者的网上家园",
          },
          {
            label: "CSDN",
            url: "https://www.csdn.net",
            icon: "https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/csdn.png",
            desc: "中文最大的技术社区",
          },
          {
            label: "开源中国",
            url: "https://www.oschina.net",
            icon: "https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/oschina.ico",
            desc: "目前国内最大的开源技术社区",
          },
          {
            label: "SF思否",
            url: "https://segmentfault.com",
            icon: "http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_87feae864e274579824d7398a588e042.png",
            desc: "思否是中国领先的开发者技术社区",
          },
          {
            label: "掘金",
            url: "https://juejin.cn",
            icon: "https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/juejin.png",
            desc: "一个帮助开发者成长的社区",
          },
          {
            label: "51CTO",
            url: "https://www.51cto.com/",
            icon: "https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/51.ico",
            desc: "中国领先的IT技术网站",
          },
          {
            label: "开发者头条",
            url: "https://toutiao.io",
            icon: "https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/toutiao.png",
            desc: "程序员分享平台",
          },
          {
            label: "InfoQ",
            url: "https://xie.infoq.cn",
            icon: "https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/InfoQ.jpg",
            desc: "一个实践驱动的技术社区资讯站点",
          },
          {
            label: "StackOverflow",
            url: "https://stackoverflow.com",
            icon: "https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/stackoverflow.svg",
            desc: "全球最大的技术问答社区",
          },
          {
            label: "ChinaUnix",
            url: "http://www.chinaunix.net",
            icon: "https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/cu.png",
            desc: "中国最大的Linux/Unix技术社区",
          },
          {
            label: "Ruby china",
            url: "https://ruby-china.org",
            icon: "https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/ruby.png",
            desc: "国内最权威的 Ruby 社区",
          },
          {
            label: "Golang中文社区",
            url: "https://studygolang.com",
            icon: "https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/golang.ico",
            desc: "Go语言爱好者的学习家园",
          },
          {
            label: "开源中国",
            url: "http://www.oschina.net",
            icon: "https://static.oschina.net/new-osc/img/favicon.ico",
            desc: "领先的中文开源技术社区",
          },
          {
            label: "菜鸟教程",
            url: "https://www.runoob.com",
            icon: "https://static.runoob.com/images/favicon.ico",
            desc: "学的不仅是技术，更是梦想",
          },
          {
            label: "GoCN社区",
            url: "https://gocn.vip",
            icon: "http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_58638886f8f9485cab8cd846643c87ea.png",
            desc: "国内活跃的 Go 社区",
          },
          {
            label: "freecodecamp",
            url: "https://www.freecodecamp.org/news",
            icon: "https://cdn.freecodecamp.org/universal/favicons/favicon.ico",
            desc: "github排行第一的开源社区",
          },
          {
            label: "编程导航",
            url: "https://www.zhanlian.net/code",
            icon: "http://cdn.alongweb.top/images/daohang.png",
            desc: "编程导航 程序员的上网主页",
          },
          {
            label: "MDN",
            url: "https://developer.mozilla.org/zh-CN/",
            icon: "https://developer.mozilla.org/favicon-48x48.cbbd161b.png",
            desc: "MDN官方教程",
          },
          {
            label: "前端开发博客",
            url: "http://caibaojian.com/c/front/",
            icon: "http://caibaojian.com/favicon.ico",
            desc: "前端开发博客专注于前端开发",
          },
          {
            label: "前端性能优化之旅",
            url: "https://www.alienzhou.com/projects/fe-performance-journey/",
            icon: "https://zh.javascript.info/img/favicon/favicon.png",
            desc: "前端性能优化之旅",
          },
          {
            label: "flaviocopes",
            url: "https://flaviocopes.com/",
            icon: "https://flaviocopes.com/img/favicon-96x96.png",
            desc: "flaviocopes",
          },
          {
            label: "异步社区",
            url: "https://www.epubit.com/",
            icon: "https://cdn.ptpress.cn/pubcloud/3/app/0718A6B0/cover/20190705126F7411.jpg",
            desc: "致力于优质IT知识的出版和分享",
          },
          {
            label: "印记中文",
            url: "https://docschina.org/",
            icon: "https://docschina.org/static/favicon.ico",
            desc: "深入挖掘国外前端新领域，为中国 Web 前端开发人员提供优质文档",
          },
          {
            label: "程序员导航-媒帮派",
            url: "http://code.meibp.com/",
            icon: "http://cdn.alongweb.top/images/B-1.png",
            desc: "媒帮派程序员导航为开发者收集常用网站工具",
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
