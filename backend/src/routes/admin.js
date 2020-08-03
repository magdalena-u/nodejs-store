const express = require("express");

import * as productsController from "../controllers/products";

const router = express.Router();

router.get("/edit-product", productsController.getAddProduct);
router.post("/edit-product", productsController.postAddProduct);
router.get("/products-list", productsController.getProductsList);
router.get("/edit-product/:id", productsController.getEditProduct);

export { router as adminRoutes };
