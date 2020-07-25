const path = require("path");

const products = [];

exports.getAddProduct = (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
};

exports.postAddProduct = (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect("/");
};

exports.products = products;
