// vite.config.ts
import { defineConfig, loadEnv, splitVendorChunkPlugin } from "file:///Users/yangwenlong/Desktop/gitee/cxy-web-tool/node_modules/.pnpm/vite@4.5.5_@types+node@18.19.70_sass@1.83.4/node_modules/vite/dist/node/index.js";
import vue from "file:///Users/yangwenlong/Desktop/gitee/cxy-web-tool/node_modules/.pnpm/@vitejs+plugin-vue@4.6.2_vite@4.5.5_vue@3.5.13/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import path from "path";
import VueSetupExtend from "file:///Users/yangwenlong/Desktop/gitee/cxy-web-tool/node_modules/.pnpm/vite-plugin-vue-setup-extend@0.4.0_vite@4.5.5/node_modules/vite-plugin-vue-setup-extend/dist/index.mjs";
import vueJsx from "file:///Users/yangwenlong/Desktop/gitee/cxy-web-tool/node_modules/.pnpm/@vitejs+plugin-vue-jsx@3.1.0_vite@4.5.5_vue@3.5.13/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import svgLoader from "file:///Users/yangwenlong/Desktop/gitee/cxy-web-tool/node_modules/.pnpm/vite-svg-loader@4.0.0/node_modules/vite-svg-loader/index.js";
import DefineOptions from "file:///Users/yangwenlong/Desktop/gitee/cxy-web-tool/node_modules/.pnpm/unplugin-vue-define-options@1.5.3_vue@3.5.13/node_modules/unplugin-vue-define-options/dist/vite.js";
import commpressPlugin from "file:///Users/yangwenlong/Desktop/gitee/cxy-web-tool/node_modules/.pnpm/vite-plugin-compression@0.5.1_vite@4.5.5/node_modules/vite-plugin-compression/dist/index.mjs";
var __vite_injected_original_dirname = "/Users/yangwenlong/Desktop/gitee/cxy-web-tool";
var vite_config_default = defineConfig((config) => {
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
          javascriptEnabled: true,
          silenceDeprecations: ["legacy-js-api"]
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMveWFuZ3dlbmxvbmcvRGVza3RvcC9naXRlZS9jeHktd2ViLXRvb2xcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy95YW5nd2VubG9uZy9EZXNrdG9wL2dpdGVlL2N4eS13ZWItdG9vbC92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMveWFuZ3dlbmxvbmcvRGVza3RvcC9naXRlZS9jeHktd2ViLXRvb2wvdml0ZS5jb25maWcudHNcIjsvKlxuICogQERlc2NyaXB0aW9uOlx1OTE0RFx1N0Y2RVxuICogQEF1dG9yOiBhbG9uZ1xuICogQERhdGU6IDIwMjMtMDMtMTYgMTA6MzU6NDNcbiAqIEBMYXN0RWRpdG9yczogYWxvbmdcbiAqIEBMYXN0RWRpdFRpbWU6IDIwMjUtMDEtMTYgMTM6NDM6MjRcbiAqL1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnLCBsb2FkRW52LCBzcGxpdFZlbmRvckNodW5rUGx1Z2luIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCB2dWUgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXZ1ZVwiO1xuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcbmltcG9ydCBWdWVTZXR1cEV4dGVuZCBmcm9tIFwidml0ZS1wbHVnaW4tdnVlLXNldHVwLWV4dGVuZFwiO1xuaW1wb3J0IHZ1ZUpzeCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tdnVlLWpzeFwiO1xuaW1wb3J0IHN2Z0xvYWRlciBmcm9tIFwidml0ZS1zdmctbG9hZGVyXCI7XG5pbXBvcnQgRGVmaW5lT3B0aW9ucyBmcm9tIFwidW5wbHVnaW4tdnVlLWRlZmluZS1vcHRpb25zL3ZpdGVcIjsgLy8gXHU3RUQ5XHU2ODA3XHU3QjdFXHU1RjBGIHNldHVwIFx1NTJBMCBuYW1lXG5pbXBvcnQgY29tbXByZXNzUGx1Z2luIGZyb20gXCJ2aXRlLXBsdWdpbi1jb21wcmVzc2lvblwiO1xuLy8gaW1wb3J0IEF1dG9JbXBvcnQgZnJvbSBcInVucGx1Z2luLWF1dG8taW1wb3J0L3ZpdGVcIjtcbi8vIGltcG9ydCB7IEFudERlc2lnblZ1ZVJlc29sdmVyIH0gZnJvbSBcInVucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3Jlc29sdmVyc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKGNvbmZpZykgPT4ge1xuICBjb25zdCB7IG1vZGUgfSA9IGNvbmZpZztcbiAgY29uc3QgZW52ID0gbG9hZEVudihtb2RlLCBwcm9jZXNzLmN3ZCgpKTtcblxuICBjb25zb2xlLmxvZyhcImVudlwiLCBlbnYpO1xuXG4gIHJldHVybiB7XG4gICAgYmFzZTogXCIuL1wiLFxuICAgIHBsdWdpbnM6IFtcbiAgICAgIHZ1ZSgpLFxuXG4gICAgICAvLyBBdXRvSW1wb3J0KHtcbiAgICAgIC8vICAgaW5jbHVkZTogWy9cXC5bdGpdc3g/JC8sIC9cXC52dWUkLywgL1xcLnZ1ZVxcP3Z1ZS9dLFxuICAgICAgLy8gICBpbXBvcnRzOiBbXCJ2dWVcIiwgXCJwaW5pYVwiLCBcInZ1ZS1yb3V0ZXJcIl0sXG4gICAgICAvLyAgIC8vIFx1OEMwM1x1NjU3NFx1ODFFQVx1NTJBOFx1NUYxNVx1NTE2NVx1NzY4NFx1NjU4N1x1NEVGNlx1NEY0RFx1N0Y2RVxuICAgICAgLy8gICBkdHM6IFwiLi9hdXRvLWltcG9ydC5kLnRzXCIsXG4gICAgICAvLyAgIC8vIFx1ODlFM1x1NTFCM1x1ODFFQVx1NTJBOFx1NUYxNVx1NTE2NWVzbGludFx1NjJBNVx1OTUxOVx1OTVFRVx1OTg5OCBcdTk3MDBcdTg5ODFcdTU3Mjhlc2xpbnRyY1x1NzY4NGV4dGVuZFx1OTAwOVx1OTg3OVx1NEUyRFx1NUYxNVx1NTE2NVxuICAgICAgLy8gICBlc2xpbnRyYzoge1xuICAgICAgLy8gICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAvLyAgICAgLy8gXHU5MTREXHU3RjZFXHU2NTg3XHU0RUY2XHU3Njg0XHU0RjREXHU3RjZFXG4gICAgICAvLyAgICAgZmlsZXBhdGg6IFwiLi8uZXNsaW50cmMtYXV0by1pbXBvcnQuanNvblwiLFxuICAgICAgLy8gICAgIGdsb2JhbHNQcm9wVmFsdWU6IHRydWUsXG4gICAgICAvLyAgIH0sXG4gICAgICAvLyAgIC8vIFx1ODFFQVx1NTJBOFx1NUJGQ1x1NTE2NWVsZW1lbnRcbiAgICAgIC8vICAgcmVzb2x2ZXJzOiBbQW50RGVzaWduVnVlUmVzb2x2ZXIoKV0sXG4gICAgICAvLyB9KSxcblxuICAgICAgRGVmaW5lT3B0aW9ucygpLFxuICAgICAgLy8gKiB2aXRlIFx1NTNFRlx1NEVFNVx1NEY3Rlx1NzUyOCBqc3gvdHN4IFx1OEJFRFx1NkNENVxuICAgICAgdnVlSnN4KCksXG4gICAgICAvLyAqIG5hbWUgXHU1M0VGXHU0RUU1XHU1MTk5XHU1NzI4IHNjcmlwdCBcdTY4MDdcdTdCN0VcdTRFMEFcbiAgICAgIFZ1ZVNldHVwRXh0ZW5kKCksXG4gICAgICAvLyAqIHZpdGUtc3ZnLWxvYWRlclx1NjUyRlx1NjMwMVx1RkYwQ1x1NTNFRlx1NEVFNVx1NzZGNFx1NjNBNVx1NUYxNVx1NTE2NXN2Z1x1NTZGRVx1NjgwN1x1NUY1M1x1NEY1Q1x1N0VDNFx1NEVGNlx1NEY3Rlx1NzUyOFxuICAgICAgc3ZnTG9hZGVyKCksXG4gICAgICBjb21tcHJlc3NQbHVnaW4oe1xuICAgICAgICB2ZXJib3NlOiB0cnVlLCAvLyBcdTlFRDhcdThCQTRcdTUzNzNcdTUzRUZcbiAgICAgICAgZGlzYWJsZTogZmFsc2UsIC8vIFx1NUYwMFx1NTQyRlx1NTM4Qlx1N0YyOShcdTRFMERcdTc5ODFcdTc1MjgpXHVGRjBDXHU5RUQ4XHU4QkE0XHU1MzczXHU1M0VGXG4gICAgICAgIGRlbGV0ZU9yaWdpbkZpbGU6IGZhbHNlLCAvLyBcdTUyMjBcdTk2NjRcdTZFOTBcdTY1ODdcdTRFRjZcbiAgICAgICAgdGhyZXNob2xkOiAxLCAvLyBcdTUzOEJcdTdGMjlcdTUyNERcdTY3MDBcdTVDMEZcdTY1ODdcdTRFRjZcdTU5MjdcdTVDMEZcbiAgICAgICAgYWxnb3JpdGhtOiBcImd6aXBcIiwgLy8gXHU1MzhCXHU3RjI5XHU3Qjk3XHU2Q0Q1XG4gICAgICAgIGV4dDogXCIuZ3pcIiwgLy8gXHU2NTg3XHU0RUY2XHU3QzdCXHU1NzhCXG4gICAgICB9KSxcbiAgICAgIHNwbGl0VmVuZG9yQ2h1bmtQbHVnaW4oKSxcbiAgICBdLFxuICAgIHJlc29sdmU6IHtcbiAgICAgIGFsaWFzOiB7XG4gICAgICAgIFwiQFwiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcInNyY1wiKSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBjc3M6IHtcbiAgICAgIHByZXByb2Nlc3Nvck9wdGlvbnM6IHtcbiAgICAgICAgc2Nzczoge1xuICAgICAgICAgIGphdmFzY3JpcHRFbmFibGVkOiB0cnVlLFxuICAgICAgICAgIHNpbGVuY2VEZXByZWNhdGlvbnM6IFtcImxlZ2FjeS1qcy1hcGlcIl0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgc2VydmVyOiB7XG4gICAgICBob3N0OiBcIjAuMC4wLjBcIixcbiAgICAgIHBvcnQ6IGVudi5WSVRFX0FQUF9QT1JULFxuICAgICAgb3BlbjogdHJ1ZSxcbiAgICB9LFxuICAgIGJ1aWxkOiB7XG4gICAgICBjaHVua1NpemVXYXJuaW5nTGltaXQ6IDIwMDAsXG4gICAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICAgIG91dHB1dDoge1xuICAgICAgICAgIGNodW5rRmlsZU5hbWVzOiBcImFzc2V0cy9qcy9bbmFtZV0tW2hhc2hdLmpzXCIsXG4gICAgICAgICAgZW50cnlGaWxlTmFtZXM6IFwiYXNzZXRzL2pzL1tuYW1lXS1baGFzaF0uanNcIixcbiAgICAgICAgICBhc3NldEZpbGVOYW1lczogXCJhc3NldHMvW2V4dF0vW25hbWVdLVtoYXNoXS5bZXh0XVwiLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICAgIGVzYnVpbGQ6IHtcbiAgICAgIHB1cmU6IFtcImNvbnNvbGUubG9nXCJdLFxuICAgICAgbWluaWZ5OiB0cnVlLFxuICAgIH0sXG4gIH07XG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFPQSxTQUFTLGNBQWMsU0FBUyw4QkFBOEI7QUFDOUQsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sVUFBVTtBQUNqQixPQUFPLG9CQUFvQjtBQUMzQixPQUFPLFlBQVk7QUFDbkIsT0FBTyxlQUFlO0FBQ3RCLE9BQU8sbUJBQW1CO0FBQzFCLE9BQU8scUJBQXFCO0FBZDVCLElBQU0sbUNBQW1DO0FBa0J6QyxJQUFPLHNCQUFRLGFBQWEsQ0FBQyxXQUFXO0FBQ3RDLFFBQU0sRUFBRSxLQUFLLElBQUk7QUFDakIsUUFBTSxNQUFNLFFBQVEsTUFBTSxRQUFRLElBQUksQ0FBQztBQUV2QyxVQUFRLElBQUksT0FBTyxHQUFHO0FBRXRCLFNBQU87QUFBQSxJQUNMLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxNQUNQLElBQUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQWtCSixjQUFjO0FBQUE7QUFBQSxNQUVkLE9BQU87QUFBQTtBQUFBLE1BRVAsZUFBZTtBQUFBO0FBQUEsTUFFZixVQUFVO0FBQUEsTUFDVixnQkFBZ0I7QUFBQSxRQUNkLFNBQVM7QUFBQTtBQUFBLFFBQ1QsU0FBUztBQUFBO0FBQUEsUUFDVCxrQkFBa0I7QUFBQTtBQUFBLFFBQ2xCLFdBQVc7QUFBQTtBQUFBLFFBQ1gsV0FBVztBQUFBO0FBQUEsUUFDWCxLQUFLO0FBQUE7QUFBQSxNQUNQLENBQUM7QUFBQSxNQUNELHVCQUF1QjtBQUFBLElBQ3pCO0FBQUEsSUFDQSxTQUFTO0FBQUEsTUFDUCxPQUFPO0FBQUEsUUFDTCxLQUFLLEtBQUssUUFBUSxrQ0FBVyxLQUFLO0FBQUEsTUFDcEM7QUFBQSxJQUNGO0FBQUEsSUFDQSxLQUFLO0FBQUEsTUFDSCxxQkFBcUI7QUFBQSxRQUNuQixNQUFNO0FBQUEsVUFDSixtQkFBbUI7QUFBQSxVQUNuQixxQkFBcUIsQ0FBQyxlQUFlO0FBQUEsUUFDdkM7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsUUFBUTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sTUFBTSxJQUFJO0FBQUEsTUFDVixNQUFNO0FBQUEsSUFDUjtBQUFBLElBQ0EsT0FBTztBQUFBLE1BQ0wsdUJBQXVCO0FBQUEsTUFDdkIsZUFBZTtBQUFBLFFBQ2IsUUFBUTtBQUFBLFVBQ04sZ0JBQWdCO0FBQUEsVUFDaEIsZ0JBQWdCO0FBQUEsVUFDaEIsZ0JBQWdCO0FBQUEsUUFDbEI7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ1AsTUFBTSxDQUFDLGFBQWE7QUFBQSxNQUNwQixRQUFRO0FBQUEsSUFDVjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
