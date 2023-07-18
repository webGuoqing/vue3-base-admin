<template>
    <div class="container">
        <el-icon class="el_iconfont" @click="toggleClick">
            <Fold v-if="appStore.isCollapse" />
            <Expand v-else />
        </el-icon>
    </div>
</template>

<script lang="ts" setup>
import { Expand, Fold} from '@element-plus/icons-vue'
import { } from 'vue'
import { } from 'vue-router'
import useAppStore from '@/store/modules/app';
const appStore = useAppStore();
function toggleClick() {
    appStore.setGlobalState('isCollapse', !appStore.isCollapse);
}
</script>

<style lang="scss" scoped>
@import '../index.scss'
</style>