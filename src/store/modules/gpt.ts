/*
 * @Author: along
 * @Description: cxy
 * @Date: 2023-06-16 16:02:41
 * @LastEditors: along
 * @LastEditTime: 2023-07-26 10:44:19
 * @FilePath: /cxy-web-tool/src/store/modules/gpt.ts
 */
import { defineStore } from "pinia";
export const appGptStore = defineStore({
  id: "app-gpt",
  state: () => ({
    keyword: "",
  }),
  actions: {
    setKeyword(value: any) {
      this.keyword = value;
    },
  },
  persist: true,
});
