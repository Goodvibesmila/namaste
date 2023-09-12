
// läs på om express
const express = require("express");
const { getAllUsers, registerUser, login } = require("./users.controller")

//exporterar ut hela userRouterfilen.
// påbörjar endpoints.
// här bestämmer vi vad url:en ska vara endpointen.
// Bakom url:en kör funktionen. 
// Vi vill hämta alla användare som finns.
// ej filväg, url:väg

// För att få tag på endpoints så fetchar man på klienten
const userRouter = express.Router().get("/users", getAllUsers ).post("/registerUser", registerUser).post("/login", login);


module.exports = {userRouter}