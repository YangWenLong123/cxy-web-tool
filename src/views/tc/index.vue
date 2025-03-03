<script setup lang="ts">
import { ref, computed } from "vue";
import { contentData, categories } from "./content";
import type { ContentItem, Category } from "./types";
import News from "./news.vue";
import News2 from "./news2.vue";

const searchQuery = ref("");
const selectedCategory = ref("news");

const visible = ref<boolean>(false);
const title = ref<string>("");
const url = ref<string>("");

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

const previewContent = (item: ContentItem) => {
  console.log("Previewing content:", item);
  title.value = item.title;
  url.value = item.url;
  visible.value = true;
};
</script>

<template>
  <div class="appTc">
    <!-- <header class="headers">
      <div class="container">
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
    </header> -->

    <main>
      <!-- <template v-if="['news'].includes(selectedCategory)"> -->
      <News2 />
      <!-- </template> -->

      <!-- <template v-else-if="['tech'].includes(selectedCategory)"> -->
      <News />
      <!-- </template> -->
      <!-- <template v-else>
        <div class="container">
          <div class="content-grid" v-if="filteredContent.length">
            <div
              v-for="item in filteredContent"
              :key="item.id"
              class="content-card"
              @click="previewContent(item)"
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

          <div v-if="filteredContent.length === 0" class="no-results">
            <div class="no-results-icon">🔍</div>
            <h3>未找到匹配的数据</h3>
            <p>试试其他关键词或者浏览其他分类</p>
          </div>
        </div>
      </template> -->
    </main>
  </div>

  <a-drawer
    v-model:visible="visible"
    class="custom-class"
    :width="'100%'"
    style="color: red"
    :title="title"
    :keyboard="false"
    :destroyOnClose="true"
    :maskClosable="false"
    placement="right"
  >
    <iframe
      v-if="url"
      :src="url"
      frameborder="0"
      width="100%"
      height="99%"
    ></iframe>
  </a-drawer>
</template>

<style lang="scss">
.appTc {
  height: 100vh;
  overflow-x: hidden;
}
.custom-class {
  .ant-drawer-body {
    padding: 0;
  }
}
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
  justify-content: center;
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
  cursor: pointer;
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

.no-results {
  text-align: center;
  padding: 4rem 0;
  color: #64748b;
}

.no-results-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.no-results h3 {
  font-size: 1.5rem;
  color: #1e293b;
  margin: 0 0 0.5rem;
}

.no-results p {
  font-size: 1rem;
  margin: 0;
}
</style>
