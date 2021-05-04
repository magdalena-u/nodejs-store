import express from "express";

import * as productsController from "../controllers/products";

const router = express.Router();

router.get("/add-product", productsController.getAddProduct);
router.post("/add-product", productsController.postAddProduct);

router.get("/edit-product/:id", productsController.getEditProduct);
router.post("/edit-product", productsController.postEditProduct);

router.get("/products-list", productsController.getProductsList);

router.delete("/delete-product", productsController.getUpdatedProductsList);

export { router as adminRoutes };
