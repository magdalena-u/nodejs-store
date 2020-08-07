import { fetchAllProducts, findProductById } from "../models/product";
import { addProduct, fetchCartProducts, deleteProduct } from "../models/cart";

export const getProductsList = async (req, res, next) => {
  const products = await fetchAllProducts();
  res.render("store/products-list", { products });
};

export const getProductDetail = async (req, res, next) => {
  const productId = req.params.id;
  const product = await findProductById(productId);
  res.render("store/product-detail", { product });
};

export const getStore = (req, res, next) => {
  res.render("store");
};

export const addProductToCart = (req, res, next) => {
  addProduct(req.body.id);
  res.redirect("/cart");
};

export const deleteProductFromCart = (req, res, next) => {
  deleteProduct(req.body.id);
  res.redirect("/cart");
};

export const getCart = (req, res, next) => {
  fetchCartProducts((cartProducts) => {
    res.render("store/cart", { products: cartProducts });
  });
};
