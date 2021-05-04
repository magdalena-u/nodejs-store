import mongoDB from "mongodb";

import { getDb } from "../database";

export const findProductById = (id) => {
  const db = getDb();
  return db
    .collection("products")
    .find({ _id: new mongoDB.ObjectId(id) })
    .next()
    .then((product) => product)
    .catch((err) => console.log(err));
};

export const addProduct = (productDetails) => {
  const db = getDb();

  return db
    .collection("products")
    .insertOne(productDetails)
    .then((result) => result)
    .catch((err) => console.log(err));
};

export const updateProduct = (productDetails) => {
  const { id, title, price, description } = productDetails;

  const db = getDb();
  return db.collection("products").updateOne(
    { _id: new mongoDB.ObjectId(id) },
    {
      $set: { title, price, description },
      $currentDate: { lastModified: true },
    }
  );
};

export const deleteProduct = (id) => {
  const db = getDb();
  return db
    .collection("products")
    .deleteOne({ _id: new mongoDB.ObjectId(id) })
    .then((result) => result)
    .catch((err) => console.log(err));
};

export const fetchAllProducts = () => {
  const db = getDb();
  return db
    .collection("products")
    .find()
    .toArray()
    .then((products) => products)
    .catch((err) => console.log(err));
};
