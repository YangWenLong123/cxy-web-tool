/*
 * @Author: along
 * @Description: 接口配置
 * @Date: 2023-06-10 21:35:21
 * @LastEditors: along
 * @LastEditTime: 2025-01-07 15:03:27
 * @FilePath: /cxy-web-tool/src/api/login.ts
 */
import request from "@/utils/request";

export const signup = (data) => {
  return request.post<any>("/auth/signup", data);
};

export const login = (data) => {
  return request.post<any>("/auth/login", data);
};
