/*
 * @Author: along
 * @Description: 页面路由挂载
 * @Date: 2023-05-30 21:31:24
 * @LastEditors: along
 * @LastEditTime: 2023-07-28 18:04:28
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
];

export default routes;
