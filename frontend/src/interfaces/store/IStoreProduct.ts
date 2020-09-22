export interface IStoreProductDetail {
  title: string;
  price: number;
  imageUrl: string;
  description?: string
}

export interface IStoreProduct {
  product: IStoreProductDetail;
}
