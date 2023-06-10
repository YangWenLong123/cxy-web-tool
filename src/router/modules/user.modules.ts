/*
 * @Author: along
 * @Description:
 * @Date: 2023-05-30 21:31:24
 * @LastEditors: along
 * @LastEditTime: 2023-05-30 21:42:56
 * @FilePath: /cxy-web-tool/src/router/modules/user.modules.ts
 */
import type { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/book",
    name: "Book",
    component: () => import("@/views/book/index.vue"),
  },
];

export default routes;
