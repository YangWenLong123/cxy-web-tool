/*
 * @Author: along
 * @Description: 接口配置
 * @Date: 2023-06-10 21:35:21
 * @LastEditors: along
 * @LastEditTime: 2025-02-28 17:07:27
 * @FilePath: /cxy-web-tool/src/api/common.ts
 */
import request from "@/utils/request";

export const visit = (data) => {
  return request.post<any>("/analytics/visit", data);
};

export const statistics = (data) => {
  // return request.get<any>("/analytics/statistics/" + data.date);
  return request.get<any>("/analytics/statistics");
};
