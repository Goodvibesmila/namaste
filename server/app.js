

//import paket.
const express = require("express");
const cors = require("cors");
const cookieSession = require('cookie-session');
// Hämtar in Routes
const { userRouter } = require("./Users/users.router");
const { productsRouter } = require("./products/products.router");
const { checkoutRouter } = require("./checkout/checkout.router");


// Tolk.
const app = express();
app.use(express.json());


// aktiverar cors.
app.use(
    cors({
      origin: "*",
    })
  );

  app.use(cookieSession({
    name: 'session', // Namnet på session cookien
    secret: "secret-key-1",
    maxAge: 1000 * 1000,
    httpOnly: false,
  }));


  // För att express ska använda routern, och börjat skriva hur vår endpoint ska se ut.
  // Första delen av url:en vi ska ansluta till.
  // i vår routerfil har vi en get sen /users, så den komemr att hämta in users.
  // Så genom att ansluta till den fulla url:en så kör vi funktionen som finns i router.
app.use("/api", userRouter, productsRouter, checkoutRouter)

module.exports = { app };