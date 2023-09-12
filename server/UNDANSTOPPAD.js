
// // dotenv = npm-paket som används för att hantera konfigurations/miljövariabler.
// // dotenv = dot environment, gör det möjligt att ladda konfigurationsvariabler från en separat fil (.env), variablerna kan innehålla
// // hemligheter, api-nycklar, miljöspecifika inställningar och andra konfigurationsuppgifter.
// // Gör det möjligt att inte spara/ladda känslig information direkt i källkoden.

// // Importerar och konfiguerar dotenv-paket
// require("dotenv").config();

// //importerar express.js, webbramverk för node (skapar webbserver).
// const express = require("express");

// // importerar cors-paket. Paketet hanterar cors-origin resource sharing (cors).
// // Gör det möjligt för min server att nås från olika webbadresser.
// const cors = require("cors");


// //Plockar ut från filvägen till endpoints.
// const {app} = require("./UNDANSTOPPAD2");

// //importerar stripe och konfiguerar det med stripe API-nyckel (dvs importerar och sen kopplar ihop till .env där nyckeln finns).
// // Det här gör det möjligt att använda stripe för att hantera betalningar.
// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);


// // Genom express(), så skapar jag en instans av express.
// // instansen fungerar som webbserver och hanterar inkommande HTTP-förfrågningar.
// // När man lägger den i en variabel (const app) så gör man det möjligt att använda och konfiguera
// // olika funktioner som finns inom express. T.ex lägga till middlewarefunktioner så som hantering av JSON-data eller CORS,
// // men även definiera rutter eller starta servern.
// //const app = express();


// //Importerar FS- en inbyggt nodemodule. Används för att läsa och skriva data från/till filer.
// ///////////////////////////////////////////////
// /////////////////////////////////////////////
// //////////////////////////////////////////////
// // Behöver denna troligen.
// //const fs = require('fs');


// // express.json är en inbyggd middleware i express som tolkar inkommande JSON-data från HTTP-förfrågningar. 
// // När klient skickar en förfrågan till servern med json data i bodyn så tolkar och omvandlar express.json datan till javascript objekt.
// // middleware i express är funktioner som används för att utföra olika typer av behandling på
// // HTTP-förfrågningar eller utgående HTTP-svar innan de når slutmålet.
// // Utförs t.ex autentisering, loggning, dataformatering med mer.

// // app.use är en funktion i express som registrerar/skapar middleware-funktioner som ska köras för varje inkommande HTTP-förfrågning till applikationen.
// // Man kan också kedja på fler middlewares på en app.use, körs i ordningen de registreras
// // en middlewarefunktion tar tre parametrar, req (Förfrågningsobjekt), res(svarsobjekt), next(funktions som används för att fortsättabehandling av förfrågan)
// // inom app.use kan man lägga exempelvis console.logsm ändra förfrågningar eller svaret innan de går vidare till nästa middleware eller route.


// app.use(express.json());


// // definierar en konstant "client url". 
// // client url representerar webbadressen för min klientapplikation.
// // kan senare användas för att sätta betalningsomdirigeringar.
// const CLIENT_URL = "http://127.0.0.1:5173";



// // här konfigueras en CORS-middleware.
// // den gör så att alla webbadresser tillåts att använda min server.
// // Stora projekt bör begränsa tillgången till specifika webbadresser, säkerhet.
// app.use(
//   cors({
//     origin: "*",
//   })
// );


// /////////////////////////////////////////
// ////////////////////////////////////////////
// ///////////////////////////////////////////////
// ///////////////////////////////////////////////
// // Den här rutt läser data från en JSON-fil som heter users.json
// // Behöver troligen det här

// /*app.get('/api/users', (req, res) => {
//     fs.readFile("./users.json", (err, data) => {
//         if(err) {
//             res.status(404).send("Oops, something went wrong")}
        
//             const users = JSON.parse(data);
//             res.status(200).send(users)
//             return;
//         })
// });*/

// //läser data från users,json, hittar en användare med det specifierade Id:t
// // i URL:en och skickarmed den som ett json-svar.
// /*app.get('/api/cars/:Id', (req, res) => {
//     fs.readFile("cars.json", (err, data) => {
//         if(err) {
//             res.status(404).send("No ID found")
//         }
//         const cars = JSON.parse(data)
//         const car = cars.find((car) => car.id == req.params.id);
//         res.status(200).send(car)
//     })
// })*/


// //Läser data från users.json och genererar ett nytt id för användare
// // kanske behövs för orders? lägger till användarens data i förfrågningskroppen i jsondatan och
// // skriver sedan den uppdaterade datan tillbaka till filen.
// /* app.post('/api/cars', (req, res) => {
//     fs.readFile("./cars.json", (err, data) => {
//         if(err) {
//             res.status(404).send("Oops, something went wrong")}
        
//             const cars = JSON.parse(data)
//             let allcars = [];
//             for(let i = 0; i < cars.length; i++) {
//                 allcars.push(cars[i].Id);
//             }
            
//             let highestid = (Math.max(...allcars));
        
//             const postcars = {
//                 Modell: req.body.Modell,
//                 Id: highestid +1,
//                 color: req.body.color,
//                 price: req.body.price
//             }
//             cars.push(postcars);

//             fs.writeFile("cars.json", JSON.stringify(cars, null, 2), (err) => {
//                 if (err) {
//                     res.status(404).send("No car was added")
//                 }
//                 res.status(201).send(cars);
//             })
//         })
// }) */

// // läser data från users.json, hittar en användare med specifikt id och uppdaterar sedan dess data med värden
// // från förfrågningskroppen och skriver sedan den uppdaterade datan tillbaka till filen.
// /* 
// app.put('/api/cars/:Id', (req, res) => {
//     fs.readFile("./cars.json", (err, data) => {
//         const cars = JSON.parse(data)
//         const car = cars.find((car) => car.Id == req.params.Id);
//         if (!car) {
//             res.status(404).send("Oh, No! Error!");

//         } else{
//             cars.find((car) => {
//                 if(car.Id == req.params.Id) {
//                 car.Modell = req.body.Modell,
//                 car.color = req.body.color,
//                 car.price = req.body.price
//                 }
//             });

//             fs.writeFile("./cars.json", JSON.stringify(cars, null, 2), () => {
//                 res.status(202).send("A new car was updated");
//             })
//         }       
//     })
// }); */


// // app.post = en metod, används för att definiera en HTTP-Post-rutt.
// // HTTP-post-förfrågningar används för att skicka data från klient till server.
// // t.ex när kund gör beställning i e-handelsapp.

// // Create-checkout-session = URL-rutten. Den URL-väg som klient måste skicka sin POST-förfrågan till för att utlösa denna rutt.
// // Just denna url-väg används för att skapa en ny kassasession i stripe när en kund vill checka ut. 

// // async (res, req => {}) = asyncronisk funktion, en arrow funktion, används som route-handlare/funktion som definierar vad som ska hända när http-förfrågan (get, post, put, delete) når en specifik  rutt/url påvägen till webbservern.
// // Tar två parametrar, req(förfrågning), res(svar). 
// // Funktionen innehåller kod som kmr att köras när en postförfrågan skickas till create-checkout-session
// // Här i finns logiken för att skapa en ny kassasession i stripe. Kommer att involvera användning av stripe api

// // const session = await stripe.checkout.sessions.create = använder stripe-modulen för att skapa ny kassasession genom att anropa
// //  checkout.sessions.create() funktionen.
// // använder data från req.body, för att konfiguera kassasessionen.
// // Om kassasessionen skapas framgångsrikt, svarar jag klienten med en URL som klient kan använda för att komma till stripe-kassan (res.status(200))
// // Om något går fel skickas res.status(400).

// //kortfattat, arrowfunktion som definierar en post-rutt och används för att skapa en ny kassasession i stripe när kund gör beställning. 

// app.post("/create-checkout-session", async (req, res) => {
//   try {
//     const session = await stripe.checkout.sessions.create({
//       line_items: req.body.map((item) => {
//         return {
//           price: item.product,
//           quantity: item.quantity,
//         };
//       }),
//       mode: "payment",
//       success_url: `${CLIENT_URL}/confirmation`,
//       cancel_url: CLIENT_URL,
//     });

//     res.status(200).json({ url: session.url });
//   } catch (error) {
//     console.log(error.message);
//     res.status(400).json("Det gick inte bra...");
//   }
// });


// // Här startar servern på port 3000 och loggar ut ett meddelande när server är igång.
// app.listen(3000, () => console.log("Server is up and running.."));
