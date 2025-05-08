import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), dts({
    rollupTypes: true,
    include: ['./lib/**/*.(ts|tsx)'],
    tsconfigPath: './tsconfig.app.json',
    entryRoot: './lib',
  }), tailwindcss()],
  build: {
    lib: {
      name: 'responsive-layout-react',
      entry: './lib/index.ts',
      fileName: format => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "react",
          "react-dom": "react-dom",
        },
      },
    },
  },
})
