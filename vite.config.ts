import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  resolve:{
    alias:{
      "@":path.resolve("./src") // 相对路径别名配置，使用 @ 代理src
    }
  },
  server: {
    proxy: {
      '/dev-api': {
        target: '',
        rewrite: (p) => p.replace(/^\/dev-api/, ''),
        changeOrigin: true,
      }
    }
  },
})
