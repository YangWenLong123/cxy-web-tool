export interface Question {
  id: number;
  title: string;
  content: string;
  analysis: string;
  categoryId: number;
}

export interface Category {
  id: number;
  name: string;
  description: string;
}
