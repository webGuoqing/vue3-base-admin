import { RouteRecordRaw } from "vue-router";
import { HOME_URL } from "@/config";
import Layout from "@/layout/index.vue";
/**
 * staticRouter (静态路由)
 */
export const staticRouter: RouteRecordRaw[] = [
    {
        path: "/",
        redirect: HOME_URL
    },
    {
        path: '/home',
        name: "Home",
        component: Layout,
        redirect: HOME_URL,
        children: [
            {
                path: 'index',
                name: "Index",
                component: ()=> import("@/views/home.vue"),
                meta: { title: "首页", icon: '' },
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
          title: "403页面"
        }
      },
      {
        path: "/404",
        name: "404",
        component: () => import("@/views/error/404.vue"),
        meta: {
          title: "404页面"
        }
      },
      {
        path: "/401",
        name: "401",
        component: () => import("@/views/error/401.vue"),
        meta: {
          title: "401页面"
        }
      },
    //   {
    //     path: "/500",
    //     name: "500",
    //     component: () => import("@/components/ErrorMessage/500.vue"),
    //     meta: {
    //       title: "500页面"
    //     }
    //   },
      {
        path: "/:pathMatch(.*)*",
        component: () => import("@/views/error/404.vue")
      }
];
