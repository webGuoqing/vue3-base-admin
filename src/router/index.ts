// vue-router中提供3种的路由模式
import { createWebHashHistory, createRouter } from 'vue-router'
import { staticRouter, errorRouter } from "./modules/staticRouter";
import { mapRouter } from "./modules/mapRouter";
import Layout from "@/layout/index.vue";
/**
 * @description 📚 路由参数配置简介
 * @param path ==> 路由菜单访问路径
 * @param name ==> 路由 name (对应页面组件 name, 可用作 KeepAlive 缓存标识 && 按钮权限筛选)
 * @param redirect ==> 路由重定向地址
 * @param component ==> 视图文件路径
 * @param meta ==> 路由菜单元信息
 * @param meta.icon ==> 菜单和面包屑对应的图标
 * @param meta.title ==> 路由标题 (用作 document.title || 菜单的名称)
 * @param meta.activeMenu ==> 当前路由为详情页时，需要高亮的菜单 [该属性暂未实现]
 * @param meta.isLink ==> 路由外链时填写的访问地址 [该属性暂未实现]
 * @param meta.isHidden ==> 是否在菜单中隐藏 (默认为false不显示  true显示菜单)
 * @param meta.isChildren ==> 是否显示所有子级菜单(默认为false显示所有子级 true不显示所有子级)
 * @param meta.isFull ==> 菜单是否全屏 (示例：数据大屏页面) [该属性暂未实现]
 * @param meta.isAffix ==> 菜单是否固定在标签页中 (首页通常是固定项) [该属性暂未实现]
 * @param meta.isKeepAlive ==> 当前路由是否缓存 [该属性暂未实现]
 * */
const router = createRouter({
  history: createWebHashHistory(),
  routes: [...staticRouter, ...errorRouter , ...mapRouter],
  strict: false,
  scrollBehavior: () => ({ left: 0, top: 0 })
})

export default router