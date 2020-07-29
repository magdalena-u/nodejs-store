const path = require("path");

import { addProduct } from "../models/product";

export const getAddProduct = (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
};

export const postAddProduct = (req, res, next) => {
  addProduct({ title: req.body.title });
  res.redirect("/");
};
