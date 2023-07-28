import router from "@/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

NProgress.configure({
  easing: "ease", //调整动画设置和速度ms
  speed: 500,
  trickle: true, //关闭进度条步进，设置 trickle 为 false。
  showSpinner: false, //禁用进度环
  trickleRate: 0.02, //每次步进增长多少
  trickleSpeed: 200, //步进间隔ms
  minimum: 0.1, //来修改最小百分比
});

router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});

router.afterEach(() => {
  NProgress.done();
});
