
import request from "@/utils/request"
import { getToken } from '@/utils/auth';
// 获取RefreshToken
let promoseRT: any = ""
let isRefreshing = false
export function generalRefreshToken() {
  if (isRefreshing) {
    return promoseRT
  }
  isRefreshing = true
  promoseRT = request({
    url: 'xxxxx',
    method: 'post',
    data: { refresh_token: getToken("refreshToken") }
  }).finally(() => {
    isRefreshing = false
  })
  return promoseRT
}