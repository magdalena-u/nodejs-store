import { fetchAllProducts } from "../models/product";

export const getProducts = (req, res, next) => {
  fetchAllProducts((products) => {
    res.render("store", { products: products });
  });
};
