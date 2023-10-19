import axios from 'axios'
import { generalRefreshToken } from "@/api/index";
import {getToken , setToken} from './auth'
import router from '@/router';
import {ElMessageBox } from 'element-plus'

// *创建axios实例对象
const instance = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_API,
    // timeout: 6000
})
// *创建请求拦截
instance.interceptors.request.use(
    // 请求成功时候配置
    config => {
        config.headers['Authorization'] = 'Bearer ' + getToken();
        return config
    },
    // 请求失败时候配置
    error => {
        return  Promise.reject(error)
    }
)
// *创建响应拦截
instance.interceptors.response.use(
    (response) => {
        // Dialog.close()
        return response.data
    },
    // 请求结果失败
    async (error) => {
        if (error.response.status === 401) {
            const { data }:any = await generalRefreshToken()
            if (data && data.token) {
                error.config.headers.Authorization = 'Bearer ' + data.token
                setToken(data.token)
                return instance(error.config);
            } else {
                ElMessageBox.close()
                return
            }
        }
        return Promise.resolve(error)
    },
)


export default instance;