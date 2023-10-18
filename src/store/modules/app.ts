import { defineStore } from "pinia"

//defineStore 是返回一个函数 函数命名最好有use前缀，根据函数来进行下一步操作
const useAppStore = defineStore('app', {
    state: () => (
        {
            // 主题颜色
            primary: '#D70110',
            // 侧边栏反转
            asideInverted: true,
            // 是否显示logo
            isLogo: true,
            // 是否点击折叠菜单、点击后不会基金适配
            isClickCollapse: false,
            // 页面分辨率
            device: 'desktop',
            // 折叠菜单
            isCollapse: false,
            // element 组件大小
            assemblySize: "default",
        }
    ),
    actions: {
        setGlobalState(...args: any) {
            this.$patch({ [args[0]]: args[1] });
        }
    },
    persist: {
        enabled: true,
        key: "appStore",
        storage: sessionStorage,
    } as any
})
// useCounter
export default useAppStore