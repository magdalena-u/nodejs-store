const express = require("express");

import * as productsController from "../controllers/products";

const router = express.Router();

router.get("/add-product", productsController.getAddProduct);
router.post("/add-product", productsController.postAddProduct);
router.get("/products-list", productsController.getProductsList);
router.get("/edit-product", productsController.getEditProduct);

export { router as adminRoutes };
