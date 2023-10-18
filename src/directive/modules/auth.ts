/**
 * v-auth
 * 模块权限指令
*/
import { Directive, DirectiveBinding } from 'vue'
const auth: Directive = {
    // mounted是指令的一个生命周期
    mounted(el: HTMLElement, binding: DirectiveBinding) {
        const moduleData = [];
        const { value } = binding
        if (value && value instanceof Array && value.length > 0) {
            if (!moduleData || moduleData.length === 0) return
            const authFlag = value
            const hasAuth = moduleData.some((element: any) => {
                return authFlag.includes(element)
            })
            if (!hasAuth) {
                el.parentNode && el.parentNode.removeChild(el)
            }
        } else {
            throw new Error(`请设置操作权限标签值`)
        }
    }
};

export default auth;