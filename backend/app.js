const path = require("path");

const express = require("express");

const storeRoutes = require("./routes/store");
const adminRoutes = require("./routes/admin");

const app = express();

app.use(adminRoutes);
app.use(storeRoutes);

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3000);
