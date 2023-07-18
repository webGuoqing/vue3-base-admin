<!-- layout主布局 -->
<template>
    <div class="common-layout">
        <el-container class="el_container">
            <el-aside class="el_aside" :width="appStore.isCollapse ? '70px' : '200px'" >
                <Menu></Menu>
            </el-aside>
            <el-container>
                <el-header class="el_header">
                    <Navbar></Navbar>
                </el-header>
                <el-main class="el_main">
                    <router-view />
                </el-main>
                <el-footer class="el_footer">
                    v0.01
                </el-footer>
            </el-container>
        </el-container>
    </div>
</template>

<script lang="ts" setup>
import Menu from './components/Menu/index.vue';
import Navbar from './components/Navbar/index.vue';
import { } from 'vue'
import { } from 'vue-router'
import useAppStore from '@/store/modules/app';
const appStore = useAppStore();

</script>

<style lang="scss" scoped>
@import './index.scss'
</style>