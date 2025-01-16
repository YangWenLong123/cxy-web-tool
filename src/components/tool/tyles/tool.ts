export interface Tool {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  icon?: string;
}

export type Category = {
  id: string;
  name: string;
  description: string;
};
