<!--
 * @Author: along
 * @Description: 
 * @Date: 2025-01-23 09:47:33
 * @LastEditors: along
 * @LastEditTime: 2025-02-28 13:59:51
 * @FilePath: /cxy-web-tool/src/components/layout/cxy-header/notice.vue
-->
<script lang="ts" setup>
import { ref, defineExpose } from "vue";

const visible = ref(false);

const preview = () => {
  visible.value = true;
};

const close = () => {
  visible.value = false;
};

defineExpose({
  preview,
});
</script>

<template>
  <a-drawer
    v-model:visible="visible"
    :width="720"
    title="程序员盒子公告"
    placement="right"
    class="noticeDeawer"
  >
    <a-timeline>
      <a-timeline-item>
        <a-card>
          <p class="ant-typography-title">
            欢迎来到程序员盒子！🎉
            这里是专为开发者打造的一站式服务平台，汇聚了海量的优质开发工具、前沿技术资讯、高效在线工具箱以及丰富的社区资源。无论你是初入编程领域的新人，还是经验丰富的技术大牛，都能在这里找到属于你的宝藏。
          </p>

          <p class="ant-typography-title">
            如果你有任何问题或建议，欢迎随时与我联系。再次欢迎你的加入，让我们一起在这个充满挑战与机遇的编程世界中前行！🚀
          </p>

          <img
            src="@/assets/images/WechatIMG133.jpg"
            style="width: 288px; margin-left: 50%; transform: translateX(-50%)"
          />
        </a-card>
      </a-timeline-item>

      <a-timeline-item>
        <a-card>
          <div>2024-01-22 - 程序员盒子V1.0版本正式发布</div>
          <div>1、首页</div>
          <div>2、博客</div>
          <div>3、开发工具</div>
          <div>4、语法速查</div>
          <div>5、摸鱼划水</div>
          <div>6、盒子工具</div>
        </a-card>
      </a-timeline-item>

      <a-timeline-item>
        <a-card>
          <div>2024-01-23 - 新增新年快乐烟花功能</div>
        </a-card>
      </a-timeline-item>

      <a-timeline-item>
        <a-card>
          <div>2024-02-12 - 新增微博热搜、优化博客预览</div>
        </a-card>
      </a-timeline-item>

      <a-timeline-item>
        <a-card>
          <div>
            2024-02-28 -
            上线UV、PV统计功能，摸鱼划水模块调整为热搜新闻，博客默认支持查看全部,无需登录
          </div>
        </a-card>
      </a-timeline-item>

      <a-timeline-item>
        <a-card>
          <div>持续更新中,更多功能敬请期待...</div>
        </a-card>
      </a-timeline-item>
    </a-timeline>
  </a-drawer>
</template>

<style lang="scss">
.noticeDeawer {
  .ant-card {
    width: 100%;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    border: 1px solid #e6ebf5;
    background-color: #ffffff;
    overflow: hidden;
    color: #303133;
    transition: 0.3s;
  }

  .ant-typography-title {
    text-indent: 24px;
  }
}
</style>
