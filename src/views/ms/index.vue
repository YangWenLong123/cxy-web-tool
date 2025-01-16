<!--
 * @Author: along
 * @Description: 
 * @Date: 2024-11-13 14:24:21
 * @LastEditors: along
 * @LastEditTime: 2025-01-14 13:09:25
 * @FilePath: /cxy-web-tool/src/views/ms/index.vue
-->
<script setup lang="ts">
import { categories } from "./mockData";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const navigateToCategory = (categoryId: number) => {
  router.push(`/category/${categoryId}`);
};
</script>

<template>
  <div class="categories">
    <div class="no-results-icon">⌛️</div>
    <h3>面试题功能正在开发中</h3>
    <p>敬请期待</p>
    <!-- <h1>前端面试题</h1> -->
    <!-- <div class="category-grid">
      <div
        v-for="category in categories"
        :key="category.id"
        class="category-card"
        @click="navigateToCategory(category.id)"
      >
        <h2>{{ category.name }}</h2>
        <p>{{ category.description }}</p>
      </div>
    </div> -->
  </div>
</template>

<style scoped>
.categories {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.category-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-top: 2rem;
}

.category-card {
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  width: 345px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}

.category-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

h1 {
  text-align: center;
  margin-bottom: 2rem;
  color: #2c3e50;
}

h2 {
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

p {
  color: #666;
  font-size: 0.9rem;
}
</style>
