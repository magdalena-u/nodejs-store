import * as path from "path";
import * as fs from "fs";

import { getDataFromFile } from "../helpers/getDataFromFile";

const pathToData = path.join(
  path.join(__dirname, "../", "data", "products.json")
);

export const findProductById = (id, callback) => {
  getDataFromFile(pathToData, (products) => {
    const product = products.find((product) => product.id === id);
    callback(product);
  });
};

const getCurrentProductIndex = (products, id) =>
  products.findIndex((product) => product.id === id);

export const addProduct = (productDetail) =>
  getDataFromFile(pathToData, (products) => {
    if (productDetail.id) {
      const currentProductIndex = getCurrentProductIndex(
        products,
        productDetail.id
      );

      const updateProducts = [...products];
      updateProducts[currentProductIndex] = productDetail;

      fs.writeFile(pathToData, JSON.stringify(updateProducts), (err) =>
        console.log(err)
      );
    } else {
      productDetail.id = Math.random().toString();
      products.push(productDetail);

      fs.writeFile(pathToData, JSON.stringify(products), (err) =>
        console.log(err)
      );
    }
  });

export const deleteProduct = (id) => {
  getDataFromFile(pathToData, (products) => {
    const curentProductIndex = getCurrentProductIndex(products, id);
    const updateProducts = [...products];
    updateProducts.splice(curentProductIndex, 1);

    fs.writeFile(pathToData, JSON.stringify(updateProducts), (err) =>
      console.log(err)
    );
  });
};

export const fetchAllProducts = (callback) =>
  getDataFromFile(pathToData, callback);
