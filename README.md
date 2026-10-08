# 个人网站 · Personal Site

移动端优先的中英双语个人主页，面向「全栈开发 + AI Agent 开发 + 前沿部署工程师（FDE）+ 企业 AI 落地」这一定位。

- **技术栈**：React 18 + TypeScript + Vite，UI 组件用 **antd-mobile 5**（Ant Design 官方移动端组件库）
- **样式**：纯 CSS + CSS 变量（深色科技风：霓虹渐变 + 玻璃拟态卡片 + 滚动淡入）
- **语言**：中 / 英双语，右上角一键切换，自动跟随浏览器语言并记忆选择
- **布局**：移动端优先，**并向上适配到桌面宽屏**（详见下方断点表）

---

## 响应式断点

| 视口宽度 | 容器 | 布局 | 导航 |
| --- | --- | --- | --- |
| `< 561px` | 100% | 单栏，卡片纵向堆叠 | 汉堡按钮 + 底部弹层 |
| `561–767px` | 560px 居中 | 同上，外加描边"手机预览"边框 | 同上 |
| `768–1023px` | 880px | 卡片 / 流程 / 联系方式两栏；能力区改为全展开卡片 | 同上 |
| `1024–1199px` | 1200px | **桌面宽屏**：首屏左右双栏；FDE 时间线仍为纵向 | 顶部横向导航 |
| `1200–1279px` | 1200px | ＋ 协作流程、FDE 时间线转为横向四步 | 同上 |
| `1280–1439px` | 1280px | ＋ 企业 AI 落地三栏 | 同上 |
| `≥ 1440px` | 1280px | ＋ 为什么选我四栏 | 同上 |

> 横排四栏是 1200px 起、而不是跟着 1024px 一起出现的，这是**中文排版**倒逼的：
> 正文里存在不含标点的长串（如「把原型硬化成能长期稳定运行的生产系统。」共 19 字），
> 栏宽小于该串长度时浏览器只能强制断行，会把「优化」劈成两行。1200px 起单栏 ≥ 256px 才放得下。

桌面端与移动端的差异不只是"变宽"，而是各自用了合适的形态：

- **首屏**：桌面端把「姓名 / 主张 / 简介 / 按钮」放左栏，数字看板 2×2 放右栏并垂直居中；移动端保持原来的上下顺序。
- **核心能力**：移动端用手风琴（省纵向空间），**桌面端换成全展开的两栏卡片**——宽屏下让用户逐个点开是反效率的。
- **FDE 四阶段**：窄屏是纵向时间线，宽屏转成横向四步，连接线由纵向改横向，穿过节点之间的空隙。
- **顶部导航**：桌面端显示 9 个横向导航项并高亮当前区块；1024–1279px 区间导航会自动收一号字，保证不和品牌、语言切换挤在一起。



---

## 快速开始

```bash
pnpm install      # 安装依赖
pnpm dev          # 本地开发，默认 http://localhost:5173
pnpm build        # 类型检查 + 生产构建，产物在 dist/
pnpm preview      # 本地预览生产构建
pnpm typecheck    # 只跑类型检查
```

> 构建产物是纯静态文件（`dist/`），可直接部署到 Vercel / Netlify / Cloudflare Pages /
> GitHub Pages / 对象存储 + CDN。`vite.config.ts` 里 `base: './'` 用的是相对路径，
> 因此放在任意子目录下也能正常访问。

---

## 我需要改哪里？

### 1. 个人信息 → `src/site.config.ts`（**唯一必改文件**）

所有「属于你的数据」都集中在这一个文件，改完全站中英文自动同步：

| 字段 | 说明 |
| --- | --- |
| `name` | 姓名（中 / 英） |
| `monogram` | 左上角方块里的 1–2 个字符 |
| `avatar` | 头像路径。把照片放到 `public/`，再填 `'/avatar.jpg'`；留空则显示渐变字母块 |
| `role` | 头衔，显示在名字下方 |
| `location` | 所在地 / 协作方式 |
| `availability` | 顶部「可接新项目」提示条，留空则隐藏 |
| `stats` | 首页数字看板（**请务必改成你的真实数字**） |
| `contact` | 邮箱 / Upwork / GitHub / LinkedIn / 微信，**留空的项会自动隐藏** |

### 2. 文案 → `src/i18n/zh.ts` 与 `src/i18n/en.ts`

`zh.ts` 是文案的**类型来源**：`en.ts` 必须与它结构完全一致，少写或写错字段 TypeScript 会直接报错，
不会出现「中文改了、英文忘了改」的情况。

---

## 目录结构

```
src/
├── site.config.ts          # 个人信息（改这里）
├── i18n/
│   ├── zh.ts               # 中文文案（同时定义文案类型 Dict）
│   ├── en.ts               # 英文文案（受 Dict 约束）
│   └── index.tsx           # I18nProvider + useI18n()，含语言检测与持久化
├── components/
│   ├── TopBar.tsx          # 吸顶头部：品牌 + 中英切换 + 目录按钮 + 阅读进度条
│   ├── NavSheet.tsx        # 底部导航弹层（antd-mobile Popup），高亮当前区块
│   ├── Hero.tsx            # 首屏：可接单状态 / 头像 / 姓名 / 主张 / CTA / 数字看板
│   ├── Capabilities.tsx    # 核心能力（antd-mobile Collapse 手风琴）
│   ├── AgentSection.tsx    # ★ AI Agent 开发
│   ├── FdeSection.tsx      # ★ 前沿部署工程师 FDE
│   ├── EnterpriseSection.tsx # ★ 企业 AI 落地
│   ├── TechStack.tsx       # 技术栈（antd-mobile Tabs 分组）
│   ├── WhyMe.tsx           # 为什么选择我
│   ├── Process.tsx         # 协作方式（四步流程）
│   ├── Contact.tsx         # 联系方式（微信点击复制 + Toast 提示）
│   ├── Footer.tsx
│   ├── Icon.tsx            # 自绘线性图标集（不引第三方图标库，省体积）
│   ├── Reveal.tsx          # 滚动进入视口时淡入上移
│   └── Section.tsx         # 区块外壳：标签 + 标题 + 副标题
├── hooks/
│   ├── useScroll.ts        # 阅读进度、当前区块高亮、平滑滚动
│   └── useMediaQuery.ts    # 媒体查询订阅（能力区据此在折叠/卡片之间切换）
├── utils/clipboard.ts      # 复制（Clipboard API + execCommand 回退）
└── styles/
    ├── tokens.css          # 设计变量 + antd-mobile 主题变量覆盖
    ├── base.css            # 重置、全局底色、区块 / 卡片 / 标签 / 按钮等公共样式
    └── components.css      # 各组件样式 + antd-mobile 组件外观覆盖
```

---

## 关于新增的三大板块

原始的 Upwork 介绍覆盖了「全周期交付 / 全栈 / 项目领导 / 运维」四条线，
站内保留了这部分作为「核心能力」，并新增了三个板块，形成「传统企业交付能力 → AI 时代新定位」的递进：

1. **AI Agent 开发**：不讲概念，按工程落地拆成四块——智能体架构（规划 / 记忆 / 工具调用 / MCP）、
   RAG 与私有知识库、工程化与质量（评测集 / Tracing / 护栏 / 降级）、落地形态与场景。
   末尾附常用技术栈标签。
2. **前沿部署工程师（FDE）**：先给出 FDE 的角色定义（源自 Palantir 的「工程师驻场」模式），
   再用 Discover → Prototype → Deploy → Feed back 四阶段时间线说明工作方式，
   最后用「为什么我适合做 FDE」把 20 年企业交付经验与这个角色直接挂钩。
3. **企业 AI 落地**：从场景选择讲到长期运营——AI 就绪度与场景排序、PoC 到生产的完整路径、
   安全合规与数据主权、成本与性能治理、组织赋能，末尾是关注的可量化交付指标。

三个板块在文案上互相呼应：FDE 负责「进现场」，AI Agent 是「造什么」，企业 AI 落地是「怎么让组织真正用起来」。

---

## 设计说明

- **配色**：底色 `#05070e`，主渐变 `#22d3ee → #6366f1 → #a855f7`；卡片用半透明白叠加 + 1px 描边。
- **氛围**：首屏两团缓慢漂浮的光晕 + 细网格；全局固定径向渐变底光。
- **动效**：所有区块用 `IntersectionObserver` 做入场淡入，且完整尊重 `prefers-reduced-motion`。
- **中文断行**：浏览器默认允许在**任意两个汉字之间**断行（不看词边界），会把「大概」「方向」这类
  双字词劈到两行。`base.css` 里给 `body` 设了 `word-break: keep-all`，
  把汉字之间的断行机会关掉，只在标点处断行；再用 `overflow-wrap: break-word` 兜底，
  遇到超长且无标点的串时仍可强制断开、不会溢出。
  该设置**对英文无副作用**——英文本来就只在空格 / 连字符处断行。
- **移动端细节**：`env(safe-area-inset-*)` 适配刘海屏、`-webkit-tap-highlight-color` 去掉点击高亮、
  `overscroll-behavior-y: none` 防橡皮筋、`scroll-margin-top` 让锚点跳转不被吸顶头部挡住。
- **antd-mobile 深色适配**：官方 `theme-dark.css` 并未随组件自动引入，因此本项目在
  `tokens.css` 里用与官方同特异度的选择器（`:root, html[data-prefers-color-scheme='dark']`）
  显式覆盖了整套 `--adm-*` 变量，并针对 Collapse（内部由 List 渲染）与 Tabs 做了精细化外观覆盖。
- **CSS 文件分工**：`tokens.css` 只放变量与断点；`base.css` 放重置和**跨组件通用**的排版 / 卡片 / 栅格；
  `components.css` 放**单个组件**的样式与响应式覆盖。
  ⚠️ 两者按 `base.css → components.css` 的顺序引入，**同名选择器一律以 `components.css` 为准**，
  所以组件级（尤其是 `.hero__*`）的断点覆盖必须写在 `components.css` 里，否则会被移动端样式盖掉。

---

## 部署

```bash
pnpm build     # 产物输出到 docs/
```

构建产物目录是 **`docs/`**（不是 `dist/`），这样同一份产物既能上自建服务器，
又能被 GitHub Pages 直接发布——Pages 的"分支发布"只认仓库根目录或 `/docs` 两个位置，
而根目录放不了（根 `index.html` 是 Vite 的源码入口，指向 `/src/main.tsx`）。
`public/.nojekyll` 会在构建时一并拷进 `docs/`，用来关掉 Pages 的 Jekyll 处理。

### 两个线上地址

| 地址 | 来源 |
| --- | --- |
| https://zxianlin.cn | 自建服务器（宝塔 nginx → docker 容器 `webapp`），用下面的技能部署 |
| https://garyzhang1982.github.io | 本仓库 `main` 分支的 `docs/` 目录，push 后由 GitHub Pages 发布 |

### 部署到自建服务器（本项目专用技能）

本项目自带一个部署技能，位于 `.agents/skills/zxianlin-site-deploy/`：

```bash
cd /Users/garyzhang/code/ds-harness/person-introduce   # 必须在项目根目录执行
.agents/skills/zxianlin-site-deploy/scripts/deploy.sh --build
```

它会：`pnpm build` → 打包 → 上传到服务器 → 备份旧版 → 清空 `/zxianlin-sg-01/web-app/www`
→ 解包 → 修正属主 → 校验线上指纹。细节与排错见该技能目录下的 `SKILL.md`。

> **它为什么放在项目里而不是 `~/.agents/skills/`：** 部署目标是线上正在运行的站点，
> 放用户级目录会在**任何**项目里被看到——在别的项目里跑一次就会把个人网站覆盖成那个项目的内容。
> 放项目内就只在打开本项目时才被发现。脚本里另有一道硬校验：`package.json` 的 `name`
> 不是 `person-introduce` 就直接拒绝执行。
>
> 该目录已加入 `.gitignore`，不会进入这个公开仓库（里面有服务器地址、SSH 命令和密钥路径）。

已内置 `favicon.svg`，`index.html` 里的 `<title>` 与 `description` 也会随语言切换更新
（`src/i18n/index.tsx` 中设置）。
