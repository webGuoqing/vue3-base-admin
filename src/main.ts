import { createApp } from 'vue'
// 设置项目权限
import './permission';
// 设置全局样式
import '@/style/index.scss'
import App from './App.vue'
// 设置element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// 设置路由
import router from '@/router'
// 设置pinia
import pinia from '@/store/index'
// 设置自定义指令
import directive from "@/directive/index";

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(directive)
app.use(pinia)
app.use(ElementPlus, {
    locale: zhCn,
})
app.use(router)
app.mount('#app')
