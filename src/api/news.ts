/*
 * @Author: along
 * @Description: 接口配置
 * @Date: 2023-06-10 21:35:21
 * @LastEditors: along
 * @LastEditTime: 2025-02-11 15:29:32
 * @FilePath: /cxy-web-tool/src/api/news.ts
 */
import request from "@/utils/request";

export const weibo = (data) => {
  return request.get<any>("/weibo/hot-search", data);
};
