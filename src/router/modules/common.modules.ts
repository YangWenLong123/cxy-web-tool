/*
 * @Author: along
 * @Description: 路由配置
 * @Date: 2023-05-30 21:31:24
 * @LastEditors: along
 * @LastEditTime: 2024-11-13 14:25:07
 * @FilePath: /cxy-web-tool/src/router/modules/common.modules.ts
 */
import type { RouteRecordRaw } from "vue-router";
import Index from "@/views/index.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Index",
    component: Index,
    redirect: "/home",
    children: [
      {
        path: "/home",
        name: "CxyKeyword",
        component: () => import("@/views/keyword/index.vue"),
      },
      {
        path: "/tool",
        name: "CxyTool",
        component: () => import("@/views/tool/index.vue"),
      },
      {
        path: "/gpt",
        name: "GPT",
        component: () => import("@/views/gpt/index.vue"),
      },
      {
        path: "/community",
        name: "CxyCommunity",
        component: () => import("@/views/community/index.vue"),
      },
      {
        path: "/ai",
        name: "CxyTeam",
        component: () => import("@/views/ai/index.vue"),
      },
      {
        path: "/platform",
        name: "CxyPlatform",
        component: () => import("@/views/platform/index.vue"),
      },
      {
        path: "/resources",
        name: "CxyResources",
        component: () => import("@/views/resources/index.vue"),
      },
      {
        path: "/chrome",
        name: "CxyChrome",
        component: () => import("@/views/chrome/index.vue"),
      },
      {
        path: "/vue",
        name: "CxyVue",
        component: () => import("@/views/vue/index.vue"),
      },
      {
        path: "/react",
        name: "CxyReact",
        component: () => import("@/views/react/index.vue"),
      },
      {
        path: "/case",
        name: "CxyCase",
        component: () => import("@/views/case/index.vue"),
      },
      {
        path: "/contextMenu",
        name: "ContextMenu",
        component: () => import("@/views/components/context-menu/index.vue"),
      },
      {
        path: "/gjk",
        name: "gjk",
        component: () => import("@/views/gjk/index.vue"),
      },
      {
        path: "/ms",
        name: "ms",
        component: () => import("@/views/ms/index.vue"),
      },
      {
        path: "/tc",
        name: "tc",
        component: () => import("@/views/tc/index.vue"),
      },
      {
        path: "/zz",
        name: "zz",
        component: () => import("@/views/zz/index.vue"),
      },
    ],
  },
];

export default routes;
