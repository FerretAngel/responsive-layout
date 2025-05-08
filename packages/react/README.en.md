# 🌐 README
[中文](./README.md)

# 🎯 Responsive Layout

A modern responsive layout component, supporting both [Vue3](https://www.npmjs.com/package/responsive-layout-vue) and React, helping you easily build adaptive application interfaces!

[✨online preview](https://ferretangel.github.io/responsive-layout/)
## ✨ Features

- 📱 Fully responsive design, perfect support for mobile and desktop
- 🎨 Based on TailwindCSS, easily customize styles
- 🔄 Smooth transition animations, providing excellent user experience
- 🎯 Flexible layout for navigation bar, sidebar, and main content area
- 📦 Simple and efficient state management based on Zustand/Pinia
- ⚡️ Zero dependencies, lightweight implementation

## 📦 Installation
```bash
pnpm add responsive-layout-react zustand
```


## 🎨 TailwindCSS Configuration

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
    // ... other configurations
    './node_modules/responsive-layout-react/dist/**/*.{js,ts,jsx,tsx}'
  ],
}
```

## 📦 Using Components

### React Version

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

## 🎯 Component Props

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

## 📦 Store Types (Zustand)

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