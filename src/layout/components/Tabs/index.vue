<template>
  <div class="tabs-box">
    <div class="tabs-menu">
      <el-tabs v-model="tabsMenuValue" type="card" @tab-click="tabClick" @tab-remove="tabRemove">
        <el-tab-pane v-for="item in tabsMenuList" :key="item.path" :label="item.title" :name="item.path" :closable="item.close">
          <template #label>
            <span v-if="item.icon && tabsIcon" :class="['iconfont' , 'tabs-icon' , item.icon]"/>
            {{ item.title }}
          </template>
        </el-tab-pane>
      </el-tabs>
      <MoreButton />
    </div>
  </div>
</template>

<script setup lang="ts">
import Sortable from "sortablejs";
import { ref, computed, watch, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import useAppStore from "@/store/modules/app";
import { useTabsStore } from "@/store/modules/tabs";
import { TabsPaneContext, TabPaneName } from "element-plus";
import MoreButton from "./components/MoreButton.vue";

const route = useRoute();
const router = useRouter();
const tabStore = useTabsStore();
const appStore = useAppStore();


const tabsMenuValue = ref(route.fullPath);
const tabsMenuList = computed(() => tabStore.tabsMenuList);
const tabsIcon = computed(() => appStore.tabsIcon);

onMounted(() => {
  tabsDrop();
});

// 监听路由的变化（防止浏览器后退/前进不变化 tabsMenuValue）
watch(
  () => route.fullPath,
  () => {
    if (route.meta.isFull) return;
    tabsMenuValue.value = route.fullPath;
    const tabsParams = {
      icon: route.meta.icon as string,
      title: route.meta.title as string,
      path: route.fullPath,
      name: route.name as string,
      close: !route.meta.isAffix
    };
    tabStore.addTabs(tabsParams);
  },
  { immediate: true }
);

// tabs 拖拽排序
const tabsDrop = () => {
  Sortable.create(document.querySelector(".el-tabs__nav") as HTMLElement, {
    draggable: ".el-tabs__item",
    animation: 300,
    onEnd({ newIndex, oldIndex }) {
      const tabsList = [...tabStore.tabsMenuList];
      const currRow = tabsList.splice(oldIndex as number, 1)[0];
      tabsList.splice(newIndex as number, 0, currRow);
      tabStore.setTabs(tabsList);
    }
  });
};


// Tab Click
const tabClick = (tabItem: TabsPaneContext) => {
  const fullPath = tabItem.props.name as string;
  router.push(fullPath);
};

// Remove Tab
const tabRemove = (fullPath: TabPaneName) => {
  const name = tabStore.tabsMenuList.filter(item => item.path == fullPath)[0].name || "";
  tabStore.removeTabs(fullPath as string, fullPath == route.fullPath);
};
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
