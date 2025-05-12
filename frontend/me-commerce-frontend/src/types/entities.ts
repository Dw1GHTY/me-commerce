export type Timage = {
  source: string;
  alt: string;
};

export type TCategory = {
  name: string;
  subcategories?: Array<TCategory>; //?moze imati podkategorije ali ne mora
  image?: Timage;
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
