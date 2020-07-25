const path = require("path");

export const products = [];

export const getAddProduct = (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
};

export const postAddProduct = (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect("/");
};
