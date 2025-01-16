<script setup lang="ts">
import { ref, watch } from "vue";

const searchQuery = ref("");
const emit = defineEmits<{
  (e: "search", query: string): void;
}>();

// 使用watch来处理搜索，添加防抖
let debounceTimer: number | null = null;
watch(searchQuery, (newValue) => {
  if (debounceTimer) {
    clearTimeout(debounceTimer);
  }
  debounceTimer = setTimeout(() => {
    emit("search", newValue);
  }, 300) as unknown as number;
});

// 清理函数
const clearSearch = () => {
  searchQuery.value = "";
  emit("search", "");
};
</script>

<template>
  <header class="toolbox-header">
    <!-- <h1>程序员工具箱</h1> -->
    <p class="subtitle">收集优质开发工具，提升开发效率</p>
    <div class="search-box">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="search-icon"
      >
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
      <a-input
        allowClear
        v-model:value="searchQuery"
        type="text"
        size="large"
        placeholder="搜索工具..."
      >
        <template #prefix> <i class="iconfont icon-sousuo3"></i> </template>
      </a-input>
      <button
        v-if="searchQuery"
        class="clear-button"
        @click="clearSearch"
        title="清除搜索"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>
  </header>
</template>

<style scoped>
.toolbox-header {
  text-align: center;
  padding: 3rem 0;
  color: white;
}

h1 {
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0;
  letter-spacing: -0.5px;
}

.subtitle {
  font-size: 1.125rem;
  margin: 1rem 0 2rem;
  opacity: 0.9;
}

.search-box {
  position: relative;
  max-width: 600px;
  margin: 0 auto;
}

.search-icon {
  position: absolute;
  left: 1.25rem;
  top: 50%;
  transform: translateY(-50%);
  color: #64748b;
  pointer-events: none;
}

.clear-button {
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  padding: 0.25rem;
  cursor: pointer;
  color: #64748b;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}

.clear-button:hover {
  background: rgba(0, 0, 0, 0.05);
  color: #1e293b;
}

input {
  width: 100%;
  padding: 1rem 3rem;
  border: none;
  border-radius: 16px;
  font-size: 1rem;
  background: white;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  transition: all 0.2s ease;
}

input:focus {
  outline: none;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

@media (max-width: 768px) {
  .toolbox-header {
    padding: 2rem 0;
  }

  h1 {
    font-size: 2rem;
  }

  .subtitle {
    font-size: 1rem;
    margin: 0.75rem 0 1.5rem;
  }

  input {
    padding: 0.875rem 3rem;
    font-size: 0.95rem;
  }
}
</style>
