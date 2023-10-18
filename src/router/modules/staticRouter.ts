import { RouteRecordRaw } from "vue-router";
import { HOME_URL } from "@/config";
import Layout from "@/layout/index.vue";
/**
 * staticRouter (静态路由)
 */
export const staticRouter: RouteRecordRaw[] = [
    {
        path: '/',
        component: Layout,
        name:"Index",
        redirect: '/home',
        meta: {
          title: "全局首页",
          icon:"icon-gongzuotai",
          isHidden:true,
          isChildren:true,
          activeMenu:"Index"
        },
        children: [
            {
                path: '/home',
                name: "Home",
                component: ()=> import("@/views/home.vue"),
                meta: {
                  title: "首页",
                  icon:"",
                  isHidden:true,
                  activeMenu:"Index"
                },
            },
        ]
    }
];

/**
 * errorRouter (错误页面路由)
 */
export const errorRouter = [
      {
        path: "/403",
        name: "403",
        component: () => import("@/views/error/403.vue"),
        meta: {
          title: "403页面",
          icon:"",
          isHidden:false,
        }
      },
      {
        path: "/404",
        name: "404",
        component: () => import("@/views/error/404.vue"),
        meta: {
          title: "404页面",
          icon:"",
          isHidden:false,
        }
      },
      {
        path: "/401",
        name: "401",
        component: () => import("@/views/error/401.vue"),
        meta: {
          title: "401页面",
          icon:"",
          isHidden:false,
        }
      },
      {
        path: "/:pathMatch(.*)*",
        component: () => import("@/views/error/404.vue")
      }
];
