<template>
    <template v-if="showHidden(menu)">
        <template v-if="checkisChildren(menu)">
            <el-sub-menu v-if="menu.meta.title" :index="menu.name">
                <template #title>
                    <div class="iconfont" :class="getIcon(menu.meta.icon)"></div>
                    <span class="sle">{{ menu.meta.title }}</span>
                </template>
                <menu-item v-for="(item, key) in menu.children" :key="key" :menu="item" />
            </el-sub-menu>
        </template>
        <template v-else>
            <el-menu-item v-if="menu.meta.title" :index="menu.name" @click="selectRoute(menu)">
                <div class="iconfont" :class="getIcon(menu.meta.icon)"></div>
                <template #title>
                    <span class="sle">{{  menu.meta.title }}</span>
                </template>
            </el-menu-item>
        </template>
    </template>
</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router'
const router = useRouter();
defineProps({
    menu: {
        type: Object,
        required: true,
    },
})
const showHidden = function (menu) {
    // isHidden 为 true 显示在侧边栏上
    if (menu.meta && menu.meta.isHidden) {
        return true;
    }
    return false;
};
const checkisChildren = function (menu) {
    // 检查是否存在子项目
    if (menu.meta.isChildren) return false
    if (menu.children && menu.children.length != 0) {
        const list = menu.children
        for (let i = 0; i < list.length; i++) {
            const element = list[i];
            if (element.meta.isHidden) {
                return true;
            }
        }
        return false;
    }
}
const getIcon = function(icon){
   return icon ? icon : ''
}
const selectRoute = function (query) {
    router.push(query.path);
};
</script>

<style lang="scss" scoped>
.iconfont {
    font-size: 14px;
    margin-right: 5px;
}
</style>