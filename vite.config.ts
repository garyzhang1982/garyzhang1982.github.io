import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 移动端优先的个人站：产物为纯静态文件，可直接部署到任意静态托管
// (自建 nginx / GitHub Pages / Vercel / Netlify / 对象存储 + CDN)
export default defineConfig({
  base: './',
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
  },
  build: {
    // 输出目录叫 docs 而不是 dist，是为了 GitHub Pages：
    // 用户主页仓库(garyzhang1982.github.io)用"分支发布"时只认仓库根目录或 /docs 两个位置，
    // 根目录又放不了 —— 根 index.html 是 Vite 的源码入口(指向 /src/main.tsx)，
    // 被 Pages 直接当静态页返回的话页面是坏的。所以构建产物统一进 docs/。
    // 自建服务器那条链路(见 .agents/skills/zxianlin-site-deploy)也用同一个目录。
    outDir: 'docs',
    sourcemap: false,
    chunkSizeWarningLimit: 1200,
  },
})
