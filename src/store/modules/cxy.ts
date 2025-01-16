/*
 * @Author: along
 * @Description: cxy
 * @Date: 2023-06-16 16:02:41
 * @LastEditors: along
 * @LastEditTime: 2025-01-15 09:18:47
 * @FilePath: /cxy-web-tool/src/store/modules/cxy.ts
 */
import { defineStore } from "pinia";
export const appCxyStore = defineStore({
  id: "app-cxy",
  state: () => ({
    collapse: false,
  }),
  actions: {
    setCollapse(value: boolean) {
      this.collapse = value;
    },
  },
  persist: true,
});
