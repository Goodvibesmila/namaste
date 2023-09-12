
const express = require("express");
const { getAllProducts, listAllProducts } = require("./products.controller")


const productsRouter = express.Router().get("/products", getAllProducts ).post("/listAllProducts", listAllProducts);

module.exports = {productsRouter}