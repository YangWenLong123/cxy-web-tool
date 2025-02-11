/*
 * @Author: along
 * @Description:
 * @Date: 2025-01-09 09:28:36
 * @LastEditors: along
 * @LastEditTime: 2025-02-11 14:32:08
 * @FilePath: /cxy-web-tool/src/views/gjk/tools.ts
 */
import { Tool, Category } from "@/components/tool/tyles/tool";
import { devData } from "./data/dev";
import { convertData } from "./data/convert";
import { toolData } from "./data/tool";
import { vueData } from "./data/vue";
import { reactData } from "./data/react";
import { openData } from "./data/open";
import { chromeData } from "./data/chrome";
import { kaiData } from "./data/kai";

export const categories: Category[] = [
  { id: "dev", name: "IDE", description: "常用开发工具和IDE" },
  { id: "tool", name: "在线工具箱", description: "常用开发工具和IDE" },
  // { id: "study", name: "学习资源", description: "常用开发工具和IDE" },
  // { id: "ms", name: "面试", description: "常用开发工具和IDE" },
  { id: "vue", name: "vue社区", description: "常用开发工具和IDE" },
  { id: "react", name: "react社区", description: "常用开发工具和IDE" },
  // { id: "pc", name: "常用网站", description: "常用开发工具和IDE" },
  { id: "open", name: "开放平台", description: "常用开发工具和IDE" },
  // { id: "ai", name: "AI工具", description: "常用开发工具和IDE" },
  { id: "chrome", name: "浏览器插件", description: "常用开发工具和IDE" },
  { id: "kaifa", name: "开发利器", description: "常用开发工具和IDE" },
];

export const tools: Tool[] = [
  ...devData,
  ...toolData,
  ...convertData,
  ...vueData,
  ...reactData,
  ...openData,
  ...chromeData,
  ...kaiData,
];
