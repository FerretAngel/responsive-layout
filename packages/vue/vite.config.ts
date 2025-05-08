import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import vue from '@vitejs/plugin-vue'
// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), dts({
    rollupTypes: true,
    include: ['./lib/**/*.(ts|tsx|vue)'],
    tsconfigPath: './tsconfig.app.json',
    entryRoot: './lib',
  })],
  build: {
    lib: {
      name: 'responsive-layout-vue',
      entry: './lib/index.ts',
      fileName: format => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["vue","pinia"],
      output: {
        globals: {
          vue: "vue",
          pinia: "pinia",
        },
      },
    },
  },
})
