/*
 * @Author: along
 * @Description: 程序员盒子路由配置
 * @Date: 2023-05-30 21:31:24
 * @LastEditors: along
 * @LastEditTime: 2024-11-13 14:12:32
 * @FilePath: /cxy-web-tool/src/router/index.ts
 */
import { createRouter, createWebHistory } from "vue-router";
import routes from "./modules";

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
