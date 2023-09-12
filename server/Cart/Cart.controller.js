// require("dotenv").config()
// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// const fs = require("fs");
// const path = require("path");
// const express = require("express");
// const filePath = path.join(__dirname, "../cart.json");

// const app = express();


// function ShoppingCart(req, res) {
//         const CartProducts = fs.readFileSync(filePath);
//         return JSON.parse(CartProducts);
// }


// async function AddToCart(req, res) {
//     fs.readFile(filePath, async (err, data) => {
//         if(err) {
//             res.status(404).send("Oops, something went wrong");
//         return;
//         }
//             const cartItems = JSON.parse(data)

            
//             const retrieveItems = await stripe.products.retrieve({
//                 product: req.body.product,
//             });

//             const PushOrderToJson = {
//                 product: retrieveItems,
//             }
//             cartItems.push(PushOrderToJson);

//             fs.writeFile(filePath, JSON.stringify(cartItems, null, 2), (err) => {
//                 if (err) {
//                     res.status(404).send("ERROR")
//                 }
//             })
//             res.status(201).send(cartItems);

//         })
// }


// module.exports = { ShoppingCart, AddToCart };