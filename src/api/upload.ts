/*
 * @Author: along
 * @Description: 接口配置
 * @Date: 2023-06-10 21:35:21
 * @LastEditors: along
 * @LastEditTime: 2023-07-31 14:49:22
 * @FilePath: /cxy-web-tool/src/api/upload.ts
 */
import request from "@/utils/request";
// export interface IUserInfo {
//   username: string;
//   password: string;
// }
export interface IResponseData {
  message: string;
  data: Array;
  code: number;
}
export const getImagesList = () => {
  return request.get<IResponseData>("upload/get", {});
};

export const uploadImageFile = (data) => {
  return request.post<IResponseData>("upload/single", data);
};
