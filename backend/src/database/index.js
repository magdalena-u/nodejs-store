import mongoDB from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const mongoUser = process.env.MONGO_USER;
const mongoUserPassword = process.env.MONGO_USER_PASSWORD;

const dbUrl = `mongodb+srv://${mongoUser}:${mongoUserPassword}@cluster0.yabo5.mongodb.net/<dbname>?retryWrites=true&w=majority`;

let _db;

export const mongoConnect = (callback) => {
  mongoDB.MongoClient.connect(dbUrl, { useUnifiedTopology: true })
    .then((client) => {
      console.log("connected");
      _db = client.db();
      callback();
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

export const getDb = () => {
  if (_db) {
    return _db;
  }
  throw "Not database found";
};
