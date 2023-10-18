import Layout from "@/layout/index.vue";
export const mapRouter = [
    {
        path: "/systemManage",
        name: "SystemManage",
        component: Layout,
        meta: {
            title: "系统管理",
            icon: 'icon-qingdan',
            isHidden: true,
            activeMenu:"SystemManage"
        },
        children: [
            {
                path: '/user',
                name: "User",
                component: () => import("@/views/systemManage/user/index.vue"),
                meta: {
                    title: "用户管理",
                    icon: 'icon-qingdan',
                    isHidden: true,
                    activeMenu:"User"
                },
            },
            {
                path: '/role',
                name: "Role",
                component: () => import("@/views/systemManage/role/index.vue"),
                meta: {
                    title: "角色管理",
                    icon: 'icon-qingdan',
                    isHidden: true,
                    activeMenu:"Role"
                },
            },
        ]
    },
    {
        path: "/accountManage",
        name: "AccountManage",
        component: Layout,
        meta: {
            title: "账户管理",
            icon: 'icon-shuju1',
            isHidden: true,
            activeMenu:"AccountManage"
        },
        children: [
            {
                path: '/reckoning',
                name: "Reckoning",
                component: () => import("@/views/accountManage/reckoning/index.vue"),
                meta: {
                    title: "账单管理",
                    icon: 'icon-shuju1',
                    isHidden: true,
                    activeMenu:"Reckoning"
                },
                children: [
                    {
                        path: '/reckoningList',
                        name: "ReckoningList",
                        component: () => import("@/views/accountManage/reckoning/reckoningList.vue"),
                        meta: {
                            title: "账单列表",
                            icon: 'icon-shuju1',
                            isHidden: true,
                            activeMenu:"ReckoningList"
                        },
                    },
                ]
            },
        ]
    },
]