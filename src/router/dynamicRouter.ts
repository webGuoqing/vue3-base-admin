import router from "./index";
import { ElNotification } from "element-plus";
import { useAuthStore } from "@/store/modules/auth";
// import { useRouter } from "vue-router";
// const router = useRouter();

/**
 * @description 初始化动态路由
 */
export const initDynamicRouter = async () => {
  const authStore = useAuthStore();
  try {
    // 1.获取菜单列表 && 按钮权限列表
    await authStore.getAuthMenuList(router.options.routes);
    // 2.判断当前用户有没有菜单权限
    if (!authStore.authMenuListGet.length) {
      ElNotification({
        title: "无权限访问",
        message: "当前账号无任何菜单权限，请联系系统管理员！",
        type: "warning",
        duration: 3000
      });
      return Promise.reject("No permission");
    }
  } catch (error) {
    return Promise.reject(error);
  }
};
