/*
 * @Author: along
 * @Description: 页面路由挂载
 * @Date: 2023-05-30 21:31:24
 * @LastEditors: along
 * @LastEditTime: 2024-11-13 09:07:29
 * @FilePath: /cxy-web-tool/src/router/modules/user.modules.ts
 */
import type { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/book",
    name: "Book",
    component: () => import("@/views/book/index.vue"),
  },
  {
    path: "/lazy",
    name: "Lazy",
    component: () => import("@/views/lazy/index.vue"),
  },
  {
    path: "/upload",
    name: "Upload",
    component: () => import("@/views/upload/index.vue"),
  },
  {
    path: "/swagger",
    name: "Swagger",
    redirect: "/swagger-api",
    component: () => import("@/views/swagger/index.vue"),
    meta: {},
    children: [
      {
        path: "/swagger-api",
        name: "Swaggerindex",
        component: () => import("@/views/swagger/api/index.vue"),
      },
      {
        path: "/swagger-aigc",
        name: "SwaggerAigc",
        component: () => import("@/views/swagger/aigc/index.vue"),
      },
    ],
  },
  {
    path: "/shot",
    name: "Screenshot",
    component: () => import("@/views/screenshot/index.vue"),
  },
  {
    path: "/syntax",
    name: "Syntax",
    component: () => import("@/views/syntax/index.vue"),
  },
  {
    path: "/writingText",
    name: "WritingText",
    component: () => import("@/views/writingText/index.vue"),
  },
  {
    path: "/linux",
    name: "Linuxtool",
    component: () => import("@/views/linux/index.vue"),
  },
  {
    path: "/404",
    component: () => import("@/views/404/index.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404",
    // component: () => import("@/views/404/index.vue"),
  },
];

export default routes;
