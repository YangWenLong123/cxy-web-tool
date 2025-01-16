<!--
 * @Author: along
 * @Description: 
 * @Date: 2025-01-10 09:29:59
 * @LastEditors: along
 * @LastEditTime: 2025-01-10 10:20:59
 * @FilePath: /cxy-web-tool/src/views/ms/components/QuestionList.vue
-->
<script setup lang="ts">
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { questions, categories } from "../mockData";

const route = useRoute();
const router = useRouter();

const categoryId = computed(() => Number(route.params.categoryId));

const categoryQuestions = computed(() =>
  questions.filter((q) => q.categoryId === categoryId.value)
);

const category = computed(() =>
  categories.find((c) => c.id === categoryId.value)
);

const navigateToQuestion = (questionId: number) => {
  router.push(`/question/${questionId}`);
};
</script>

<template>
  <div class="questions-container">
    <div class="header">
      <button class="back-button" @click="router.push('/ms')">← Back</button>
      <h1>{{ category?.name }} Questions</h1>
    </div>

    <div class="questions-grid">
      <div
        v-for="question in categoryQuestions"
        :key="question.id"
        class="question-card"
        @click="navigateToQuestion(question.id)"
      >
        <h3>{{ question.title }}</h3>
      </div>
    </div>
  </div>
</template>

<style scoped>
.questions-container {
  padding: 2rem;
}

.header {
  margin-bottom: 2rem;
}

.back-button {
  background: none;
  border: none;
  color: #666;
  cursor: pointer;
  padding: 0.5rem 0;
  font-size: 1rem;
}

.back-button:hover {
  color: #42b883;
}

.questions-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}

.question-card {
  background: white;
  border-radius: 8px;
  padding: 0.6rem;
  width: 100%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}

.question-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

h1 {
  text-align: center;
  color: #2c3e50;
  margin: 1rem 0;
}

h3 {
  color: #2c3e50;
  margin: 0;
}
</style>
