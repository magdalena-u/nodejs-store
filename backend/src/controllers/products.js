const path = require("path");

import { addProduct } from "../models/product";

export const getAddProduct = (req, res, next) => {
  res.render("admin/add-product");
};

export const postAddProduct = (req, res, next) => {
  addProduct({ title: req.body.title });
  res.redirect("/");
};
