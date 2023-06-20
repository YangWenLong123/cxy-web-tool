/*
 * @Description:配置
 * @Autor: codeBo
 * @Date: 2023-03-16 10:35:43
 * @LastEditors: along
 * @LastEditTime: 2023-06-19 15:40:52
 */
import { defineConfig, loadEnv, splitVendorChunkPlugin } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import VueSetupExtend from "vite-plugin-vue-setup-extend";
import vueJsx from "@vitejs/plugin-vue-jsx";
import svgLoader from "vite-svg-loader";
import DefineOptions from "unplugin-vue-define-options/vite"; // 给标签式 setup 加 name
import commpressPlugin from "vite-plugin-compression";

export default defineConfig((config) => {
  const { mode } = config;
  const env = loadEnv(mode, process.cwd());

  console.log("env", env);

  return {
    base: "./",
    plugins: [
      vue(),
      DefineOptions(),
      // * vite 可以使用 jsx/tsx 语法
      vueJsx(),
      // * name 可以写在 script 标签上
      VueSetupExtend(),
      // * vite-svg-loader支持，可以直接引入svg图标当作组件使用
      svgLoader(),
      commpressPlugin({
        verbose: true, // 默认即可
        disable: false, // 开启压缩(不禁用)，默认即可
        deleteOriginFile: false, // 删除源文件
        threshold: 1, // 压缩前最小文件大小
        algorithm: "gzip", // 压缩算法
        ext: ".gz", // 文件类型
      }),
      splitVendorChunkPlugin(),
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true,
        },
      },
    },
    server: {
      host: "0.0.0.0",
      port: env.VITE_APP_PORT,
      open: true,
    },
    build: {
      chunkSizeWarningLimit: 2000,
      rollupOptions: {
        output: {
          chunkFileNames: "assets/js/[name]-[hash].js",
          entryFileNames: "assets/js/[name]-[hash].js",
          assetFileNames: "assets/[ext]/[name]-[hash].[ext]",
        },
      },
    },
    esbuild: {
      pure: ["console.log"],
      minify: true,
    },
  };
});
