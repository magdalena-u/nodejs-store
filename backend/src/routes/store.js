const express = require("express");

import * as storeController from "../controllers/store";

const router = express.Router();

router.get("/", storeController.getStore);
router.get("/products-list", storeController.getProductsList);
router.get("/product-detail", storeController.getProductDetail);

export { router as storeRoutes };
