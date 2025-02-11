<script setup lang="ts">
import { Tool } from "./types/tool";

defineProps<{
  tool: Tool;
}>();
</script>

<template>
  <div class="tool-card">
    <div class="tool-content">
      <div style="display: flex; align-items: center">
        <img v-if="tool.logo" :src="tool.logo" alt="" class="tool-icon" />
        <div v-if="tool.icon" class="tool-icon">
          {{ tool.icon }}
        </div>
        <h3>{{ tool.name }}</h3>
      </div>
      <p class="description">{{ tool.description }}</p>
    </div>
    <div class="card-footer">
      <a
        :href="tool.url"
        target="_blank"
        rel="noopener noreferrer"
        class="visit-button"
      >
        <span>访问</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path
            d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
          ></path>
          <polyline points="15 3 21 3 21 9"></polyline>
          <line x1="10" y1="14" x2="21" y2="3"></line>
        </svg>
      </a>
    </div>
  </div>
</template>

<style scoped>
.tool-card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.tool-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.tool-content {
  padding: 1.5rem;
  flex-grow: 1;
}

.tool-icon {
  font-size: 2rem;
  background: #f8fafc;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  margin-right: 16px;
}

h3 {
  margin: 0;
  color: #1e293b;
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.4;
}

p {
  color: #64748b;
  font-size: 0.95rem;
  line-height: 1.5;
  margin: 0.75rem 0 0;
}

.card-footer {
  padding: 1rem 1.5rem;
  background: #f8fafc;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
}

.visit-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  padding: 0.75rem;
  background: #42b883;
  color: white;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.2s ease;
}

.visit-button:hover {
  background: #3aa876;
}

.visit-button svg {
  width: 16px;
  height: 16px;
}

.description {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
</style>
