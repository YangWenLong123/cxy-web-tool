import request from '@/utils/request'
export interface IUserInfo {
  username: string,
  password: string
}
export interface IResponseData {
  msg: string
}
export const getUserInfo = (params: IUserInfo) => {
  return request.get<IResponseData>('/user', { params })
}
