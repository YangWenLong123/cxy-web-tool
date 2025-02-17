/*
 * @Author: along
 * @Description: 接口配置
 * @Date: 2023-06-10 21:35:21
 * @LastEditors: along
 * @LastEditTime: 2025-02-17 14:38:23
 * @FilePath: /cxy-web-tool/src/api/news.ts
 */
import request from "@/utils/request";

export const weibo = (data) => {
  return request.get<any>("/hot/weibo", data);
};

export const juejin = () => {
  return request.get<any>("/hot/juejin");
};

export const toutiao = (data) => {
  return request.get<any>("/hot/toutiao", data);
};

export const baidu = (data) => {
  return request.get<any>("/hot/baidu", data);
};

export const zhihu = (data) => {
  return request.get<any>("/hot/zhihu", data);
};

export const sifou = (data) => {
  return request.get<any>("/hot/sifou", data);
};

export const bokeyuan = (data) => {
  return request.get<any>("/hot/bokeyuan", data);
};

export const gitee = (data) => {
  return request.get<any>("/hot/gitee", data);
};
