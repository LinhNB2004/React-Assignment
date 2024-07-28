export interface IProduct {
  id: number;

  title: string;
  price: number;
  image: string;
  categoryId: number;
}

export type FormData = Pick<
  IProduct,
  "title" | "price" | "image" | "categoryId"
>;