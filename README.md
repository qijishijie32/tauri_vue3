# Tauri 2 + Vue 3 桌面应用基础框架

一个开箱即用的 **Tauri 2 + Vue 3 + TypeScript** 桌面应用脚手架，适合作为本地桌面应用开发基础底座。

## ✨ 特性清单

- Tauri 2.x（Rust 后端命令 + Vue 前端）
- Vue 3 `<script setup>` + TypeScript 严格模式
- Vite 5 + Vue Router 4（`createWebHashHistory`）
- Pinia + `pinia-plugin-persistedstate` 状态持久化
- Element Plus 自动按需导入（AutoImport + Components Resolver）
- UnoCSS（`presetUno` / `presetAttributify` / `presetIcons`）
- Axios 请求封装、统一错误处理
- vue-i18n（`zh-CN` / `en`）并联动 Element Plus Locale
- NProgress 路由进度条
- ESLint + Prettier + Sass

## 技术栈

| 分类 | 技术 |
| --- | --- |
| 桌面容器 | Tauri 2.x |
| 前端框架 | Vue 3.x |
| 构建工具 | Vite 5.x |
| 语言 | TypeScript 5.x |
| 路由 | Vue Router 4.x |
| 状态管理 | Pinia 2.x + pinia-plugin-persistedstate |
| UI | Element Plus |
| CSS | UnoCSS + Sass |
| 网络请求 | Axios |
| 国际化 | vue-i18n |
| 进度条 | NProgress |
| 规范 | ESLint + Prettier |

## 环境要求

- Node.js >= 18
- pnpm >= 9
- Rust 工具链（`rustup` + `cargo`）
- Tauri 官方前置依赖（按系统安装）
  - https://v2.tauri.app/start/prerequisites/

## 安装与启动

```bash
pnpm install
pnpm tauri dev
```

生产构建：

```bash
pnpm tauri build
```

## 图标生成

本仓库默认保留了 `src-tauri/icons/*` 配置路径，但不提交二进制图标文件。首次使用请执行：

```bash
pnpm tauri icon ./app-icon.png
```

其中 `app-icon.png` 建议为 1024x1024。

## 目录结构（完整）

```text
tauri_vue3
├─ .editorconfig                      # 编辑器统一格式
├─ .env                               # 通用环境变量
├─ .env.development                   # 开发环境变量
├─ .env.production                    # 生产环境变量
├─ .eslintignore
├─ .gitignore
├─ .npmrc
├─ .prettierignore
├─ .prettierrc.json
├─ LICENSE
├─ README.md
├─ auto-imports.d.ts                  # 自动导入类型声明（初始版）
├─ components.d.ts                    # 组件自动注册声明（初始版）
├─ env.d.ts
├─ eslint.config.js
├─ index.html
├─ package.json
├─ tsconfig.json
├─ tsconfig.node.json
├─ uno.config.ts
├─ vite.config.ts
├─ src
│  ├─ App.vue
│  ├─ main.ts
│  ├─ api
│  │  ├─ types.ts
│  │  └─ user.ts
│  ├─ assets
│  │  └─ logo.svg
│  ├─ components
│  │  ├─ PageContainer
│  │  │  └─ index.vue
│  │  └─ SvgIcon
│  │     └─ index.vue
│  ├─ constants
│  │  └─ index.ts
│  ├─ layouts
│  │  ├─ DefaultLayout.vue
│  │  └─ components
│  │     ├─ AppHeader.vue
│  │     ├─ AppSidebar.vue
│  │     ├─ Breadcrumb.vue
│  │     └─ SidebarItem.vue
│  ├─ locales
│  │  ├─ index.ts
│  │  └─ lang
│  │     ├─ en.ts
│  │     └─ zh-CN.ts
│  ├─ router
│  │  ├─ index.ts
│  │  └─ routes.ts
│  ├─ stores
│  │  ├─ index.ts
│  │  └─ modules
│  │     ├─ app.ts
│  │     └─ user.ts
│  ├─ styles
│  │  ├─ dark.scss
│  │  ├─ index.scss
│  │  ├─ reset.scss
│  │  └─ variables.scss
│  ├─ types
│  │  └─ index.ts
│  ├─ utils
│  │  ├─ auth.ts
│  │  ├─ index.ts
│  │  ├─ request.ts
│  │  ├─ storage.ts
│  │  └─ tauri.ts
│  └─ views
│     ├─ about
│     │  └─ index.vue
│     ├─ dashboard
│     │  └─ index.vue
│     ├─ demo
│     │  └─ index.vue
│     ├─ error
│     │  └─ 404.vue
│     └─ login
│        └─ index.vue
└─ src-tauri
   ├─ .gitignore
   ├─ Cargo.toml
   ├─ build.rs
   ├─ tauri.conf.json
   ├─ capabilities
   │  └─ default.json
   └─ src
      ├─ lib.rs
      ├─ main.rs
      └─ commands
         └─ mod.rs
```

## 如何新增页面 / 路由 / Store / Tauri 命令

### 新增页面与路由

1. 在 `src/views/` 下新增页面组件，例如 `src/views/report/index.vue`
2. 在 `src/router/routes.ts` 增加路由项与 `meta.title`
3. 若需出现在侧边菜单，放到 `/` 的子路由并设置 `meta.icon`

### 新增 Pinia Store

1. 在 `src/stores/modules/` 新建 `xxx.ts`
2. 使用 `defineStore` 创建 store
3. 需要持久化时增加 `persist` 配置

### 新增 Tauri 命令

1. 在 `src-tauri/src/commands/mod.rs` 添加 `#[tauri::command]` 函数
2. 在 `src-tauri/src/lib.rs` 的 `invoke_handler` 注册命令
3. 在 `src/utils/tauri.ts` 增加前端调用封装

## FAQ

### 1）为什么路由使用 Hash 模式？

Tauri 场景下 Hash 路由对本地文件协议更友好，避免刷新路径解析问题。

### 2）首次克隆后如果图标缺失怎么办？

执行 `pnpm tauri icon ./app-icon.png` 生成 `src-tauri/icons/*` 即可。

### 3）没有 Rust / GUI 环境可以做什么验证？

可以先执行：

```bash
pnpm install
pnpm type-check
pnpm build
pnpm lint
```

这些静态检查可验证 TypeScript、Vite 配置和 import 解析是否正确。

## 本次创建的完整文件清单

- 根目录：`.editorconfig`、`.env`、`.env.development`、`.env.production`、`.eslintignore`、`.gitignore`、`.npmrc`、`.prettierignore`、`.prettierrc.json`、`LICENSE`、`README.md`、`auto-imports.d.ts`、`components.d.ts`、`env.d.ts`、`eslint.config.js`、`index.html`、`package.json`、`tsconfig.json`、`tsconfig.node.json`、`uno.config.ts`、`vite.config.ts`
- 前端：`src/` 下全部代码文件（见目录树）
- Tauri：`src-tauri/.gitignore`、`src-tauri/Cargo.toml`、`src-tauri/build.rs`、`src-tauri/tauri.conf.json`、`src-tauri/capabilities/default.json`、`src-tauri/src/main.rs`、`src-tauri/src/lib.rs`、`src-tauri/src/commands/mod.rs`

