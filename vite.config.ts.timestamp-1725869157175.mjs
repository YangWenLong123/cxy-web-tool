// vite.config.ts
import { defineConfig, loadEnv, splitVendorChunkPlugin } from "file:///Users/yangwenlong/Desktop/gitee/cxy-web-tool/node_modules/.pnpm/registry.npmmirror.com+vite@4.0.4_@types+node@18.11.18_sass@1.58.3/node_modules/vite/dist/node/index.js";
import vue from "file:///Users/yangwenlong/Desktop/gitee/cxy-web-tool/node_modules/.pnpm/registry.npmmirror.com+@vitejs+plugin-vue@4.0.0_vite@4.0.4_vue@3.2.45/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import path from "path";
import VueSetupExtend from "file:///Users/yangwenlong/Desktop/gitee/cxy-web-tool/node_modules/.pnpm/registry.npmmirror.com+vite-plugin-vue-setup-extend@0.4.0_vite@4.0.4/node_modules/vite-plugin-vue-setup-extend/dist/index.mjs";
import vueJsx from "file:///Users/yangwenlong/Desktop/gitee/cxy-web-tool/node_modules/.pnpm/registry.npmmirror.com+@vitejs+plugin-vue-jsx@3.0.0_vite@4.0.4_vue@3.2.45/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import svgLoader from "file:///Users/yangwenlong/Desktop/gitee/cxy-web-tool/node_modules/.pnpm/registry.npmmirror.com+vite-svg-loader@4.0.0/node_modules/vite-svg-loader/index.js";
import DefineOptions from "file:///Users/yangwenlong/Desktop/gitee/cxy-web-tool/node_modules/.pnpm/registry.npmmirror.com+unplugin-vue-define-options@1.3.5_rollup@2.79.1_vue@3.2.45/node_modules/unplugin-vue-define-options/dist/vite.mjs";
import commpressPlugin from "file:///Users/yangwenlong/Desktop/gitee/cxy-web-tool/node_modules/.pnpm/vite-plugin-compression@0.5.1_vite@4.0.4/node_modules/vite-plugin-compression/dist/index.mjs";
var __vite_injected_original_dirname = "/Users/yangwenlong/Desktop/gitee/cxy-web-tool";
var vite_config_default = defineConfig((config) => {
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
        verbose: true,
        // 默认即可
        disable: false,
        // 开启压缩(不禁用)，默认即可
        deleteOriginFile: false,
        // 删除源文件
        threshold: 1,
        // 压缩前最小文件大小
        algorithm: "gzip",
        // 压缩算法
        ext: ".gz"
        // 文件类型
      }),
      splitVendorChunkPlugin()
    ],
    resolve: {
      alias: {
        "@": path.resolve(__vite_injected_original_dirname, "src")
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true
        }
      }
    },
    server: {
      host: "0.0.0.0",
      port: env.VITE_APP_PORT,
      open: true
    },
    build: {
      chunkSizeWarningLimit: 2e3,
      rollupOptions: {
        output: {
          chunkFileNames: "assets/js/[name]-[hash].js",
          entryFileNames: "assets/js/[name]-[hash].js",
          assetFileNames: "assets/[ext]/[name]-[hash].[ext]"
        }
      }
    },
    esbuild: {
      pure: ["console.log"],
      minify: true
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMveWFuZ3dlbmxvbmcvRGVza3RvcC9naXRlZS9jeHktd2ViLXRvb2xcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy95YW5nd2VubG9uZy9EZXNrdG9wL2dpdGVlL2N4eS13ZWItdG9vbC92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMveWFuZ3dlbmxvbmcvRGVza3RvcC9naXRlZS9jeHktd2ViLXRvb2wvdml0ZS5jb25maWcudHNcIjsvKlxuICogQERlc2NyaXB0aW9uOlx1OTE0RFx1N0Y2RVxuICogQEF1dG9yOiBhbG9uZ1xuICogQERhdGU6IDIwMjMtMDMtMTYgMTA6MzU6NDNcbiAqIEBMYXN0RWRpdG9yczogYWxvbmdcbiAqIEBMYXN0RWRpdFRpbWU6IDIwMjMtMDctMDkgMTE6MjE6MjhcbiAqL1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnLCBsb2FkRW52LCBzcGxpdFZlbmRvckNodW5rUGx1Z2luIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCB2dWUgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXZ1ZVwiO1xuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcbmltcG9ydCBWdWVTZXR1cEV4dGVuZCBmcm9tIFwidml0ZS1wbHVnaW4tdnVlLXNldHVwLWV4dGVuZFwiO1xuaW1wb3J0IHZ1ZUpzeCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tdnVlLWpzeFwiO1xuaW1wb3J0IHN2Z0xvYWRlciBmcm9tIFwidml0ZS1zdmctbG9hZGVyXCI7XG5pbXBvcnQgRGVmaW5lT3B0aW9ucyBmcm9tIFwidW5wbHVnaW4tdnVlLWRlZmluZS1vcHRpb25zL3ZpdGVcIjsgLy8gXHU3RUQ5XHU2ODA3XHU3QjdFXHU1RjBGIHNldHVwIFx1NTJBMCBuYW1lXG5pbXBvcnQgY29tbXByZXNzUGx1Z2luIGZyb20gXCJ2aXRlLXBsdWdpbi1jb21wcmVzc2lvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKGNvbmZpZykgPT4ge1xuICBjb25zdCB7IG1vZGUgfSA9IGNvbmZpZztcbiAgY29uc3QgZW52ID0gbG9hZEVudihtb2RlLCBwcm9jZXNzLmN3ZCgpKTtcblxuICBjb25zb2xlLmxvZyhcImVudlwiLCBlbnYpO1xuXG4gIHJldHVybiB7XG4gICAgYmFzZTogXCIuL1wiLFxuICAgIHBsdWdpbnM6IFtcbiAgICAgIHZ1ZSgpLFxuICAgICAgRGVmaW5lT3B0aW9ucygpLFxuICAgICAgLy8gKiB2aXRlIFx1NTNFRlx1NEVFNVx1NEY3Rlx1NzUyOCBqc3gvdHN4IFx1OEJFRFx1NkNENVxuICAgICAgdnVlSnN4KCksXG4gICAgICAvLyAqIG5hbWUgXHU1M0VGXHU0RUU1XHU1MTk5XHU1NzI4IHNjcmlwdCBcdTY4MDdcdTdCN0VcdTRFMEFcbiAgICAgIFZ1ZVNldHVwRXh0ZW5kKCksXG4gICAgICAvLyAqIHZpdGUtc3ZnLWxvYWRlclx1NjUyRlx1NjMwMVx1RkYwQ1x1NTNFRlx1NEVFNVx1NzZGNFx1NjNBNVx1NUYxNVx1NTE2NXN2Z1x1NTZGRVx1NjgwN1x1NUY1M1x1NEY1Q1x1N0VDNFx1NEVGNlx1NEY3Rlx1NzUyOFxuICAgICAgc3ZnTG9hZGVyKCksXG4gICAgICBjb21tcHJlc3NQbHVnaW4oe1xuICAgICAgICB2ZXJib3NlOiB0cnVlLCAvLyBcdTlFRDhcdThCQTRcdTUzNzNcdTUzRUZcbiAgICAgICAgZGlzYWJsZTogZmFsc2UsIC8vIFx1NUYwMFx1NTQyRlx1NTM4Qlx1N0YyOShcdTRFMERcdTc5ODFcdTc1MjgpXHVGRjBDXHU5RUQ4XHU4QkE0XHU1MzczXHU1M0VGXG4gICAgICAgIGRlbGV0ZU9yaWdpbkZpbGU6IGZhbHNlLCAvLyBcdTUyMjBcdTk2NjRcdTZFOTBcdTY1ODdcdTRFRjZcbiAgICAgICAgdGhyZXNob2xkOiAxLCAvLyBcdTUzOEJcdTdGMjlcdTUyNERcdTY3MDBcdTVDMEZcdTY1ODdcdTRFRjZcdTU5MjdcdTVDMEZcbiAgICAgICAgYWxnb3JpdGhtOiBcImd6aXBcIiwgLy8gXHU1MzhCXHU3RjI5XHU3Qjk3XHU2Q0Q1XG4gICAgICAgIGV4dDogXCIuZ3pcIiwgLy8gXHU2NTg3XHU0RUY2XHU3QzdCXHU1NzhCXG4gICAgICB9KSxcbiAgICAgIHNwbGl0VmVuZG9yQ2h1bmtQbHVnaW4oKSxcbiAgICBdLFxuICAgIHJlc29sdmU6IHtcbiAgICAgIGFsaWFzOiB7XG4gICAgICAgIFwiQFwiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcInNyY1wiKSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBjc3M6IHtcbiAgICAgIHByZXByb2Nlc3Nvck9wdGlvbnM6IHtcbiAgICAgICAgc2Nzczoge1xuICAgICAgICAgIGphdmFzY3JpcHRFbmFibGVkOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICAgIHNlcnZlcjoge1xuICAgICAgaG9zdDogXCIwLjAuMC4wXCIsXG4gICAgICBwb3J0OiBlbnYuVklURV9BUFBfUE9SVCxcbiAgICAgIG9wZW46IHRydWUsXG4gICAgfSxcbiAgICBidWlsZDoge1xuICAgICAgY2h1bmtTaXplV2FybmluZ0xpbWl0OiAyMDAwLFxuICAgICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgICBvdXRwdXQ6IHtcbiAgICAgICAgICBjaHVua0ZpbGVOYW1lczogXCJhc3NldHMvanMvW25hbWVdLVtoYXNoXS5qc1wiLFxuICAgICAgICAgIGVudHJ5RmlsZU5hbWVzOiBcImFzc2V0cy9qcy9bbmFtZV0tW2hhc2hdLmpzXCIsXG4gICAgICAgICAgYXNzZXRGaWxlTmFtZXM6IFwiYXNzZXRzL1tleHRdL1tuYW1lXS1baGFzaF0uW2V4dF1cIixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBlc2J1aWxkOiB7XG4gICAgICBwdXJlOiBbXCJjb25zb2xlLmxvZ1wiXSxcbiAgICAgIG1pbmlmeTogdHJ1ZSxcbiAgICB9LFxuICB9O1xufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBT0EsU0FBUyxjQUFjLFNBQVMsOEJBQThCO0FBQzlELE9BQU8sU0FBUztBQUNoQixPQUFPLFVBQVU7QUFDakIsT0FBTyxvQkFBb0I7QUFDM0IsT0FBTyxZQUFZO0FBQ25CLE9BQU8sZUFBZTtBQUN0QixPQUFPLG1CQUFtQjtBQUMxQixPQUFPLHFCQUFxQjtBQWQ1QixJQUFNLG1DQUFtQztBQWdCekMsSUFBTyxzQkFBUSxhQUFhLENBQUMsV0FBVztBQUN0QyxRQUFNLEVBQUUsS0FBSyxJQUFJO0FBQ2pCLFFBQU0sTUFBTSxRQUFRLE1BQU0sUUFBUSxJQUFJLENBQUM7QUFFdkMsVUFBUSxJQUFJLE9BQU8sR0FBRztBQUV0QixTQUFPO0FBQUEsSUFDTCxNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsTUFDUCxJQUFJO0FBQUEsTUFDSixjQUFjO0FBQUE7QUFBQSxNQUVkLE9BQU87QUFBQTtBQUFBLE1BRVAsZUFBZTtBQUFBO0FBQUEsTUFFZixVQUFVO0FBQUEsTUFDVixnQkFBZ0I7QUFBQSxRQUNkLFNBQVM7QUFBQTtBQUFBLFFBQ1QsU0FBUztBQUFBO0FBQUEsUUFDVCxrQkFBa0I7QUFBQTtBQUFBLFFBQ2xCLFdBQVc7QUFBQTtBQUFBLFFBQ1gsV0FBVztBQUFBO0FBQUEsUUFDWCxLQUFLO0FBQUE7QUFBQSxNQUNQLENBQUM7QUFBQSxNQUNELHVCQUF1QjtBQUFBLElBQ3pCO0FBQUEsSUFDQSxTQUFTO0FBQUEsTUFDUCxPQUFPO0FBQUEsUUFDTCxLQUFLLEtBQUssUUFBUSxrQ0FBVyxLQUFLO0FBQUEsTUFDcEM7QUFBQSxJQUNGO0FBQUEsSUFDQSxLQUFLO0FBQUEsTUFDSCxxQkFBcUI7QUFBQSxRQUNuQixNQUFNO0FBQUEsVUFDSixtQkFBbUI7QUFBQSxRQUNyQjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQSxRQUFRO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixNQUFNLElBQUk7QUFBQSxNQUNWLE1BQU07QUFBQSxJQUNSO0FBQUEsSUFDQSxPQUFPO0FBQUEsTUFDTCx1QkFBdUI7QUFBQSxNQUN2QixlQUFlO0FBQUEsUUFDYixRQUFRO0FBQUEsVUFDTixnQkFBZ0I7QUFBQSxVQUNoQixnQkFBZ0I7QUFBQSxVQUNoQixnQkFBZ0I7QUFBQSxRQUNsQjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQSxTQUFTO0FBQUEsTUFDUCxNQUFNLENBQUMsYUFBYTtBQUFBLE1BQ3BCLFFBQVE7QUFBQSxJQUNWO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
