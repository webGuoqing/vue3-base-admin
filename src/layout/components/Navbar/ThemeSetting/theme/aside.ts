export type AsideThemeType = "light" | "dark";

export const asideTheme: Record<AsideThemeType, { [key: string]: string }> = {
    light: {
        "--el-logo-text-color": "#646566",
        "--el-menu-bg-color-t": "#ffffff",
        "--el-menu-hover-bg-color-t": "var(--el-color-primary-light-9)",
        "--el-menu-active-bg-color-t": "var(--el-color-primary-light-9)",
        "--el-menu-text-color-t": "#333333",
        "--el-menu-active-color-t": "var(--el-color-primary)",
        "--el-menu-hover-text-color-t": "#333333",
    },
    dark: {
        "--el-logo-text-color": "#adc6ff",
        "--el-menu-bg-color-t": "#333C4D",
        "--el-menu-text-color-t": "#fff",
        "--el-menu-active-color-t": "#fff",
        "--el-menu-hover-bg-color-t": "#273142",
        "--el-menu-active-bg-color-t": "#273142",
        "--el-menu-hover-text-color-t": "#273142",
    }
};