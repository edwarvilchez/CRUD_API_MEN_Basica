const express = require("express");
const Product = require("../models/product.model");
const router = express.Router();
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller");

// routes of product the CRUD API
// get all products
router.get("/", getProducts);
// get a product by id
router.get("/:id", getProduct);
// create a new product
router.post("/", createProduct);
// update a product by id
router.put("/:id", updateProduct);
// delete a product by id
router.delete("/:id", deleteProduct);

module.exports = router;
