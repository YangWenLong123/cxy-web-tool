/*
 * @Description:配置
 * @Autor: along
 * @Date: 2023-03-16 10:35:43
 * @LastEditors: along
 * @LastEditTime: 2025-03-03 14:59:05
 */
import { defineConfig, loadEnv, splitVendorChunkPlugin } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import VueSetupExtend from "vite-plugin-vue-setup-extend";
import vueJsx from "@vitejs/plugin-vue-jsx";
import svgLoader from "vite-svg-loader";
import DefineOptions from "unplugin-vue-define-options/vite"; // 给标签式 setup 加 name
import commpressPlugin from "vite-plugin-compression";

// import AutoImport from "unplugin-auto-import/vite";
// import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";

export default defineConfig((config) => {
  const { mode } = config;
  const env = loadEnv(mode, process.cwd());

  console.log("env", env);

  return {
    base: "./",
    plugins: [
      vue(),

      // AutoImport({
      //   include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/],
      //   imports: ["vue", "pinia", "vue-router"],
      //   // 调整自动引入的文件位置
      //   dts: "./auto-import.d.ts",
      //   // 解决自动引入eslint报错问题 需要在eslintrc的extend选项中引入
      //   eslintrc: {
      //     enabled: true,
      //     // 配置文件的位置
      //     filepath: "./.eslintrc-auto-import.json",
      //     globalsPropValue: true,
      //   },
      //   // 自动导入element
      //   resolvers: [AntDesignVueResolver()],
      // }),

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
          silenceDeprecations: ["legacy-js-api"],
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
