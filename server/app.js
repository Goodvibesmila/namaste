
const express = require("express");
const cors = require("cors");
const cookieSession = require('cookie-session');

const { userRouter } = require("./Users/users.router");
const { productsRouter } = require("./products/products.router");
const { checkoutRouter } = require("./checkout/checkout.router");
const { orderRouter } = require("./orders/orders.router")



const app = express();
app.use(express.json());


app.use(
    cors({
      origin: "*",
    })
  );



  app.use(cookieSession({
    name: 'session', 
    secret: "secret-key-1",
    maxAge: 1000 * 1000,
    httpOnly: false,
  }));


app.use("/api", userRouter, productsRouter, checkoutRouter, orderRouter)


module.exports = { app };