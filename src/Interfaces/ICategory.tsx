export interface ICategory {
  id: number;
  name: string;
}

export type FormCategory = Pick<ICategory, "id" | "name">;
