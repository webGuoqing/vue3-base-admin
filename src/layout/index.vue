<!-- layout主布局 -->
<template>
    <div class="common-layout">
        <el-container class="el_container">
            <el-aside 
               class="el_aside" 
               :width="appStore.isCollapse ? '64px' : '200px'" 
                v-if="appStore.device != 'mobile'">
                <Logo></Logo>
                <Menu></Menu>
            </el-aside>
            <el-container>
                <el-header class="el_header">
                    <Navbar></Navbar>
                </el-header>
                <Main></Main>
                <el-footer class="el_footer">
                    v0.01
                </el-footer>
            </el-container>
        </el-container>
    </div>
</template>

<script lang="ts" setup name="home">
import Menu from './components/Menu/index.vue';
import Main from './components/Main/index.vue';
import Logo from './components/Logo/index.vue';
import Navbar from './components/Navbar/index.vue';
import { onMounted } from 'vue'
import { } from 'vue-router'
import useAppStore from '@/store/modules/app';
const appStore: any = useAppStore();
onMounted(() => {
    handleScreenResize();
    window.addEventListener("resize", handleScreenResize);
});
function handleScreenResize() {
    const width = document.body.clientWidth;
    if (width <= 768) {
        appStore.setGlobalState('device', 'mobile')
        if (!appStore.isClickCollapse) {
            appStore.setGlobalState('isCollapse', true)
        }
    } else if (width < 992 && width > 768) {
        appStore.setGlobalState('device', 'ipad')
        if (!appStore.isClickCollapse) {
            appStore.setGlobalState('isCollapse', true)
        }
    } else if (width < 1200 && width >= 992) {
        appStore.setGlobalState('device', 'desktop')
        if (!appStore.isClickCollapse) {
            appStore.setGlobalState('isCollapse', false)
        }
    } else {
        appStore.setGlobalState('device', 'desktop')
        if (!appStore.isClickCollapse) {
            appStore.setGlobalState('isCollapse', false)
        }
    }
}
</script>

<style lang="scss" scoped>
@import './index.scss'
</style>