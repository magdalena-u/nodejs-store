import * as path from "path";
import * as fs from "fs";

import { findProductById } from "./product";
import { getDataFromFile } from "../helpers/getDataFromFile";

const pathToData = path.join(path.join(__dirname, "../", "data", "cart.json"));

const isProductInCart = (cartProducts, id) =>
  cartProducts.some((product) => product.id === id);

export const addProduct = (id) => {
  getDataFromFile(pathToData, (products) => {
    let cart = { products: products };

    const addProductToCart = () => {
      findProductById(id, (product) => {
        cart.products = [...cart.products, product];

        fs.writeFile(pathToData, JSON.stringify(cart.products), (err) => {
          console.log(err);
        });
      });
    };

    !isProductInCart(cart.products, id) && addProductToCart();
  });
};

export const fetchCartProducts = (callback) =>
  getDataFromFile(pathToData, callback);
