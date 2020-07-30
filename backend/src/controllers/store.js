import { fetchAllProducts } from "../models/product";

export const getProductsList = (req, res, next) => {
  fetchAllProducts((products) => {
    res.render("store/products-list", { products: products });
  });
};

export const getProductDetail = (req, res, next) => {
  res.render("store/product-detail");
};

export const getStore = (req, res, next) => {
  res.render("store");
};
