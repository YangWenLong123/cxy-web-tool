/*
 * @Author: along
 * @Description: cxy
 * @Date: 2023-06-16 16:02:41
 * @LastEditors: along
 * @LastEditTime: 2025-02-28 14:00:42
 * @FilePath: /cxy-web-tool/src/store/modules/cxy.ts
 */
import { defineStore } from "pinia";
export const appCxyStore = defineStore({
  id: "app-cxy",
  state: () => ({
    collapse: false,
    readingMode: false,
    postId: "",
    noticeCount3: 1,
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
      this.noticeCount3 = 0;
    },
  },
  persist: true,
});
