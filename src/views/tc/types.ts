/*
 * @Author: along
 * @Description:
 * @Date: 2025-01-13 11:00:01
 * @LastEditors: along
 * @LastEditTime: 2025-01-13 11:00:12
 * @FilePath: /cxy-web-tool/src/views/tc/types.ts
 */
export interface ContentItem {
  id: number;
  title: string;
  description: string;
  url: string;
  category: string;
  timestamp: string;
}

export type Category = {
  id: string;
  name: string;
  icon: string;
};
