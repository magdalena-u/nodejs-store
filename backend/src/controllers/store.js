const productsData = require("./products");

export const getProducts = (req, res, next) => {
  const products = productsData.products;
  res.render("store", { products: products });
};
