const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

import { adminRoutes } from "./routes/admin";
import { storeRoutes } from "./routes/store";

const app = express();

app.set("view engine", "pug");
app.set("views", "src/views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(storeRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3000);
