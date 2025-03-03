<!--
 * @Author: along
 * @Description: 程序员箱子常用工具
 * @Date: 2023-05-30 21:31:24
 * @LastEditors: along
 * @LastEditTime: 2023-08-25 10:37:37
 * @FilePath: /cxy-web-tool/src/views/tool/index.vue
-->
<template>
  <div class="CxyTool">
    <CardBox :tool="state.tool" />
  </div>
</template>

<script lang="ts" setup>
import { onMounted, reactive } from "vue";
import CardBox from "@/components/card/index.vue";

const state = reactive({
  tool: [
    {
      title: "常用工具",
      icon: "icon-tubiaozhizuomoban-",
      list: [
        {
          label: "PDF24 Tools",
          url: "https://tools.pdf24.org/zh",
          icon: "icon-PDF",
          desc: "免费且易于使用的在线PDF工具",
        },
        {
          label: "JSON格式化",
          url: "https://www.baidufe.com/fehelper/json-format/index.html",
          icon: "icon-JSON",
          desc: "JSON在线格式化",
        },
        {
          label: "HTML格式转换",
          url: "https://tool.lu/html/",
          icon: "icon-html",
          desc: "HTML格式转换工具",
        },
        {
          label: "JS格式转换",
          url: "https://tool.lu/js/",
          icon: "icon-js",
          desc: "JS格式转换工具",
        },
        {
          label: "HTML转PDF",
          url: "https://www.sejda.com/html-to-pdf",
          icon: "icon-PDF",
          desc: "HTML转PDF工具",
        },
        {
          label: "CSS格式转换",
          url: "https://tool.lu/css/",
          icon: "icon-43-css",
          desc: "好用的CSS格式转换工具",
        },
        {
          label: "SQL格式转换",
          url: "https://tool.lu/sql/",
          icon: "icon-mysql",
          desc: "好用的SQL格式转换工具",
        },
        {
          label: "XML格式转换",
          url: "https://tool.lu/xml/",
          icon: "icon-xml",
          desc: "好用的XML格式转换工具",
        },
        {
          label: "在线图片编辑",
          url: "https://www.iloveimg.com/zh-cn",
          icon: "icon-tupian",
          desc: "你的在线图片编辑器就在这里，而且永远免费！",
        },
        {
          label: "图片合并分割",
          url: "http://www.zuohaotu.com/cut-image.aspx",
          icon: "icon-sihuamianfengeqi",
          desc: "可以把一张很大的图片分割成多个小图片",
        },
        {
          label: "图片加水印",
          url: "https://www.onlinedo.cn/img-shuiyin",
          icon: "icon-shuiyinguanli",
          desc: "图片加水印工具",
        },
        {
          label: "文件格式转换",
          url: "https://convertio.co/zh/",
          icon: "icon-zhuanhuan",
          desc: "将您的文件转换成任意格式",
        },
        {
          label: "图片背景消除",
          url: "https://www.remove.bg/zh",
          icon: "icon-tupian",
          desc: "好用的图片背景消除工具",
        },
        {
          label: "AI抠图",
          url: "https://www.6k6k.cn/",
          icon: "icon-wuguan",
          desc: "好用的AI抠图工具",
        },
        {
          label: "在线抠图",
          url: "https://koutu.gaoding.com/",
          icon: "icon-zaixiankoutu",
          desc: "好用的在线抠图工具",
        },
        {
          label: "图片无损压缩",
          url: "https://tinypng.com/",
          icon: "icon-yasuobao",
          desc: "好用的图片无损压缩工具",
        },
        {
          label: "即时设计",
          url: "https://js.design/?source=coder&plan=001",
          icon: "icon-sheji-xianxing",
          desc: "好用的即时设计工具",
        },
        {
          label: "搞定设计",
          url: "https://www.gaoding.com/scenes/newmedia",
          icon: "icon-sheji-xianxing",
          desc: "好用的设计工具",
        },
        {
          label: "创可贴",
          url: "https://www.chuangkit.com/",
          icon: "icon-chuangketie",
          desc: "8000万版权图片素材",
        },
        {
          label: "图怪兽",
          url: "https://818ps.com/",
          icon: "icon-mogui",
          desc: "图怪兽作图工具",
        },
        {
          label: "制作GIF图片",
          url: "https://www.tutieshi.com/",
          icon: "icon-GIF",
          desc: "制作GIF图片公开",
        },
        {
          label: "LOGO设计",
          url: "https://www.designevo.com/cn/logo-maker/",
          icon: "icon-aislogo",
          desc: "搞定你的LOGO设计",
        },
        {
          label: "GIF之家",
          url: "https://www.tutieshi.com/compose/",
          icon: "icon-GIF",
          desc: "GIF之家工具",
        },
        {
          label: "生成透明Icon",
          url: "http://www.ico51.cn/",
          icon: "icon-icon",
          desc: "生成透明Icon工具",
        },
        {
          label: "Pexels",
          url: "https://www.pexels.com/zh-cn/",
          icon: "icon-Pexels",
          desc: "才华横溢的摄影作者在这里免费分享最精彩的素材图片和视频",
        },
        {
          label: "pixabay",
          url: "https://pixabay.com/",
          icon: "icon-Pixabay",
          desc: "Stunning royalty-free images & royalty-free stock",
        },
        {
          label: "发表情",
          url: "https://www.fabiaoqing.com/",
          icon: "icon-biaoqingbao",
          desc: "表情包大全",
        },
        {
          label: "表情包制作",
          url: "https://www.dbbqb.com/",
          icon: "icon-tubiaozhizuomoban-",
          desc: "制作表情包工具",
        },
        {
          label: "PDF全能工具",
          url: "https://www.ilovepdf.com/zh-cn",
          icon: "icon-PDF",
          desc: "好用的PDF全能工具",
        },
        {
          label: "pdf2doc",
          url: "https://pdf2doc.com/zh/",
          icon: "icon-PDF",
          desc: "pdf转doc工具",
        },
        {
          label: "VIP在线视频解析",
          url: "http://tool.liumingye.cn/video/",
          icon: "icon-shipin",
          desc: "VIP在线视频解析工具",
        },
        {
          label: "数据可视化",
          url: "http://data.viggo.site/",
          icon: "icon-agora_AIzhinengjiangzao-zaoyinxiaochu",
          desc: "常用的数据可视化",
        },
        {
          label: "视频素材下载",
          url: "https://www.videvo.net/",
          icon: "icon-shipin",
          desc: "视频素材下载，你想要的都有",
        },
        {
          label: "省市区数据",
          url: "https://xiangyuecn.gitee.io/areacity-jsspider-statsgov/",
          icon: "icon-B-shengshiqu",
          desc: "全国省市区数据这里都有",
        },
        {
          label: "超级简历",
          url: "https://www.wondercv.com/",
          icon: "icon-shuyi_jianli",
          desc: "做简历，用超级简历",
        },
        {
          label: "脚本之家在线工具",
          url: "http://tools.jb51.net/#home",
          icon: "icon-gongju",
          desc: "脚本之家在线工具",
        },
        {
          label: "符号大全",
          url: "http://www.fhdq.net/emoji/emojifuhao.html",
          icon: "icon-icon-test",
          desc: "常用的符号",
        },
        {
          label: "颜色值转换",
          url: "https://www.sioe.cn/yingyong/yanse-rgb-16/",
          icon: "icon-yansetiaozheng",
          desc: "颜色值转换工具",
        },
        {
          label: "文件压缩",
          url: "https://www.apowersoft.cn/compress-file-online",
          icon: "icon-yasuobao",
          desc: "文件在线压缩",
        },
        {
          label: "代码生成图片",
          url: "https://carbon.now.sh/",
          icon: "icon-code",
          desc: "代码一键生成图片",
        },
        {
          label: "草料二维码",
          url: "https://cli.im/url",
          icon: "icon-erweima",
          desc: "二维码转换工具",
        },
        {
          label: "查询网",
          url: "https://www.ip138.com/",
          icon: "icon-jianchachaxun",
          desc: "查询最新数据",
        },
        {
          label: "小滑轮",
          url: "https://www.feiaci.com/xhl/",
          icon: "icon-icon-",
          desc: "常用的小工具",
        },
        {
          label: "字体包转CSS",
          url: "https://www.fontke.com/tool/fontface/",
          icon: "icon-zitidaxiao-",
          desc: "字体包在线生成font-face",
        },
      ],
    },
    {
      title: "常用资源",
      icon: "icon-qiatongxingxiang",
      list: [
        {
          label: "盒子网盘",
          url: "https://c.aalib.net/tool/so/",
          icon: "icon-sousuo2",
          desc: "盒子网盘内容搜索",
        },
        {
          label: "签名证书生成",
          url: "https://www.yunedit.com/update/ioszhengshu/list",
          icon: "icon-zhengshu",
          desc: "证书生成，应用内测，应用上传",
        },
        {
          label: "fir.im",
          url: "http://betaqr.com/",
          icon: "icon-yingyong",
          desc: "应用内测托管",
        },
        {
          label: "PayPal",
          url: "https://developer.paypal.com/demo/checkout/#/pattern/client",
          icon: "icon-zhifu",
          desc: "PayPal支付接入流程代码",
        },
        {
          label: "NATApp",
          url: "https://natapp.cn/",
          icon: "icon-neiwangDNS",
          desc: "开启您的内网穿透之旅",
        },
        {
          label: "yungouos",
          url: "https://www.yungouos.com/#/demo",
          icon: "icon-zhifu",
          desc: "支持 微信 扫码支付、付款码支付、公众号支付、小程序支付、H5支付、APP支付",
        },
        {
          label: "红海pro",
          url: "https://good.honghai.org/#/login",
          icon: "icon-zuobiruanjian-",
          desc: "好用的翻墙软件",
        },
        {
          label: "Gogs",
          url: "https://gogs.io/",
          icon: "icon-git",
          desc: "Git服务器搭建",
        },
        {
          label: "美叶",
          url: "https://www.meiye.art/web/1/1",
          icon: "icon--_sucaiku",
          desc: "前端页面素材，插画素材",
        },
        {
          label: "pddon",
          url: "https://www.pddon.com/",
          icon: "icon-huatu",
          desc: "免费多功能专业在线画图(Low Code)工具",
        },
        {
          label: "测网速",
          url: "https://www.speedtest.cn/",
          icon: "icon-zuobiruanjian-",
          desc: "免费在线测网速",
        },
      ],
    },
    {
      title: "常用代码工具",
      icon: "icon-mogui",
      list: [
        {
          label: "iconfont",
          url: "https://www.iconfont.cn/",
          icon: "icon-tubiaozhizuomoban-",
          desc: "阿里巴巴图标矢量库",
        },
        {
          label: "Apifox",
          url: "https://app.apifox.com/main",
          icon: "icon-APIguanli",
          desc: "支持接口调用，自动化测试",
        },
        {
          label: "VirAPI",
          url: "https://console.virapi.com/",
          icon: "icon-APIjieru",
          desc: "虚拟数据云接口在线使用",
        },
        {
          label: "crudapi",
          url: "https://help.crudapi.cn/helloworld.html",
          icon: "icon-pcdnPCDN",
          desc: "通过配置实现CRUD RESTful API",
        },
        {
          label: "Easy Mock",
          url: "https://mock.mengxuegu.com/",
          icon: "icon-virus-covid",
          desc: "mock接口测试使用",
        },
        {
          label: "jsonplaceholder",
          url: "http://jsonplaceholder.typicode.com/",
          icon: "icon-rongheCDN",
          desc: "Free fake API for testing and prototyping.",
        },
        {
          label: "API大全",
          url: "https://www.showapi.com/apiShow/apiMap",
          icon: "icon-json",
          desc: "万维易源-连接一切数据",
        },
        {
          label: "BootCDN",
          url: "https://www.bootcdn.cn/",
          icon: "icon-rongheCDN",
          desc: "稳定、快速、免费的前端开源项目 CDN 加速服务",
        },
        {
          label: "cdnjs",
          url: "https://cdnjs.com/",
          icon: "icon-API",
          desc: "稳定、快速、免费的前端开源项目 CDN 加速服务",
        },
        {
          label: "jquery插件库",
          url: "https://www.jq22.com/daima",
          icon: "icon-jQuery",
          desc: "好用的jquery插件库工具",
        },
        {
          label: "正则校验",
          url: "https://regexr.com/",
          icon: "",
          desc: "正则在线校验",
        },
        {
          label: "正则可视化",
          url: "https://jex.im/regulex/#!flags=&re=%5E(a%7Cb)*%3F%24",
          icon: "icon-regularExpression-o",
          desc: "好用的正则可视化工具",
        },
        {
          label: "Linux命令",
          url: "https://man.niaoge.com/",
          icon: "icon-ziyuan1",
          desc: "常用的linux命令",
        },
        {
          label: "进制转换",
          url: "https://tool.lu/hexconvert/",
          icon: "icon-zhuanhuan",
          desc: "进制转换工具",
        },
        {
          label: "加密解密",
          url: "https://tool.lu/encdec/",
          icon: "icon-agora_AIzhinengjiangzao-zaoyinxiaochu",
          desc: "加密解密工具",
        },
        {
          label: "nginx配置",
          url: "https://www.codejie.net/nginxconfig/?global.app.lang=zhCN",
          icon: "icon-gongju",
          desc: "配置高性能、安全、稳定的NGINX服务器的最简单方法。",
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
