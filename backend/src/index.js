import express from "express";
import parser from "body-parser";
import * as path from "path";
import cors from "cors";
import { MongoClient } from "mongodb";

import { storeAdmin } from "./config/database.config";
import { adminRoutes } from "./routes/admin";
import { storeRoutes } from "./routes/store";
import { mongoConnect } from "./database";

const app = express();

// app.set("view engine", "pug");
// app.set("views", "src/views");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(parser.json());
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(storeRoutes);

app.use((req, res, next) => {
  res.status(404).render("shared/404.pug");
});

mongoConnect(async () => {
  const uri = storeAdmin;
  const client = new MongoClient(uri);

  try {
    await client.connect();
  } catch (e) {
    console.log(e);
  }
  app.listen(5000);
});
