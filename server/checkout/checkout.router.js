
const express = require("express");
const { checkout, verifySession } = require("./checkout.controller")

const checkoutRouter = express.Router().post("/create-checkout-session", checkout).post("/verify-checkout-session", verifySession)


module.exports = {checkoutRouter}