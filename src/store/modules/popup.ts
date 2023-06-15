/*
 * @Author: along
 * @Description: 弹窗
 * @Date: 2023-06-15 13:24:34
 * @LastEditors: along
 * @LastEditTime: 2023-06-15 14:50:06
 * @FilePath: /cxy-web-tool/src/store/modules/popup.ts
 */
import { defineStore } from "pinia";

export const usePopupStore = defineStore("popup", {
  state: () => ({
    showPopup: false,
    popup_type: "",
    popup_mode: [], //客服微信:WeChat
  }),
  actions: {
    setPopup({ showPopup, popup_type, popup_mode }) {
      this.showPopup = showPopup; // 是否显示弹窗
      this.popup_type = popup_type; // 设置弹窗状态 1:手动 2:自动
      this.popup_mode = popup_mode; // 设置显示弹窗
    },
  },
  persist: true,
});
