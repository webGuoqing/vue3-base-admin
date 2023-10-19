import { defineConfig , loadEnv } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'

export default defineConfig(({ mode, command })=>{
  const env = loadEnv(mode, process.cwd());
  const { VITE_APP_BASE_API , VITE_APP_BASE_URL, VITE_APP_ENV, VITE_APP_BASE_DIR } = env;
  return {
    plugins: [vue()],
    resolve:{
      alias:{
        "@":path.resolve("./src") // 相对路径别名配置，使用 @ 代理src
      }
    },
    server: {
      proxy: {
        [VITE_APP_BASE_API]: {
          target: VITE_APP_BASE_URL,
          rewrite: (p) => p.replace(/^\/dev-api/, ''),
          changeOrigin: true,
        }
      }
    },
  }
})
