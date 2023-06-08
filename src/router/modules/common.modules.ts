/*
 * @Author: along
 * @Description:
 * @Date: 2023-05-30 21:31:24
 * @LastEditors: along
 * @LastEditTime: 2023-05-30 21:35:09
 * @FilePath: /cxy-web-tool/src/router/modules/common.modules.ts
 */
import type { RouteRecordRaw } from 'vue-router';
import Index from '@/views/index.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Index',
    component: Index
  }
];

export default routes;
