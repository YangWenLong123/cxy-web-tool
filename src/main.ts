/*
 * @Author: along
 * @Description: 项目资源加载入口
 * @Date: 2023-05-30 21:31:24
 * @LastEditors: along
 * @LastEditTime: 2023-06-08 21:32:54
 * @FilePath: /cxy-web-tool/src/main.ts
 */
import { createApp } from 'vue';
import '@/assets/styles/global.css';
import App from './App.vue';
import router from '@/router';
import { createPinia } from 'pinia';
import 'ant-design-vue/dist/antd.css';
import antDesignVue from 'ant-design-vue';

(async () => {
  const app = createApp(App);
  app.use(antDesignVue);
  app.use(router);
  app.use(createPinia());
  app.mount('#app');
})();
