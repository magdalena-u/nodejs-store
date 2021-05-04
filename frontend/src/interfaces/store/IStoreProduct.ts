export interface IStoreProductDetail {
  title: string;
  price: number;
  imageUrl: string;
  description?: string;
  _id: string;
}

export interface IStoreProduct {
  product: IStoreProductDetail;
  isAdmin: boolean;
}
