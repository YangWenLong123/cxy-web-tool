/*
 * @Author: along
 * @Description: cxy
 * @Date: 2023-06-16 16:02:41
 * @LastEditors: along
 * @LastEditTime: 2025-01-23 11:01:41
 * @FilePath: /cxy-web-tool/src/store/modules/cxy.ts
 */
import { defineStore } from "pinia";
export const appCxyStore = defineStore({
  id: "app-cxy",
  state: () => ({
    collapse: false,
    readingMode: false,
    postId: "",
    noticeCount: 4,
  }),
  actions: {
    setCollapse(value: boolean) {
      this.collapse = value;
    },

    setReadingMode(value: boolean, id: string) {
      this.readingMode = value;
      this.postId = id;
    },

    clearCount() {
      this.noticeCount = 0;
    },
  },
  persist: true,
});
