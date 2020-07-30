const path = require("path");

import { addProduct } from "../models/product";

export const getAddProduct = (req, res, next) => {
  res.render("admin/add-product");
};

export const postAddProduct = (req, res, next) => {
  addProduct({ title: req.body.title });
  res.redirect("/");
};

export const getEditProduct = (req, res, next) => {
  res.render("admin/edit-product");
};

export const getProductsList = (req, res, next) => {
  res.render("admin/products-list");
};
