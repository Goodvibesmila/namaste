require("dotenv").config()
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const fs = require("fs");
const path = require("path");
const express = require("express");


const filePath = path.join(__dirname, "../orders.json");
const app = express();




function getAllOrders(req, res) {

    const orders = fs.readFile(filePath, (err, data) => {

            if(err) {
                res.status(404).send("Hittade ingen order")
            }


            const order = JSON.parse(data)
            const usersorders = order.filter((usersorder) => usersorder.customer == req.params.username)
            res.status(200).send(usersorders);
        }
    );
}


module.exports = { getAllOrders };