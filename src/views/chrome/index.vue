<!--
 * @Author: along
 * @Description: 程序员盒子布局
 * @Date: 2023-05-30 21:31:24
 * @LastEditors: along
 * @LastEditTime: 2023-10-17 16:50:03
 * @FilePath: /cxy-web-tool/src/views/chrome/index.vue
-->
<template>
  <div class="CxyChrome">
    <div
      v-for="(record, index) in state.list"
      :key="index"
      class="chrome_box"
      @click="onDown(record)"
    >
      <div class="nav">
        <img :src="record.logo" class="img" />
        <div class="text">
          <div class="title">{{ record.title }}</div>
          <div class="desc">{{ record.desc }}</div>
        </div>
      </div>

      <div class="footer">
        <div class="label">
          <div
            class="label_text"
            v-for="(row, key) in record.label"
            :key="key"
            :style="{
              background: [
                'rgb(232, 69, 69)',
                'rgb(30, 86, 160)',
                'rgb(255, 201, 60)',
              ][key],
            }"
          >
            {{ row }}
          </div>
        </div>

        <div class="button">下载</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, reactive } from "vue";

const state = reactive({
  list: [
    {
      logo: "https://lh3.googleusercontent.com/fwqsYGLwx0B26-p0nrxWCsSAJf07lKpNFAS4vfhrdzm2ASBE5k0ohfMlFEUQ7OKDWQfltGgRKXr4DqrdTLpD2AhMYA=w128-h128-e365-rj-sc0x00ffffff",
      title: "写作猫浏览器插件",
      desc: "秘塔写作猫是一款由AI赋能的写作工具，帮您推敲用法、斟酌文法、改写文风，还可以续写文章。",
      label: ["热门", "办公"],
      url: "https://chrome.google.com/webstore/detail/%E5%86%99%E4%BD%9C%E7%8C%AB%E6%B5%8F%E8%A7%88%E5%99%A8%E6%8F%92%E4%BB%B6/giijkmholjmdmpojlmmoieghkilnhkhb",
    },
    {
      logo: "https://lh3.googleusercontent.com/SuFita7azx_s5E33nJZxzP6Ox_3mrRFUK7UKiwjFkzaCYCn7slAVCzyM6cXMJEcwEX3WEl5ItNl1wA3FKS8XYBeo3A=w128-h128-e365-rj-sc0x00ffffff",
      title: "WeTab-AI新标签页",
      desc: "用小组件自定义你的新标签页,支持暗黑模式，已整合 ChatGPT 组件整合了 ChatGPT 组件，无需魔法，在中国快捷使用 ChatGPT。",
      label: ["热门", "工具"],
      url: "https://chrome.google.com/webstore/detail/wetab-ai%E6%96%B0%E6%A0%87%E7%AD%BE%E9%A1%B5/aikflfpejipbpjdlfabpgclhblkpaafo",
    },
    {
      logo: "https://lh3.googleusercontent.com/Lu_6rc-5upC8g1v-SIBrYwQ8a-1blC81ZLSQss66IpTZ2_sinL7fP2ielWj3znVoIEtobNo-jlI39IV-7qnEvJWZb9A=w128-h128-e365-rj-sc0x00ffffff",
      title: "Vue.js devtools",
      desc: "用于调试Vue.js应用程序的Chrome和Firefox DevTools扩展。Chrome devtools扩展用于调试Vue.js应用程序。",
      label: ["开发工具", "vue"],
      url: "https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd",
    },
    {
      logo: "https://lh3.googleusercontent.com/ccFVGartRYZFPgHAoVO9iLeYuG_hEB-_aL236MEFb1WyYZeW3vWl3xZLY3DOn6Fe07-3Q7tF23NE-2DXc8ygMbKGrFI=w128-h128-e365-rj-sc0x00ffffff",
      title: "Apifox Browser Extension",
      desc: "Apifox 是 API 文档、API 调试、API Mock、API 自动化测试一体化协作平台，定位 Postman + Swagger + Mock + JMeter。",
      label: ["开发工具", "web"],
      url: "https://chrome.google.com/webstore/detail/apifox-browser-extension/eggdlmopfankeonchoflhfoglaakobma",
    },
    {
      logo: "https://lh3.googleusercontent.com/6yzfaOya3iQTv5NMnEx98luxTT-1WdOUbTQXIg5w96FOXlH_LDswkrjzIYZRqG1JCpcJ9jd8rPZD33xM--7GMGzUAQ=w128-h128-e365-rj-sc0x00ffffff",
      title: "FeHelper(前端助手)",
      desc: "JSON自动格式化、手动格式化，支持排序、解码、下载等，更多功能可在配置页按需安装！",
      label: ["开发工具", "web"],
      url: "https://chrome.google.com/webstore/detail/fehelper%E5%89%8D%E7%AB%AF%E5%8A%A9%E6%89%8B/pkgccpejnmalmdinmhkkfafefagiiiad",
    },
    {
      logo: "https://lh3.googleusercontent.com/T5rLC6Jt9AOLautPFZsd4M20_tiAQ-_EYNyn1UrM1GwUd3Zr150aP1jzLSq4QljCv2otZJB2h5o3YXvmWLlvVMdbZw=w128-h128-e365-rj-sc0x00ffffff",
      title: "iGoo Helper",
      desc: "Unblock any website and stay secure with Free VPN. One-click connect to our fast VPN. Unlimited bandwidth and completely FREE!",
      label: ["开发工具", "web"],
      url: "https://chrome.google.com/webstore/detail/igoo-helper-security-priv/bkcbdcoknmfkccdhdendnbkjmhdmmnfc",
    },
    {
      logo: "https://lh3.googleusercontent.com/MPE3_HeeIE8t_fWtyoZvtvUXwJLn1BxQZRVIQR9FRpVC7iKS3C5p6td7CAVyIAlEP_tljLwJ-pWMIxuJiHKnxT-YDA=w128-h128-e365-rj-sc0x00ffffff",
      title: "Talend API Tester - Free Edition",
      desc: "Visually interact with REST, SOAP and HTTP APIs.",
      label: ["开发工具", "web"],
      url: "https://chrome.google.com/webstore/detail/talend-api-tester-free-ed/aejoelaoggembcahagimdiliamlcdmfm",
    },
    {
      logo: "https://lh3.googleusercontent.com/02Fiw_1YBa7ql6H3XBjGZs3LPCPXZIeeTLT6GSEXHmQrp98TWNyGsniPCGV-r9lNgGRGl2qIh8YYq722iJpD3v32bw=w128-h128-e365-rj-sc0x00ffffff",
      title: "集装箱",
      desc: "一个插件，提供一揽子服务。定位类似于Tampermonkey的脚本管理器，用户可以根据自己需要安装和更新应用。",
      label: ["开发工具", "web"],
      url: "https://chrome.google.com/webstore/detail/%E9%9B%86%E8%A3%85%E7%AE%B1/kbgigmcnifmaklccibmlepmahpfdhjch",
    },
    {
      logo: "https://lh3.googleusercontent.com/TNijZW_Gp9MZ3eqXkve0YWDEiHV-a2IpSpD6IJzrV3Y76GJcLEyzX2regTLemXzBHbHVqkKuxnnWDT34Cp4sNh-Y=w128-h128-e365-rj-sc0x00ffffff",
      title: "React Developer Tools",
      desc: "Adds React debugging tools to the Chrome Developer Tools.",
      label: ["开发工具", "web"],
      url: "https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi",
    },
  ],
});

const onDown = ({ url }) => {
  window.open(url);
};

onMounted(() => {});
</script>

<style lang="scss">
@import url("./index.scss");
</style>
