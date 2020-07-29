const path = require("path");
const fs = require("fs");

const pathToData = path.join(
  path.join(__dirname, "../", "data", "products.json")
);

const getProductsFromFile = (callback) =>
  fs.readFile(pathToData, (err, fileContent) => {
    if (err) {
      return callback([]);
    }

    return callback(JSON.parse(fileContent));
  });

export const addProduct = (title) =>
  getProductsFromFile((products) => {
    products.push(title);

    fs.writeFile(pathToData, JSON.stringify(products), (err) =>
      console.log(err)
    );
  });

export const fetchAllProducts = (callback) => getProductsFromFile(callback);
