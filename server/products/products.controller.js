require("dotenv").config()
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const fs = require("fs");
const path = require("path");
const express = require("express");
const productsfilePath = path.join(__dirname, "../products.json");
const app = express();

function getAllProducts(req, res) {
        const products = fs.readFileSync(productsfilePath);
        return JSON.parse(products);
}

//expand är populate
// id kan expandas
async function listAllProducts (req, res) {
    try{
        const products = await stripe.products.list({
            expand: ["data.default_price"]
        });
        res.json(products.data)
        // const product = await stripe.products.retrieve(
        //     {
        //             line_items: req.body.map((item) => {
        //                 return {
        //                   price: item.product,
        //                   quantity: item.quantity,
        //                 }
        //             })
        //         })
        
    }
        catch (error) {
          console.log(error.message);
          res.status(400).json("Det gick inte bra.");
        }
}


module.exports = { getAllProducts, listAllProducts};