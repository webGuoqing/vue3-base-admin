<template>
  <div class="app-breadcrumb">
    <el-breadcrumb v-if="levelList.length" separator="/">
      <transition-group name="breadcrumb">
        <el-breadcrumb-item v-for="(item, index) in levelList" :key="item.path">
          <span v-if="item.redirect === 'noRedirect' || index == levelList.length - 1" class="no-redirect">{{
            item.meta.title }}</span>
          <a v-else @click.prevent="handleLink(item)">{{ item.meta.title }}</a>
        </el-breadcrumb-item>
      </transition-group>
    </el-breadcrumb>
  </div>
</template>

<script lang="ts" setup>
import { ref, watchEffect } from "vue"
import { useRouter, useRoute } from "vue-router";
const route = useRoute();
const router = useRouter();
const levelList = ref([]);
function getBreadcrumb() {
  // only show routes with meta.title
  let matched = route.matched.filter((item) => item.meta && item.meta.title);
  levelList.value = matched.filter(
    (item) =>
      item.meta &&
      item.meta.title &&
      item.meta.breadcrumb !== false
  );
}
function isInWhitelist(route) {
  const name = route && route.name;
  if (!name) {
    return true;
  }
  return false;
}
function isDashboard(route) {
  const name = route && route.name;
  if (!name) {
    return false;
  }
  return name.trim() === 'Index';
}
function handleLink(item) {
  const { redirect, path } = item;

  // 多级路有参数处理
  let query;
  if (route.query.routerOtherParams) {
    query = JSON.parse(route.query.routerOtherParams);
  }
  if (redirect) {
    router.push({
      path: redirect,
      query,
    });
    return;
  }
  router.push({
    path,
    query,
  });
}
watchEffect(() => {
  if (route.path.startsWith('/redirect/')) {
    return;
  }
  getBreadcrumb();
});
</script>

<style lang="scss" scoped>
.app-breadcrumb{
  padding: 0 10px;
}
</style>