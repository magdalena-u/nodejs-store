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

export const findProductById = (id, callback) => {
  getProductsFromFile((products) => {
    const product = products.find((product) => product.id === id)
    callback(product)
  }
  );
};

export const addProduct = (productDetail) =>
  getProductsFromFile((products) => {
    productDetail.id = Math.random().toString();
    products.push(productDetail);

    fs.writeFile(pathToData, JSON.stringify(products), (err) =>
      console.log(err)
    );
  });

export const fetchAllProducts = (callback) => getProductsFromFile(callback);
