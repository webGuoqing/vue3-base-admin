<template>
    <el-menu :default-active="activeMenu" :router="false" :collapse="isCollapse" :collapse-transition="false"
        :unique-opened="true" class="el_menu">
        <MenuItem v-for="(item, key) in allRoutes" :key="key" :menu="item" />
    </el-menu>
</template>

<script lang="ts" setup>
import { ref, computed, watch, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import useAppStore from '@/store/modules/app';
import MenuItem from './menuItem.vue'
const appStore = useAppStore();
const route = useRoute();
const router = useRouter();
const activeMenu = computed(() => (route.meta.activeMenu ? route.meta.activeMenu : route.path) as string);
const isCollapse = computed(() => appStore.isCollapse);
const allRoutes = computed(() => router.options.routes);
</script>

<style lang="scss" scoped>
.el_menu {
    border-right: none;
}
</style>