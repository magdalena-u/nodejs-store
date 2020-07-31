import { fetchAllProducts, findProductById } from "../models/product";

export const getProductsList = (req, res, next) => {
  fetchAllProducts((products) => {
    res.render("store/products-list", { products: products });
  });
};

export const getProductDetail = (req, res, next) => {
  const productId= req.params.id
  findProductById(productId, (product)=> res.render("store/product-detail", {product: product}))
};

export const getStore = (req, res, next) => {
  res.render("store");
};
