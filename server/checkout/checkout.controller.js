require("dotenv").config();
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const fs = require ("fs");



const app = express();
app.use(express.json());



const CLIENT_URL = "http://localhost:5173";



app.use(
  cors({
    origin: "*",
  })
);





async function checkout (req, res) {

    try { 
      if (req.session.id) {
        
        const session = await stripe.checkout.sessions.create({
        line_items: req.body.map((item) => {
              


        return {
          price: item.product,
          quantity: item.quantity,
        };
      }),


      customer: req.session.id,
      mode: "payment",
      success_url: `${CLIENT_URL}/confirmation`,
      cancel_url: CLIENT_URL,
      allow_promotion_codes: true,
    });


    res.status(200).json({ url: session.url, sessionId: session.id });
  }


  } catch (error) {
    console.log(error.message);
    res.status(400).json("Det gick inte");
  }
};






async function verifySession(req, res) {

  try {

    const session = await stripe.checkout.sessions.retrieve(req.body.sessionId);
  
    if(session.payment_status !== "paid") {

      return res.status(400).json({verified: false });
    }


    const data = fs.readFileSync("orders.json");
    const pushOrder =JSON.parse(data)
    const line_items = await stripe.checkout.sessions.listLineItems(req.body.sessionId);


    const order = {
      created: session.created,
      customer: session.customer_details.name,
      products: line_items.data.map((item) => {
        return {
          product: item.description,
          quantity: item.quantity,
          price: item.price.unit_amount / 100,
        };
      }),
    };


    pushOrder.push(order);
    fs.writeFile("orders.json", JSON.stringify(pushOrder, null, 2), (err) => {

      if (err) {
          res.status(404).send("ERROR")
      }
    })


    res.status(200).json({ verified: true});


  } catch (error) {
    console.log(error.message);
  }
}



module.exports = { checkout, verifySession }