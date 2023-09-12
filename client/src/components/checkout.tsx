

// useState och useEffect för hantering av användartillstånd/api-anrop till backend. - kolla upp

// useState = inbyggt krok/hooks i react. Används för att lägga till/hantera tillstånd.
// Man lägger useState i funktionskomponenter (frontend).
// I useState kan man införa/hantera tillståendsinformation/state (data i en komponent som kan ändras/påverkas)
// information som komponent behöver för att fungera och visa innehåll.
// Genom att useState kan lägga till/hantera data kan man lagra och uppdatera värden. 
// För att använda useState behöver man importera det från react. import React, {useState} from "react";
// Man implementerar sedan useState i koden: const [stateValue, setStateValue] = useSate(initialValue);
// Där vi skapar en variabel som heter stateValue, setStateValue används sedan för att updpatera stateValue
// initialValue är det initiala värder i datan/tillståndet.

// Kortfattad förklaring: useState - lägger till/hanterar/uppdatera/lagra data i en komponent

// import {useState} from 'react'


// function checkout() {

 // En funktion som körs varje gång användaren trycker på knappen "gå till kassan"
    // Skickar en post-förfrågan till servern för att skapa en kassasession

    //Inuti hanteras betalningsprocessen
    // en fetch(), som asynkroniskt gör en post-förfrågan till servern.
    // Förfrågan skickar data från kundvagnen "cart" i jsonformat, till url:en.

    // Gör om fetchen till rätt API

      // skapar ett state som innehåller en array av objekt.
    // Här tänker jag att jag hämtar in produkterna från JSON/Stripe.
    // används för att hålla koll på vilka produkter som finns i kundvagnen.
//     const [cart, setCart] = useState([]);

//     async function handlePayment() {
//         try {
//           const Response = await fetch(
//             "http://localhost:5173//create-checkout-session",
//             {
//               method: "POST",
//               headers: {
//                 "Content-Type": "application/json",
//               },
//               body: JSON.stringify(cart),
//             }
//           );
    
//           if (!Response.ok) {
//             console.error("Något gick fel med fetch-anropet.");
//             return;
//           }
    
//           const { url } = await Response.json();
//           window.location = url;
//         } catch (error) {
//           console.error("Ett fel uppstod:", error);
//         }
//       }
   
//       handlePayment()
//   return (
//     <div>
// <button className='purchasebutton' /*onClick={handlePayment}*/  /*onChange={(e) => Enfunktion(e.target.value)}*/>Gå till kassan</button>
//     </div>
//   );
//   }

// export default checkout