const path = require("path");

import { addProduct, findProductById } from "../models/product";
import { fetchAllProducts } from "../models/product";

export const getAddProduct = (req, res, next) => {
  res.render("admin/edit-product");
};

export const postAddProduct = (req, res, next) => {
  addProduct(req.body);
  res.redirect("/");
};

export const getEditProduct = (req, res, next) => {
  findProductById(req.params.id, (product) =>
    res.render("admin/edit-product", { product: product })
  );
};

export const getProductsList = (req, res, next) => {
  fetchAllProducts((products) => {
    res.render("admin/products-list", { products: products });
  });
};
