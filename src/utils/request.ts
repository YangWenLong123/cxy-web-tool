/*
 * @Author: along
 * @Description: axios配置
 * @Date: 2023-06-10 21:26:46
 * @LastEditors: along
 * @LastEditTime: 2025-02-17 09:20:02
 * @FilePath: /cxy-web-tool/src/utils/request.ts
 */
import { message } from "ant-design-vue";
import axios from "axios";
// import { setupCache } from "axios-cache-interceptor";

console.log(import.meta.env);

const request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 500000,
});

// const request = setupCache(instance, {
//   ttl: 60 * 60 * 1000, // 缓存时间为 1 小时（单位：毫秒）
//   methods: ["get"], // 只缓存 GET 请求
// });

// 添加请求拦截器
request.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    const access_token = localStorage.getItem("access_token");
    if (access_token)
      config.headers["Authorization"] = "Bearer " + access_token;

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

    console.log("response", response);

    if (response?.data.code === 1) return response?.data?.data;
    if (response?.data.code === -1) {
      message.error(response?.data?.message);
      return Promise.reject(response?.data?.message);
    }
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么

    return Promise.reject(error);
  }
);

export default request;
