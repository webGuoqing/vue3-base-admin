<template>
    <el-config-provider :size="assemblySize">
        <router-view />
    </el-config-provider>
</template>
<script setup lang="ts">
import { ElConfigProvider } from "element-plus";
import { onMounted ,computed} from 'vue';
import useAppStore from '@/store/modules/app';
import {defaultPrimary} from "@/layout/components/Navbar/ThemeSetting/theme/theme"
const appStore = useAppStore();
const assemblySize = computed(() => appStore.assemblySize);
const primary = computed(() => appStore.primary);
onMounted(()=>{
  // 初始化主题
  defaultPrimary(primary.value)
})
</script>
