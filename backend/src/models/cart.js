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

export const deleteProduct = (id) => {
  getDataFromFile(pathToData, (products) => {
    const currentProductIndex = products.findIndex(
      (product) => product.id === id
    );

    const updateProducts = [...products];
    updateProducts.splice(currentProductIndex, 1);

    fs.writeFile(pathToData, JSON.stringify(updateProducts), (err) =>
      console.log(err)
    );
  });
};

export const fetchCartProducts = (callback) =>
  getDataFromFile(pathToData, callback);
