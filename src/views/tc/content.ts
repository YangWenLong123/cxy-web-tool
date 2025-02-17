/*
 * @Author: along
 * @Description:
 * @Date: 2025-01-13 11:00:36
 * @LastEditors: along
 * @LastEditTime: 2025-02-17 14:06:49
 * @FilePath: /cxy-web-tool/src/views/tc/content.ts
 */
import { ContentItem, Category } from "./types";

export const categories: Category[] = [
  { id: "news", name: "新闻", icon: "📰" },
  { id: "tech", name: "技术资讯", icon: "💻" },
  { id: "games", name: "在线游戏", icon: "🎮" },
  { id: "music", name: "音乐", icon: "🎵" },
  { id: "novels", name: "小说", icon: "📚" },
  { id: "movies", name: "影视", icon: "🎬" },
  { id: "food", name: "美食", icon: "🍜" },
];

export const contentData: ContentItem[] = [
  {
    id: 1,
    title: "五子棋游戏",
    description: "在线五子棋游戏",
    category: "games",
    timestamp: "2024-01-17",
    url: "http://43.143.65.230/01/index.html",
  },
];
