//? Ovo su reprezentacije podataka kakvi se ocekuju sa backend-a

export type Timage = {
  source: string;
  alt: string;
};

export type TCategory = {
  id: string;
  name: string;
  parentCategoryId: string; //?moze imati podkategorije ali ne mora
};

export type TProduct = {
  productId: string;
  productName: string;
  category: TCategory;
  price: number;
  discount?: number | undefined;
  images?: Array<Timage>;
  stock?: number | undefined;
  description?: string;
  attributes?: object | undefined;
};
