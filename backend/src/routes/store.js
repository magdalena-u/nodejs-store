const express = require("express");

import * as storeController from "../controllers/store";

const router = express.Router();

router.get("/", storeController.getProducts);

export { router as storeRoutes };
