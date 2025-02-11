<script setup lang="ts">
import { ref, computed } from "vue";
import ToolCard from "@/components/tool/ToolCard.vue";
import ToolboxHeader from "@/components/tool/ToolboxHeader.vue";
import { tools, categories } from "./tools";

const searchQuery = ref("");
const selectedCategory = ref("all");

const filteredTools = computed(() => {
  const query = searchQuery.value.toLowerCase().trim();
  return tools.filter((tool) => {
    const matchesSearch =
      !query ||
      tool.name.toLowerCase().includes(query) ||
      tool.description.toLowerCase().includes(query);
    const matchesCategory =
      selectedCategory.value === "all" ||
      tool.category === selectedCategory.value;
    return matchesSearch && matchesCategory;
  });
});

const handleSearch = (query: string) => {
  searchQuery.value = query;
  if (query) {
    selectedCategory.value = "all";
  }
};

const getCategoryCount = (id) => {
  return tools.filter((tool) => tool.category === id).length;
};
</script>

<template>
  <div class="app-container">
    <div class="gradient-bg"></div>
    <div class="container">
      <ToolboxHeader @search="handleSearch" />

      <div class="categories">
        <button
          :class="{ active: selectedCategory === 'all' }"
          @click="selectedCategory = 'all'"
        >
          全部{{ `(${tools.length})` }}
        </button>
        <button
          v-for="category in categories"
          :key="category.id"
          :class="{ active: selectedCategory === category.id }"
          @click="selectedCategory = category.id"
        >
          {{ category.name }}{{ `(${getCategoryCount(category.id)})` }}
        </button>
      </div>

      <div v-if="filteredTools.length === 0" class="no-results">
        <div class="no-results-icon">🔍</div>
        <h3>未找到匹配的工具</h3>
        <p>试试其他关键词或者浏览其他分类</p>
      </div>

      <div v-else class="tools-grid">
        <ToolCard v-for="tool in filteredTools" :key="tool.id" :tool="tool" />
      </div>
    </div>
  </div>
</template>

<style>
.app-container {
  background: #f8fafc;
  position: relative;
  overflow: hidden;
  overflow-y: auto;
}

.gradient-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 400px;
  background: linear-gradient(135deg, #42b883 0%, #35495e 100%);
  transform: skewY(-6deg);
  transform-origin: top left;
}

.container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 1rem;
  position: relative;
  z-index: 1;
}

.categories {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
  justify-content: center;
}

.categories button {
  background: white;
  border: 1px solid #e2e8f0;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  color: #64748b;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.categories button:hover {
  background: #f1f5f9;
  border-color: #cbd5e1;
}

.categories button.active {
  background: #42b883;
  border-color: #42b883;
  color: white;
}

.tools-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  padding-bottom: 2rem;
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

@media (max-width: 768px) {
  .tools-grid {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1rem;
  }

  .container {
    padding: 0 0.5rem;
  }
}
</style>
