/*
 * @Author: along
 * @Description: vite配置
 * @Date: 2023-05-30 21:31:24
 * @LastEditors: along
 * @LastEditTime: 2023-06-08 20:36:36
 * @FilePath: /cxy-web-tool/vite.config.ts
 */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  server: {
    historyApiFallback: {
      index: '/index.html'
    },
    port: 8888,
    open: true
  }
});
