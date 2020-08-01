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

export const addProduct = (productDetail) =>
  getDataFromFile(pathToData, (products) => {
    productDetail.id = Math.random().toString();
    products.push(productDetail);

    fs.writeFile(pathToData, JSON.stringify(products), (err) =>
      console.log(err)
    );
  });

export const fetchAllProducts = (callback) =>
  getDataFromFile(pathToData, callback);
