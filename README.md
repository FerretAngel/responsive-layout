
# 🎯 Responsive Layout

一个现代化的响应式布局组件，支持 Vue 和 React，帮助你轻松构建自适应的应用界面！

## ✨ 特性

- 📱 完全响应式设计，完美支持移动端和桌面端
- 🎨 基于 TailwindCSS，轻松自定义样式
- 🔄 流畅的过渡动画，提供出色的用户体验
- 🎯 支持导航栏、侧边栏和主内容区的灵活布局
- 📦 基于 Zustand/Pinia 的状态管理，简单高效
- ⚡️ 零依赖，轻量级实现

## 📦 安装
- React
```bash
pnpm add responsive-layout-react zustand
```
- vue
```bash
pnpm add responsive-layout-vue pinia

```


## 🎨 TailwindCSS 配置

### TailwindCSS 4.x

```css
/* index.css */

/* react only */
@source './node_modules/responsive-layout-react/dist/**/*.{js,ts,jsx,tsx}';
/* vue only */
@source './node_modules/responsive-layout-vue/dist/**/*.{js,ts,jsx,tsx}'; 
```

### TailwindCSS 3.x

```js
// tailwind.config.js
module.exports = {
  content: [
    // ... 其他配置
    //react
    './node_modules/responsive-layout-react/dist/**/*.{js,ts,jsx,tsx}',
    // vue
    './node_modules/responsive-layout-vue/dist/**/*.{js,ts,vue}', 
  ],
}
```


## 📦 使用组件

### React 版本

```tsx
import { ResponsiveLayout } from 'responsive-layout-react'

function App() {
  return (
    <ResponsiveLayout
      appNav={<YourNav />}
      appAside={<YourAside />}
      appMain={<YourMain />}
      navWidth="24rem"
      asideWidth="24rem"
      className="custom-class"
      classNames={{
        nav: "nav-class",
        aside: "aside-class",
        main: "main-class"
      }}
    />
  )
}
```

### Vue 版本

```vue
<template>
  <ResponsiveLayout
    :nav-width="'24rem'"
    :aside-width="'24rem'"
    class="custom-class"
    :class-names="{
      nav: 'nav-class',
      aside: 'aside-class',
      main: 'main-class'
    }"
  >
    <template #nav>
      <YourNav />
    </template>
    <template #main>
      <YourMain />
    </template>
    <template #aside>
      <YourAside />
    </template>
  </ResponsiveLayout>
</template>

<script setup lang="ts">
import { ResponsiveLayout } from 'responsive-layout-vue'
</script>
```

## 🎯 组件 Props

### React 版本

```ts
interface ClassNames {
  nav?: string;
  aside?: string;
  main?: string;
}

interface ResponsiveLayoutProps {
  appNav?: React.ReactNode;
  appAside?: React.ReactNode;
  appMain: React.ReactNode;
  className?: string;
  classNames?: ClassNames;
  navWidth?: string;
  asideWidth?: string;
}
```

### Vue 版本

```ts
interface ClassNames {
  nav?: string;
  aside?: string;
  main?: string;
}

interface Props {
  className?: string;
  classNames?: ClassNames;
  navWidth?: string;
  asideWidth?: string;
}
```

### vue插槽

| 插槽名 | 说明 | 是否必需 |
|--------|------|----------|
| `nav` | 导航栏内容 | 否 |
| `main` | 主内容区 | 是 |
| `aside` | 侧边栏内容 | 否 |

## 📦 Store 类型

### React 版本 (Zustand)

```ts
interface ResponsiveLayoutStore {
  openNav: boolean;
  openAside: boolean;
  setOpenNav: (openNav: boolean) => void;
  setOpenAside: (openAside: boolean) => void;
  toggleNav: () => void;
  toggleAside: () => void;
}
```

### Vue 版本 (Pinia)

```ts
interface ResponsiveLayoutStore {
  openNav: boolean;
  openAside: boolean;
  setOpenNav: (openNav: boolean) => void;
  setOpenAside: (openAside: boolean) => void;
  toggleNav: () => void;
  toggleAside: () => void;
}
```

## 🎯 核心功能

- 自动响应式布局，适配不同屏幕尺寸
- 支持导航栏和侧边栏的显示/隐藏
- 平滑的过渡动画
- 支持自定义宽度和样式
- 移动端支持滑动切换

## 🛠️ 开发指南

- React 版本在 `packages/react/lib` 中开发
- Vue 版本在 `packages/vue/lib` 中开发
- 在 `packages/page` 中预览和测试
- 使用 `pnpm build` 构建库

## 📄 许可证
MIT

