/*
 * @Author: along
 * @Description:
 * @Date: 2025-01-10 10:04:23
 * @LastEditors: along
 * @LastEditTime: 2025-01-10 10:17:37
 * @FilePath: /cxy-web-tool/src/views/ms/mockData.ts
 */
import { Category, Question } from "./types";

export const categories: Category[] = [
  {
    id: 1,
    name: "HTML",
    description: "HTML structure and semantics",
  },
  {
    id: 2,
    name: "CSS",
    description: "CSS and layout questions",
  },

  {
    id: 3,
    name: "JavaScript",
    description: "Core JavaScript concepts and features",
  },

  {
    id: 4,
    name: "JavaScript设计模式",
    description: "Pro JavaScript Design Patterns ",
  },

  {
    id: 5,
    name: "JavaScript数据结构",
    description: "JavaScript Data Structures",
  },

  {
    id: 6,
    name: "Vue.js",
    description: "Vue.js framework related questions",
  },

  {
    id: 7,
    name: "React",
    description: "React.js framework related questions",
  },

  {
    id: 8,
    name: "前端性能优化",
    description: "Front end performance optimization",
  },

  {
    id: 9,
    name: "前端工程化",
    description: "Front end engineering questions",
  },

  {
    id: 10,
    name: "NestJS",
    description: "NestJS questions",
  },
];

export const questions: Question[] = [
  {
    id: 1,
    categoryId: 1,
    title: "1、HTML 的 src 和 href 属性有什么区别？",
    content: "Explain the concept of closure in JavaScript and how it works.",
    analysis:
      "A closure is the combination of a function and the lexical environment within which that function was declared. This environment consists of any local variables that were in-scope at the time the closure was created. Closures allow a function to access variables in its outer scope even after the outer function has returned.",
  },

  {
    id: 1,
    categoryId: 1,
    title: "2、什么是 HTML 语义化？",
    content: "Explain the concept of closure in JavaScript and how it works.",
    analysis:
      "A closure is the combination of a function and the lexical environment within which that function was declared. This environment consists of any local variables that were in-scope at the time the closure was created. Closures allow a function to access variables in its outer scope even after the outer function has returned.",
  },
  {
    id: 2,
    categoryId: 2,
    title: "Explain Vue.js Reactivity",
    content: "How does Vue.js reactivity system work?",
    analysis:
      "Vue.js uses a reactive system based on ES6 Proxy (in Vue 3) to track dependencies and trigger updates. When you modify reactive data, Vue automatically updates any part of the UI that depends on that data.",
  },
  {
    id: 3,
    categoryId: 3,
    title: "Flexbox vs Grid",
    content: "What are the main differences between Flexbox and Grid?",
    analysis:
      "Flexbox is designed for one-dimensional layouts (either rows OR columns), while Grid is designed for two-dimensional layouts (rows AND columns). Flexbox works from the content out, while Grid works from the layout in.",
  },
];
