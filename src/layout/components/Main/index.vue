<template>
  <Maximize v-if="maximize" />
  <Tabs v-if="tabs" />
  <el-main class="el_main">
    <router-view v-slot="{ Component, route }">
      <transition appear name="fade-transform" mode="out-in">
        <keep-alive :include="keepAliveName">
          <component :is="Component" v-if="isRouterShow" :key="route.fullPath" />
        </keep-alive>
      </transition>
    </router-view>
  </el-main>
</template>

<script lang="ts" setup name="main">
import { computed , provide , ref , watch } from "vue";
import Maximize from './components/Maximize.vue';
import useAppStore from "@/store/modules/app";
import Tabs from "../Tabs/index.vue"
const appStore = useAppStore();
const tabs = computed(() => appStore.tabs);
const maximize = computed(() => appStore.maximize);
const keepAliveName = []
// 注入刷新页面方法
const isRouterShow = ref(true);
const refreshCurrentPage = (val: boolean) => (isRouterShow.value = val);
provide("refresh", refreshCurrentPage);

watch(
  () => maximize.value,
  () => {
    const app = document.getElementById('app') as HTMLElement;
    if (maximize.value) {
      app.classList.add('main-maximize');
    } else {
      app.classList.remove('main-maximize');
    }
  },
  { immediate: true },
);
</script>

<style lang="scss" scoped>
@import "../../index.scss";
</style>
