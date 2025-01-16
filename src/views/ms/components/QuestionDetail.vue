<script setup lang="ts">
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { questions } from "../mockData";

const route = useRoute();
const router = useRouter();

const questionId = computed(() => Number(route.params.questionId));

const question = computed(() =>
  questions.find((q) => q.id === questionId.value)
);
</script>

<template>
  <div class="question-detail">
    <button class="back-button" @click="router.back()">← Back</button>

    <div class="content-card" v-if="question">
      <h1>{{ question.title }}</h1>

      <!-- <div class="section">
        <h2>Question</h2>
        <p>{{ question.content }}</p>
      </div> -->

      <div class="section">
        <h2>Analysis</h2>
        <p>{{ question.analysis }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.question-detail {
  padding: 2rem;
}

.back-button {
  background: none;
  border: none;
  color: #666;
  cursor: pointer;
  padding: 0.5rem 0;
  font-size: 1rem;
  margin-bottom: 1rem;
}

.back-button:hover {
  color: #42b883;
}

.content-card {
  background: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.section {
  margin-top: 2rem;
}

h1 {
  color: #2c3e50;
  margin-bottom: 2rem;
  font-size: 1.8rem;
}

h2 {
  color: #42b883;
  font-size: 1.4rem;
  margin-bottom: 1rem;
}

p {
  color: #2c3e50;
  line-height: 1.6;
}
</style>
