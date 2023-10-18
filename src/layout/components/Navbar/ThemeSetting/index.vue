<template>
    <div>
        <div class="iconfont icon-ico_zhuti_baisebeifen" @click="drawer = true" />
        <div>
            <el-drawer v-model="drawer" title="布局设置" size="300px">
                <el-divider class="divider" content-position="center">
                    <el-icon>
                        <ColdDrink />
                    </el-icon>
                    全局主题
                </el-divider>
                <div class="theme-item">
                    <span>主题颜色</span>
                    <el-color-picker v-model="primary" :predefine="colorList" @change="changePrimary" />
                </div>
                <div class="theme-item">
                    <span>
                        侧边栏反转色
                        <el-tooltip effect="dark" content="侧边导航栏颜色填充" placement="top">
                            <el-icon>
                                <QuestionFilled />
                            </el-icon>
                        </el-tooltip>
                    </span>
                    <el-switch v-model="asideInverted" @change="setAsideTheme" />
                </div>
                <div class="theme-item">
                    <span>
                        是否显示logo
                    </span>
                    <el-switch v-model="isLogo" @change="changeIsLogo" />
                </div>
                <div class="theme-item">
                    <span>
                        侧边栏适配屏幕
                        <el-tooltip effect="dark" content="开启后侧边栏不会根据屏幕变化展开或者收缩" placement="top">
                            <el-icon>
                                <QuestionFilled />
                            </el-icon>
                        </el-tooltip>
                    </span>
                    <el-switch v-model="isClickCollapse" @change="clickCollapse" />
                </div>
            </el-drawer>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref, onMounted, computed } from 'vue'
import { getLightColor } from "./theme/color";
import useAppStore from '@/store/modules/app';
import { ElMessage } from "element-plus";
import { asideTheme, AsideThemeType } from "./theme/aside";
const appStore = useAppStore();
const drawer = ref(false)
const primary = computed(() => appStore.primary);
const asideInverted = computed(() => appStore.asideInverted);
const isClickCollapse = computed(() => appStore.isClickCollapse);
const isLogo = computed(() => appStore.isLogo);
const colorList = [
    '#D70110',
    "#27ae60",
    "#ff5c93",
    "#e74c3c",
    "#fd726d",
    "#f39c12",
    "#9b59b6"
];
onMounted(() => {
    setAsideTheme(appStore.asideInverted)
    changePrimary(appStore.primary ? appStore.primary : '#D70110')
})

const clickCollapse = function () {
    appStore.setGlobalState('isClickCollapse', !appStore.isClickCollapse);
}
const changePrimary = function (value) {
    let themeColor = value
    if (!value || value == null) {
        ElMessage({ type: "success", message: `主题颜色已重置为${appStore.primary}` });
        themeColor = '#D70110'
    }

    document.documentElement.style.setProperty("--el-color-primary", themeColor);
    document.documentElement.style.setProperty(
        "--el-color-primary-dark-2", `${getLightColor(themeColor, 0.3)}`
    );
    for (let i = 1; i <= 9; i++) {
        const primaryColor = `${getLightColor(themeColor, i / 10)}`;
        document.documentElement.style.setProperty(`--el-color-primary-light-${i}`, primaryColor);
    }
    appStore.setGlobalState("primary", themeColor);
    drawer.value = false
}

const setAsideTheme = function (value) {
    appStore.setGlobalState("asideInverted", value);
    let type: AsideThemeType = value ? "dark" : 'light';
    const theme = asideTheme[type!];
    for (const [key, value] of Object.entries(theme)) {
        document.documentElement.style.setProperty(key, value);
    }
}
const changeIsLogo = function () {
    appStore.setGlobalState("isLogo", !appStore.isLogo);
}
</script>

<style lang="scss" scoped>
@import '../index.scss';
:deep(.el-drawer__header) {
    padding: 10px !important;
    margin-bottom: 0 !important;
}

:deep(.el-drawer__body) {
    padding: 0px 10px !important;
}

.theme-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 14px 0;

    span {
        display: flex;
        align-items: center;
        font-size: 14px;

        .el-icon {
            margin-left: 3px;
            font-size: 15px;
            color: var(--el-text-color-regular);
            cursor: pointer;
        }
    }
}
</style>