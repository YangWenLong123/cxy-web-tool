<template>
  <div class="navbarComponents">
    <img src="@/assets/images/logo.png">
  </div>
</template>

<script lang="ts" setup>
  import { reactive } from "vue";

  const state = reactive({
    utils: [],
  });
</script>

<style lang="scss" scoped>
  @import "./index.scss";
</style>