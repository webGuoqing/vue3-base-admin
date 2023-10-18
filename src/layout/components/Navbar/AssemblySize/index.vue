<template>
    <div>
        <el-dropdown trigger="click" @command="setAssemblySize">
            <div class="iconfont icon-contentright"/>
            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item v-for="item in assemblySizeList" :key="item.value" :command="item.value"
                        :disabled="assemblySize === item.value">
                        {{ item.label }}
                    </el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
    </div>
</template>
<script setup lang="ts">
import { computed } from "vue";
import useAppStore from '@/store/modules/app';

const appStore = useAppStore();
const assemblySize = computed(() => appStore.assemblySize);
const assemblySizeList = [
    { label: "默认", value: "default" },
    { label: "大型", value: "large" },
    { label: "小型", value: "small" }
];

const setAssemblySize = (item) => {
    if (assemblySize.value === item) return;
    appStore.setGlobalState("assemblySize", item);
};
</script>
<style lang="scss" scoped>
@import "../index.scss";
</style>