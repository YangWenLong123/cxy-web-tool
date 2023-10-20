<!--
 * @Author: along
 * @Description: 
 * @Date: 2023-10-18 15:59:55
 * @LastEditors: along
 * @LastEditTime: 2023-10-19 09:50:00
 * @FilePath: /cxy-web-tool/src/views/swagger/api/index.vue
-->
<template>
  <div class="CxySwaggerApi">
    <div class="nav" v-for="(record, index) in apiList" :key="index">
      <div class="nav_label">{{ record.label }}</div>

      <div class="wrap">
        <div class="items" v-for="(row, i) in record.list" :key="i">
          <div class="head">
            <div class="title">{{ row.title }}</div>
            <div class="desc">{{ row.desc }}</div>
          </div>
          <div class="foot">
            <div class="methods">{{ row.methods }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const apiList = ref([
  {
    label: "自研",
    list: [
      {
        title: "获取图片",
        desc: "从云服务器中获取图片地址，方便快速使用",
        api: "http://abc.alongweb.top:3000/upload/get",
        methods: "get",
      },
      {
        title: "上传图片",
        desc: "上传本地资源到服务器中对象COS存储中,方便管理、使用",
        api: "http://abc.alongweb.top:3000/upload/single",
        methods: "post",
      },
    ],
  },
  {
    label: "非自研",
    list: [
      {
        title: "todos",
        desc: "json资源数据-todos",
        api: "https://jsonplaceholder.typicode.com/todos",
        methods: "get",
      },
      {
        title: "resources",
        desc: "json资源数据-resources",
        api: "https://jsonplaceholder.typicode.com/resources",
        methods: "get",
      },
      {
        title: "albums",
        desc: "json资源数据-albums",
        api: "https://jsonplaceholder.typicode.com/albums",
        methods: "get",
      },
      {
        title: "posts",
        desc: "json资源数据-posts",
        api: "https://jsonplaceholder.typicode.com/posts",
        methods: "get",
      },
      {
        title: "comments",
        desc: "json资源数据-comments",
        api: "https://jsonplaceholder.typicode.com/comments",
        methods: "get",
      },
      {
        title: "photos",
        desc: "json资源数据-photos",
        api: "https://jsonplaceholder.typicode.com/photos",
        methods: "get",
      },
    ],
  },
]);
</script>

<style scoped>
@import url("./index.scss");
</style>
