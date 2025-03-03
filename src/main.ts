/*
 * @Author: along
 * @Description: 项目资源加载入口
 * @Date: 2023-05-30 21:31:24
 * @LastEditors: along
 * @LastEditTime: 2025-02-28 13:39:05
 * @FilePath: /cxy-web-tool/src/main.ts
 */
import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router";
import { createPinia } from "pinia";
import "ant-design-vue/dist/antd.css";
import antDesignVue from "ant-design-vue";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import "./premission";
import "@/utils/analytics.ts";

(async () => {
  const app = createApp(App);
  const pinia = createPinia();

  pinia.use(piniaPluginPersistedstate);
  app.use(pinia);
  app.use(antDesignVue);
  app.use(router);
  app.mount("#app");
})();
