import { ContentItem, Category } from "./types";

export const categories: Category[] = [
  { id: "tech", name: "技术资讯", icon: "💻" },
  { id: "games", name: "在线游戏", icon: "🎮" },
  { id: "music", name: "音乐", icon: "🎵" },
  { id: "novels", name: "小说", icon: "📚" },
  { id: "news", name: "新闻", icon: "📰" },
  { id: "movies", name: "影视", icon: "🎬" },
  { id: "food", name: "美食", icon: "🍜" },
];

export const contentData: ContentItem[] = [
  // 技术资讯
  {
    id: 1,
    title: "Vue 3.4 发布，带来更好的性能优化",
    description: "最新版本Vue带来了更多性能提升...",
    url: "#",
    category: "tech",
    timestamp: "2024-03-20",
  },
  {
    id: 2,
    title: "TypeScript 5.5 新特性解析",
    description: "探索TypeScript最新版本的新功能...",
    url: "#",
    category: "tech",
    timestamp: "2024-03-19",
  },
  // 在线游戏
  {
    id: 21,
    title: "2048",
    description: "经典数字益智游戏",
    url: "#",
    category: "games",
    timestamp: "2024-03-20",
  },
  {
    id: 22,
    title: "贪吃蛇",
    description: "永不过时的经典游戏",
    url: "#",
    category: "games",
    timestamp: "2024-03-19",
  },
  // 音乐
  {
    id: 41,
    title: "周杰伦 - 最伟大的作品",
    description: "周杰伦最新专辑",
    url: "#",
    category: "music",
    timestamp: "2024-03-20",
  },
  {
    id: 42,
    title: "陈奕迅 - 我们",
    description: "暖心情歌",
    url: "#",
    category: "music",
    timestamp: "2024-03-19",
  },
  // 小说
  {
    id: 61,
    title: "三体",
    description: "刘慈欣的科幻巨作",
    url: "#",
    category: "novels",
    timestamp: "2024-03-20",
  },
  {
    id: 62,
    title: "活着",
    description: "余华经典作品",
    url: "#",
    category: "novels",
    timestamp: "2024-03-19",
  },
  // 新闻
  {
    id: 81,
    title: "科技创新助力经济发展",
    description: "最新科技发展报道",
    url: "#",
    category: "news",
    timestamp: "2024-03-20",
  },
  {
    id: 82,
    title: "环保行动在全球展开",
    description: "全球环保新闻",
    url: "#",
    category: "news",
    timestamp: "2024-03-19",
  },
  // 影视
  {
    id: 101,
    title: "流浪地球3",
    description: "科幻电影新作",
    url: "#",
    category: "movies",
    timestamp: "2024-03-20",
  },
  {
    id: 102,
    title: "满江红",
    description: "悬疑剧情片",
    url: "#",
    category: "movies",
    timestamp: "2024-03-19",
  },
  // 美食
  {
    id: 121,
    title: "川菜红烧牛肉的做法",
    description: "经典川菜教程",
    url: "#",
    category: "food",
    timestamp: "2024-03-20",
  },
  {
    id: 122,
    title: "粤式早茶点心推荐",
    description: "广东早茶文化",
    url: "#",
    category: "food",
    timestamp: "2024-03-19",
  },
];
