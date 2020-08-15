interface IStoreProductDetail {
  title: string;
  price: number;
  imageUrl: string;
}

export interface IStoreProduct {
  product: IStoreProductDetail;
}
