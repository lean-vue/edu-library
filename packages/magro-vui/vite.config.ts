import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: 'src/index.ts',
      formats: ['es'],
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        assetFileNames: (assetInfo) =>
          assetInfo.name === 'style.css'
            ? 'vui.css'
            : (assetInfo.name as string),
      },
    },
  },
});
