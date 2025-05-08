# 🌐 README
[English](./README.en.md)

# 🎯 Responsive Layout

一个现代化的响应式布局组件，支持 [Vue3](https://www.npmjs.com/package/responsive-layout-vue) 和 React，帮助你轻松构建自适应的应用界面！

[✨效果预览](https://ferretangel.github.io/responsive-layout/)
## ✨ 特性

- 📱 完全响应式设计，完美支持移动端和桌面端
- 🎨 基于 TailwindCSS，轻松自定义样式
- 🔄 流畅的过渡动画，提供出色的用户体验
- 🎯 支持导航栏、侧边栏和主内容区的灵活布局
- 📦 基于 Zustand/Pinia 的状态管理，简单高效
- ⚡️ 零依赖，轻量级实现

## 📦 安装
```bash
pnpm add responsive-layout-react zustand
```



## 🎨 TailwindCSS 配置

### TailwindCSS 4.x

```css
/* index.css */
@source './node_modules/responsive-layout-react/dist/**/*.{js,ts,jsx,tsx}'; 
```

### TailwindCSS 3.x

```js
// tailwind.config.js
module.exports = {
  content: [
    // ... 其他配置
    './node_modules/responsive-layout-react/dist/**/*.{js,ts,jsx,tsx}'
  ],
}
```


## 📦 使用组件

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

## 🎯 组件 Props

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


## 📦 Store 类型 (Zustand)

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


## 📄 许可证
MIT

