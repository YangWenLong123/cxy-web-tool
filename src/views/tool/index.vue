<!--
 * @Author: along
 * @Description: 程序员盒子常用工具
 * @Date: 2023-05-30 21:31:24
 * @LastEditors: along
 * @LastEditTime: 2023-06-15 21:57:34
 * @FilePath: /cxy-web-tool/src/views/tool/index.vue
-->
<template>
  <div class="CxyTool">
    <div
      v-for="(record, index) in state.tool"
      :key="index"
      class="toolBox"
    >
      <div class="tool_header">
        <i
          class="iconfont tool_title_icon"
          :class="record.icon"
        ></i>
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
              <i
                class="iconfont"
                :class="option.icon"
                :style="{color: randomColor()}"
              ></i>
              <div class="label">{{ option.label }}</div>
            </div>
            <div class="desc">{{  option.desc  }}</div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script lang='ts' setup>
  import { onMounted, reactive } from "vue";

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
        ],
      },
      {
        title: "常用资源",
        icon: "icon-ziyuan2",
        list: [
          {
            label: "盒子网盘",
            url: "https://c.aalib.net/tool/so/",
            icon: "icon-sousuo2",
            desc: "盒子网盘内容搜索",
          },
        ],
      },
      {
        title: "常用代码工具",
        icon: "icon-daima",
        list: [
          {
            label: "iconfont",
            url: "https://www.iconfont.cn/",
            icon: "icon-tubiaozhizuomoban-",
            desc: "阿里巴巴图标矢量库",
          },
        ],
      },
    ] as any,
  });

  onMounted(() => {});

  const randomColor = () => {
    return "#" + (((1 << 24) * Math.random()) | 0).toString(16).padStart(6, "0");
  };

  const goPage = (url: string) => {
    window.open(url);
  };
</script>

<style lang="scss">
  .CxyTool {
    .tool_header {
      display: flex;
      align-items: center;
      .tool_title_icon {
        color: chocolate;
        font-size: 20px;
      }
      .tool_title {
        margin-left: 12px;
      }
    }
    .tool_wrap {
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 32px;
      .toolItems {
        width: 200px;
        height: 64px;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        padding: 10px;
        background: rgba(244, 242, 242, 1);
        border-radius: 4px;
        margin: 5px 10px;
        cursor: pointer;
        border: 1px rgba(244, 242, 242, 1) solid;
        &:hover {
          border: 1px chocolate solid;
          opacity: 0.8;
        }
        .header {
          display: flex;
          align-items: center;
          .label {
            color: rgba(67, 67, 67, 1);
            margin-left: 10px;
            font-size: 16px;
          }
        }
        .desc {
          color: rgba(160, 160, 160, 1);
          font-size: 12px;
          width: 180px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
  }
</style>
