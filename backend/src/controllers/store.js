import { fetchAllProducts, findProductById } from "../models/product";
import { addProduct, fetchCartProducts } from "../models/cart";

export const getProductsList = (req, res, next) => {
  fetchAllProducts((products) => {
    res.render("store/products-list", { products: products });
  });
};

export const getProductDetail = (req, res, next) => {
  const productId = req.params.id;
  findProductById(productId, (product) =>
    res.render("store/product-detail", { product: product })
  );
};

export const getStore = (req, res, next) => {
  res.render("store");
};

export const addProductToCart = (req, res, next) => {
  addProduct(req.body.id);
  res.redirect("/cart");
};

export const getCart = (req, res, next) => {
  fetchCartProducts((cartProducts) => {
    res.render("store/cart", { products: cartProducts });
  });
};
