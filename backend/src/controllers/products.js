import {
  addProduct,
  findProductById,
  deleteProduct,
  updateProduct,
} from "../models/product";
import { fetchAllProducts } from "../models/product";

export const getAddProduct = (req, res, next) => {
  res.render("admin/add-product");
};

export const postAddProduct = (req, res, next) => {
  addProduct(req.body);
};

export const getEditProduct = async (req, res, next) => {
  const product = await findProductById(req.params.id);
  res.render("admin/edit-product", { product });
};

export const postEditProduct = (req, res, next) => {
  updateProduct(req.body);
  res.redirect("admin/products-list");
};

export const getProductsList = async (req, res, next) => {
  const products = await fetchAllProducts();
  res.render("admin/products-list", { products });
};

export const getUpdatedProductsList = (req, res, next) => {
  deleteProduct(req.body.id);
  res.redirect("/admin/products-list");
};
