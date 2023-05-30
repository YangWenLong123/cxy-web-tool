/*
 * @Author: along
 * @Description:
 * @Date: 2023-05-30 21:31:24
 * @LastEditors: along
 * @LastEditTime: 2023-05-30 21:52:10
 * @FilePath: /cxy-web-tool/src/router/index.ts
 */
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import routes from './modules'

const router = createRouter({
  history: createWebHistory(),
  // mode: 'history',
  routes
})

export default router
