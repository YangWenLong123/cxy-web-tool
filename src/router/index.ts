/*
 * @Author: along
 * @Description:
 * @Date: 2023-05-30 21:31:24
 * @LastEditors: along
 * @LastEditTime: 2023-06-10 20:34:49
 * @FilePath: /cxy-web-tool/src/router/index.ts
 */
import { createRouter, createWebHistory } from 'vue-router'
import routes from './modules'

const router = createRouter({
  history: createWebHistory(),
  // mode: 'history',
  routes,
})

export default router
