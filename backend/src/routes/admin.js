import express from "express";

import * as productsController from "../controllers/products";

const router = express.Router();

router.get("/edit-product", productsController.getAddProduct);
router.post("/edit-product", productsController.postAddProduct);
router.get("/edit-product/:id", productsController.getEditProduct);

router.get("/products-list", productsController.getProductsList);

router.post("/delete-product", productsController.getUpdatedProductsList);

export { router as adminRoutes };
