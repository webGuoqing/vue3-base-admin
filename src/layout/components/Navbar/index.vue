<template>
    <div class="navbar">
        <div class="nav_left">
             <Hamburger></Hamburger>
        </div>
        <div class="nav_center">
        </div>
        <div class="nav_right">
            <AssemblySize/>
            <fullscreen />
            <theme-setting />
            <profile/>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { } from 'vue'
import Hamburger from './Hamburger/index.vue'
import themeSetting from './ThemeSetting/index.vue';
import AssemblySize from './AssemblySize/index.vue';
import fullscreen from './Fullscreen/index.vue';
import profile from './Profile/index.vue';
</script>

<style lang="scss" scoped>
@import './index.scss'
</style>