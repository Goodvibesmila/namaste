
const express = require("express");
const { getAllOrders } = require("./orders.controller")


const orderRouter = express.Router().get("/orders/:username", getAllOrders )

module.exports = {orderRouter}