import express from "express";
import parser from "body-parser";
import * as path from "path";

import { adminRoutes } from "./routes/admin";
import { storeRoutes } from "./routes/store";
import { mongoConnect } from "./database";

const app = express();

app.set("view engine", "pug");
app.set("views", "src/views");

app.use(parser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(storeRoutes);

app.use((req, res, next) => {
  res.status(404).render("shared/404.pug");
});

mongoConnect(() => {
  app.listen(5000);
});
