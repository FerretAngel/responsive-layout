# 🌐 README
[中文](./README.md)

# 🎯 Responsive Layout

A modern responsive layout component, supporting both Vue3 and [react 18](https://www.npmjs.com/package/responsive-layout-react), helping you easily build adaptive application interfaces!

## ✨ Features

- 📱 Fully responsive design, perfect support for mobile and desktop
- 🎨 Based on TailwindCSS, easily customize styles
- 🔄 Smooth transition animations, providing excellent user experience
- 🎯 Flexible layout for navigation bar, sidebar, and main content area
- 📦 Simple and efficient state management based on Zustand/Pinia
- ⚡️ Zero dependencies, lightweight implementation

## 📦 Installation

```bash
pnpm add responsive-layout-vue pinia
```

## 🎨 TailwindCSS Configuration

### TailwindCSS 4.x

```css
/* index.css */
@source './node_modules/responsive-layout-vue/dist/**/*.{js,ts,jsx,tsx}'; 
```

### TailwindCSS 3.x

```js
// tailwind.config.js
module.exports = {
  content: [
    // ... other configurations
    './node_modules/responsive-layout-vue/dist/**/*.{js,ts,vue}', 
  ],
}
```

## 📦 Using Components

### Vue Version

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

## 🎯 Component Props

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

### Vue Slots

| Slot Name | Description | Required |
|--------|------|----------|
| `nav` | Navigation bar content | No |
| `main` | Main content area | Yes |
| `aside` | Sidebar content | No |

## 📦 Store Types (Pinia)

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

## 🎯 Core Features

- Automatic responsive layout, adapting to different screen sizes
- Support for showing/hiding navigation bar and sidebar
- Smooth transition animations
- Support for custom widths and styles
- Swipe support on mobile devices


## 📄 License
MIT 