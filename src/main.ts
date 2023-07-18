import { createApp } from 'vue'
import './permission';
import '@/style/index.scss'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from '@/router'
import pinia from '@/store/index'

const app = createApp(App)

app.use(pinia)
app.use(ElementPlus)
app.use(router)
app.mount('#app')
