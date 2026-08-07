
<div align="center">

# Lingem's Blog

> じゅんあい ばんざい

[![Blog](https://img.shields.io/badge/Blog-lingem.pages.dev-blue?style=flat-square)](https://lingem.pages.dev/)
![Astro](https://img.shields.io/badge/Astro-7.1.3-orange?style=flat-square)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-06B6D4?style=flat-square&logo=tailwindcss)
[![License](https://img.shields.io/github/license/engpago413/Lingem?style=flat-square)](./LICENSE)

</div>

---

## 关于本站

这里是 Lingem 的个人博客。主要记录 HomeLab 折腾经验、ACGN 相关内容，以及自学日语的点滴。

我不追求成为什么技术博主，只是把自己踩过的坑、学到的东西写下来。一方面方便自己以后回顾，另一方面也许能帮到和我一样在摸索的人。

### 内容方向

- 🖥️ **HomeLab** — NAS、Docker、自托管服务折腾记录
- 🎬 **ACGN** — 追番笔记、漫画推荐、游戏心得
- 🇯🇵 **日语学习** — 自学路上的方法与资源
- 📦 **开源折腾** — 折腾过程中的小工具与脚本

<table width="100%" align="center">
  <tr>
    <td colspan="3" align="center">
      <img src="./docs/images/1.webp" >
      <br>横幅模式</td>
    </td>
  </tr>
  <tr>
    <td align="center"><img src="./docs/images/3.webp" width="300"><br>透明模式</td>
    <td align="center"><img src="./docs/images/2.webp" width="300"><br>全屏壁纸模式</td>
    <td align="center"><img src="./docs/images/4.webp" width="300"><br>纯色模式</td>
  </tr>
</table>

---

## 本站特性

基于 [Firefly](https://github.com/CuteLeaf/Firefly) 主题构建，拥有以下能力：

- **Astro + Tailwind CSS** — 基于现代技术栈，加载速度和 SEO 表现优异
- **多语言支持** — i18n 国际化，UI 支持简体中文、繁体中文、英文、日文、俄语、韩文
- **全文搜索** — 基于 Pagefind 的客户端搜索，支持文章内容索引
- **响应式设计** — 完美适配桌面端、平板和移动设备
- **Swup 页面过渡** — 流畅的 SPA 式页面切换动画
- **4 种壁纸模式** — 横幅壁纸、全屏壁纸、全屏透明壁纸、纯色背景
- **动态侧边栏** — 支持单侧边栏、双侧边栏布局
- **文章布局** — 列表 / 网格 / 瀑布流自由切换
- **亮暗色模式** — 支持亮色 / 暗色 / 跟随系统
- **丰富扩展** — Mermaid、PlantUML、KaTeX、GitHub 仓库卡片、Wiki Link 等 Markdown 增强
- **动态 / Memos 对接** — 支持本地动态或对接 Memos 作为数据源
- **Bangumi 集成** — 展示追番、读书、音乐、游戏收藏
- **看板娘** — 支持 Spine 动画角色的交互式看板娘

---

## 本地运行

### 环境要求

- Node.js ≥ 22
- pnpm ≥ 9

### 步骤

```bash
# 克隆仓库
git clone https://github.com/engpago413/Lingem.git
cd Lingem

# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev
```

开发服务器将在 `http://localhost:4321` 启动。

### 常用命令

| Command                    | Action                                 |
| :------------------------- | :------------------------------------- |
| `pnpm install`             | 安装依赖                               |
| `pnpm dev`                 | 启动本地开发服务器                     |
| `pnpm build`               | 构建生产版本至 `./dist/`               |
| `pnpm preview`             | 本地预览生产构建                       |
| `pnpm check`               | 检查代码错误                           |
| `pnpm format`              | 使用 Biome 格式化代码                  |
| `pnpm new-post <filename>` | 创建新文章                             |
| `pnpm new-d <content>`     | 创建一条动态                           |

---

## 配置文件结构

博客的大部分功能可通过 `src/config/` 下的配置文件自定义：

```
src/config/
├── index.ts                  # 配置入口
├── siteConfig.ts             # 站点基础配置（标题、URL、主题色等）
├── profileConfig.ts          # 个人资料（头像、签名、社交链接）
├── sidebarConfig.ts          # 侧边栏布局
├── navBarConfig.ts           # 导航栏配置
├── fontConfig.ts             # 字体配置
├── commentConfig.ts          # 评论系统配置
├── analyticsConfig.ts        # 统计分析配置
├── dynamicConfig.ts          # 动态页面配置
├── backgroundWallpaper.ts    # 背景壁纸配置
├── announcementConfig.ts     # 公告配置
├── footerConfig.ts           # 页脚配置
├── friendsConfig.ts          # 友链配置
├── musicConfig.ts            # 音乐播放器配置
├── pioConfig.ts              # 看板娘配置
├── galleryConfig.ts          # 相册配置
├── sponsorConfig.ts          # 打赏配置
├── effectsConfig.ts          # 动画特效配置
├── expressiveCodeConfig.ts   # 代码高亮配置
├── mermaidConfig.ts          # Mermaid 图表配置
├── plantumlConfig.ts         # PlantUML 图表配置
├── coverImageConfig.ts       # 封面图配置
├── licenseConfig.ts          # 许可证配置
└── displaySettingsConfig.ts  # 设置面板配置
```

---

## 致谢

本站基于 [Firefly](https://github.com/CuteLeaf/Firefly) 主题构建，感谢 [CuteLeaf](https://github.com/CuteLeaf) 的出色工作。

Firefly 最初 Fork 自 [saicaca/fuwari](https://github.com/saicaca/fuwari)，感谢 [saicaca](https://github.com/saicaca) 的贡献。

部分图片素材版权归游戏《崩坏：星穹铁道》开发商米哈游所有。

---

## 许可

本项目遵循 [MIT License](./LICENSE)，继承自上游项目。

原始版权声明：
- Copyright (c) 2024 [saicaca](https://github.com/saicaca) — [fuwari](https://github.com/saicaca/fuwari)
- Copyright (c) 2025 [CuteLeaf](https://github.com/CuteLeaf) — [Firefly](https://github.com/CuteLeaf/Firefly)
