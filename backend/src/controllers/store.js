const productsData = require("./products");

exports.getProducts = (req, res, next) => {
  const products = productsData.products;
  res.render("store", { products: products });
};
