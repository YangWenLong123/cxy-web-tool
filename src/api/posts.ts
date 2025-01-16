/*
 * @Author: along
 * @Description: 接口配置
 * @Date: 2023-06-10 21:35:21
 * @LastEditors: along
 * @LastEditTime: 2025-01-16 14:40:30
 * @FilePath: /cxy-web-tool/src/api/posts.ts
 */
import request from "@/utils/request";

export const createPosts = (data) => {
  return request.post<any>("/post/create", data);
};

export const getPosts = (params) => {
  return request.get<any>("/post/findAll", params);
};

export const getByPosts = (params) => {
  return request.get<any>("/post/findById" + "?id=" + params.id);
};
