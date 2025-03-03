<!--
 * @Author: along
 * @Description: 
 * @Date: 2025-01-07 13:47:24
 * @LastEditors: along
 * @LastEditTime: 2025-01-15 13:47:39
 * @FilePath: /cxy-web-tool/src/components/login/index.vue
-->
<script lang="ts" setup>
import { ref, defineExpose, reactive } from "vue";
import { signup, login } from "@/api/login";
import { message } from "ant-design-vue";

interface FormState {
  username: string;
  password: string;
  picture: string;
}

const emits = defineEmits(["refresh"]);

const visible = ref(false);
const type = ref<number>(1); // 1:登录 2:注册

const formState = reactive<FormState>({
  username: "",
  password: "",
  picture: "",
});

const preview = () => {
  formState.password = "";
  formState.username = "";
  visible.value = true;
};

const close = () => {
  visible.value = false;
};

const onFinish = (values: any) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

const operate = () => {
  if (type.value === 1) {
    if (!formState.username) return message.warning("请输入用户名");
    if (!formState.password) return message.warning("请输入密码");

    login({
      username: formState.username,
      password: formState.password,
    }).then((res) => {
      console.log("res", res);

      message.success("登录成功");
      close();
      localStorage.setItem("access_token", res?.access_token);
      localStorage.setItem("userInfo", JSON.stringify(res?.userInfo));

      emits("refresh");
      window.location.reload();
    });
  }

  if (type.value === 2) {
    if (!formState.username) return message.warning("请输入用户名");
    if (!formState.password) return message.warning("请输入密码");
    if (formState.password?.length < 6) return message.warning("密码不少于6位");

    signup({
      username: formState.username,
      password: formState.password,
      picture: "0",
    }).then((res) => {
      message.success(res);
    });
  }
};

defineExpose({
  preview,
});
</script>

<template>
  <a-modal
    wrapClassName="Cxylogin"
    :footer="false"
    :visible="visible"
    @cancel="close"
  >
    <div class="loginBox">
      <div class="title">程序员箱子{{ type === 1 ? "登录" : "注册" }}</div>

      <a-form
        :model="formState"
        name="basic"
        :label-col="{ span: 5 }"
        :wrapper-col="{ span: 16 }"
        autocomplete="off"
        @finish="onFinish"
        @finishFailed="onFinishFailed"
      >
        <a-form-item
          label="用户名"
          name="username"
          :rules="[{ required: true, message: '请输入用户名' }]"
        >
          <a-input
            autocomplete="new-password"
            v-model:value="formState.username"
            placeholder="请输入用户名"
          />
        </a-form-item>

        <a-form-item
          label="密码"
          name="password"
          :rules="[{ required: true, message: '请输入密码' }]"
        >
          <a-input-password
            autocomplete="new-password"
            v-model:value="formState.password"
            placeholder="请输入密码"
          />
        </a-form-item>

        <div class="register" @click="type = type === 1 ? 2 : 1">
          {{ type === 1 ? "还没注册,去注册" : "已有账户,去登录" }}
        </div>

        <a-form-item>
          <a-button
            type="primary"
            style="width: 100px; margin-left: 185px"
            @click="operate()"
          >
            {{ type === 1 ? "登录" : "注册" }}
          </a-button>
        </a-form-item>
      </a-form>
    </div>
  </a-modal>
</template>

<style lang="scss">
@import url("./index.scss");
</style>
