// app/templates/template.interface.ts
export interface Template {
  id: number;
  name: string;
  category: string;
  description: string;
  popularity: number;
  image: string;
}

export type TemplateCategory = {
  id: string;
  name: string;
};