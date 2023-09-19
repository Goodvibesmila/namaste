require("dotenv").config()
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const bcrypt = require("bcrypt");
const fs = require("fs");
const path = require("path");
const express = require("express");


const filePath = path.join(__dirname, "../users.json");
const app = express();






function getAllUsers(req, res) {
        const users = fs.readFileSync(filePath);
        return JSON.parse(users);
}




async function registerUser(req, res) {

    fs.readFile("./users.json", async (err, data) => {

        if(err) {
            res.status(404).send("Oops, something went wrong");
        return;
        }


            const users = JSON.parse(data)
            console.log(data)

            const { password } = req.body;
            const bcryptPassword = await bcrypt.hash(password, 10);
            

            const createCustomerStripe = await stripe.customers.create({
                email: req.body.email,
                name: req.body.name
            });


            const postusers = {
                id: createCustomerStripe.id,
                email: req.body.email,
                name: req.body.name,
                password: bcryptPassword
            }

            users.push(postusers);
            fs.writeFile("users.json", JSON.stringify(users, null, 2), (err) => {

                if (err) {
                    res.status(404).send("ERROR")
                }
            })

            res.status(201).send(users);
        })
}






async function login(req, res, next) {

    try {
      const { password, email, } = req.body;
      const users = getAllUsers();
        console.log(users)
        const dbuser = users.find(user => user.email === email)

      if (!dbuser || !(await bcrypt.compare(password, dbuser.password))) {
        return res.status(401).json("Wrong id or password");
      }


      req.session = dbuser;
      res.status(200).json(dbuser);
      res.json(dbuser)

    } catch (error) {
      next(error);
    }
  }

  

// klient, fetch, api/users, får tillbaka objekt som ska mappas och renderas.
module.exports = { getAllUsers, registerUser, login };