<!--
 * @Author: along
 * @Description: 程序员盒子全局弹窗
 * @Date: 2023-05-30 21:31:24
 * @LastEditors: along
 * @LastEditTime: 2023-06-16 16:59:09
 * @FilePath: /cxy-web-tool/src/components/popup/index.vue
-->
<template>
  <div class="cxyPopup">
    <template v-if="state.popup_type === '1'">
      <div class="close">
        <i
          v-if="state.popupList.length === 1"
          class="iconfont icon-close-line"
          @click="hidePopup()"
        />
        <i
          v-if="state.popupList.length > 1"
          class="iconfont icon-xuanzeqixiayige"
          @click="removePopupImages()"
        />
      </div>
      <template v-if="state.popupList.length">
        <div class="popupBox">
          <div
            class="popupTitle"
            v-if="state.popupList[state.popupIndex]['title']"
          >
            {{  state.popupList[state.popupIndex]['title'] }}
          </div>
          <a-image
            :preview="false"
            :width="400"
            :src="state.popupList[state.popupIndex]['url']"
            class="cxyPopupImages"
          />
        </div>
      </template>
    </template>
  </div>
</template>

<script lang='ts' setup>
  import { onMounted, reactive } from "vue";
  import { usePopupStore } from "@/store/modules/popup";
  import { storeToRefs } from "pinia";

  const store = usePopupStore();

  const { popup_type, popup_mode } = storeToRefs(store);

  const state = reactive({
    popup_type,
    popup_mode: popup_mode,
    popup: {
      WeChat: [
        {
          title: "客服微信",
          url: "http://cdn.alongweb.top/images/weixin.jpeg",
        },
      ],
      Side: [
        {
          title: "",
          url: "http://cdn.alongweb.top/images/file.png",
        },
      ],
    },
    popupList: [],
    popupIndex: 0,
  });

  onMounted(() => {
    // 处理弹窗队列, 优先级 : popup_mode > popup
    const popup = { ...state.popup };

    if (state.popup_type === "1") {
      state.popupIndex = 0;
      for (let key in popup) {
        if (Array.from(state.popup_mode).includes(key as never)) {
          state.popupList = state.popupList.concat(Array.from(popup[key]));
        }
      }
      console.log("popupList", state.popupList);
    }

    if (state.popup_type === "2") {
      // TODO
    }
  });

  // 下一个，实际上是移除当前图片
  const removePopupImages = () => {
    state.popupList.splice(0, 1);
  };

  // 关闭弹窗
  const hidePopup = () => {
    store.setPopup({
      showPopup: false,
      popup_type: "",
      popup_mode: [],
    });
  };
</script>

<style lang="scss">
  @import "./index.scss";
</style>
