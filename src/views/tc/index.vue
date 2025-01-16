<script setup lang="ts">
import { ref, computed } from "vue";
import { contentData, categories } from "./content";
import type { ContentItem, Category } from "./types";

const searchQuery = ref("");
const selectedCategory = ref("");

const filteredContent = computed(() => {
  let filtered = contentData;

  if (searchQuery.value) {
    filtered = filtered.filter(
      (item) =>
        item.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  }

  if (selectedCategory.value) {
    filtered = filtered.filter(
      (item) => item.category === selectedCategory.value
    );
  }

  return filtered;
});

const selectCategory = (categoryId: string) => {
  selectedCategory.value =
    selectedCategory.value === categoryId ? "" : categoryId;
};
</script>

<template>
  <div class="appTc">
    <header class="headers">
      <div class="container">
        <!-- <h1>摸鱼划水娱乐站</h1> -->
        <div class="search-container">
          <a-input
            type="text"
            v-model:value="searchQuery"
            placeholder="搜索内容..."
            class="search-input"
            size="large"
          />
        </div>
        <div class="categories">
          <div
            v-for="category in categories"
            :key="category.id"
            class="category-item"
            :class="{ actives: selectedCategory === category.id }"
            @click="selectCategory(category.id)"
          >
            {{ category.icon }} {{ category.name }}
          </div>
        </div>
      </div>
    </header>

    <!-- <main class="container">
      <div class="content-grid">
        <div
          v-for="item in filteredContent"
          :key="item.id"
          class="content-card"
        >
          <h3 class="content-titles">{{ item.title }}</h3>
          <p class="content-description">{{ item.description }}</p>
          <div class="content-meta">
            <span>{{
              categories.find((c) => c.id === item.category)?.name
            }}</span>
            <span>{{ item.timestamp }}</span>
          </div>
        </div>
      </div>
    </main> -->
  </div>
</template>

<style lang="scss">
:root {
  --primary-color: #6a8a82;
  --secondary-color: #ffffff;
  --text-color: #333333;
  --hover-color: #35665a;

  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;

  color: var(--text-color);
  background-color: var(--secondary-color);
}

body {
  margin: 0;
  min-width: 320px;
  min-height: 100vh;
}

#app {
  width: 100%;
  margin: 0 auto;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.headers {
  background-color: var(--primary-color);
  color: var(--secondary-color);
  padding: 1rem 0;
}

.search-container {
  max-width: 600px;
  margin: 1rem auto;
}

.search-input {
  width: 100%;
  padding: 0.8rem;
  border: 2px solid var(--primary-color);
  border-radius: 8px;
  font-size: 1rem;
}

.categories {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin: 1rem 0;
}

.category-item {
  background-color: var(--primary-color);
  color: var(--secondary-color);
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.category-item:hover {
  background-color: var(--hover-color);
}

.content-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  padding: 1rem 0;
}

.content-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  transition: transform 0.3s;
}

.content-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.content-titles {
  color: var(--primary-color);

  margin: 0 0 0.5rem 0;
}

.content-description {
  color: #666;
  margin: 0;
}

.content-meta {
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  color: #888;
  font-size: 0.9rem;
}

.actives {
  background-color: var(--hover-color);
}
</style>
