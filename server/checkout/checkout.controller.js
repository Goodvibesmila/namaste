require("dotenv").config();
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const app = express();
app.use(express.json());

const CLIENT_URL = "http://localhost:5173";

//Middlewares
app.use(
  cors({
    origin: "*",
  })
);

async function checkout (req, res) {
  console.log(req.body)
  try {

    const session = await stripe.checkout.sessions.create({
      
      line_items: req.body.map((item) => {
        
        console.log(item.product);
        
        return {
          price: item.product,
          quantity: item.quantity,

        };
      }),
      mode: "payment",
      success_url: `${CLIENT_URL}/confirmation`,
      cancel_url: CLIENT_URL,
    });

    res.status(200).json({ url: session.url });

  } catch (error) {
    console.log(error.message);
    res.status(400).json("Det gick inte bra...");
  }
};

module.exports = { checkout }