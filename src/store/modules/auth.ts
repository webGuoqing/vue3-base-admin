import { defineStore } from "pinia";
import { getAllBreadcrumbList } from "@/utils";


export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    // 按钮权限列表
    authButtonList: {},
    // 菜单权限列表
    authMenuList: [],
    // 当前页面的 router name，用来做按钮权限筛选
    routeName: ""
  }),
  getters: {
    // 菜单权限列表 ==> 这里的菜单没有经过任何处理
    authMenuListGet: state => state.authMenuList,
    // 递归处理后的所有面包屑导航列表
    breadcrumbListGet: state => getAllBreadcrumbList(state.authMenuList)
  },
  actions: {
    async getAuthMenuList(routes) {
      this.authMenuList = routes
    },
  }
});
