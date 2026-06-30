import { fileURLToPath, URL } from 'node:url';
import path from 'node:path';

import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import UnoCSS from 'unocss/vite';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

export default defineConfig(() => ({
  clearScreen: false,
  envPrefix: ['VITE_', 'TAURI_'],
  plugins: [
    vue(),
    UnoCSS(),
    AutoImport({
      imports: ['vue', 'vue-router', 'pinia', 'vue-i18n'],
      dts: 'auto-imports.d.ts',
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      dts: 'components.d.ts',
      resolvers: [ElementPlusResolver({ importStyle: 'sass' })]
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    port: 1420,
    strictPort: true,
    host: '0.0.0.0'
  },
  build: {
    target: process.env.TAURI_PLATFORM === 'windows' ? ['es2021', 'chrome100', 'safari13'] : 'es2021',
    minify: process.env.TAURI_DEBUG ? false : 'esbuild',
    sourcemap: !!process.env.TAURI_DEBUG,
    outDir: 'dist',
    emptyOutDir: true
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "${path.resolve(__dirname, 'src/styles/variables.scss')}" as *;`
      }
    }
  }
}));
