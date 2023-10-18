import { getLightColor } from "./color";
export function defaultPrimary(value: string) {
    let themeColor = value
    document.documentElement.style.setProperty("--el-color-primary", themeColor);
    document.documentElement.style.setProperty(
        "--el-color-primary-dark-2", `${getLightColor(themeColor, 0.3)}`
    );
    for (let i = 1; i <= 9; i++) {
        const primaryColor = `${getLightColor(themeColor, i / 10)}`;
        document.documentElement.style.setProperty(`--el-color-primary-light-${i}`, primaryColor);
    }
};