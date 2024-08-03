export interface IProduct {
  id: number;

  title: string;
  price: number;
  image: string;
  categoryId: number;
  motangan: string;
  motadai: string;
}

export type FormData = Pick<
  IProduct,
  "title" | "price" | "image" | "categoryId" | "motangan" | "motadai"
>;
