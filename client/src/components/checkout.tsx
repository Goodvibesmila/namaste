

import { useUsersContext } from '../Context/NamasteContext';

const Checkout = () => {

//  En funktion som körs varje gång användaren trycker på knappen "gå till kassan"
//     Skickar en post-förfrågan till servern för att skapa en kassasession

//     Inuti hanteras betalningsprocessen
//     en fetch(), som asynkroniskt gör en post-förfrågan till servern.
//     Förfrågan skickar data från kundvagnen "cart" i jsonformat, till url:en.

//     Gör om fetchen till rätt API

//     skapar ett state som innehåller en array av objekt.
//     Här tänker jag att jag hämtar in produkterna från JSON/Stripe.
//     används för att hålla koll på vilka produkter som finns i kundvagnen.
const {
cart,
} = useUsersContext ();


    async function HandlePayment() {
        try {
          const response = await fetch(
            "/api/create-checkout-session",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(cart),
            }
            
          );
      
          if (!response.ok) {
            console.error("Något gick fel med fetch-anropet.");
            return;
          }
    
          const { url } = await response.json();
          window.location = url;

        } catch (error) {
          console.error("Ett fel uppstod:", error);
        }
        HandlePayment()

      }
         
  return (
    <div>
<button className='purchasebutton' onClick={HandlePayment}>Gå till kassan</button>
    </div>
  );
  }

export default Checkout