const express = require("express");

import * as storeController from "../controllers/store";

const router = express.Router();

router.get("/", storeController.getStore);
router.get("/products-list", storeController.getProductsList);

router.get("/products-list/:id", storeController.getProductDetail);

router.post('/cart', storeController.addProductToCart)

export { router as storeRoutes };
