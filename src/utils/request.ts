/*
 * @Author: along
 * @Description: axios配置
 * @Date: 2023-06-10 21:26:46
 * @LastEditors: along
 * @LastEditTime: 2023-07-28 22:39:11
 * @FilePath: /cxy-web-tool/src/utils/request.ts
 */
import axios from "axios";

console.log(import.meta.env);
const request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
});

// 添加请求拦截器
request.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
request.interceptors.response.use(
  function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response;
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

export default request;
