
import { useUsersContext } from '../Context/NamasteContext';


const Checkout = () => {

const {
cart,
isLoggedin,
username,
} = useUsersContext ();

const validateCheckout = isLoggedin;


 // HANTERAR CHECKOUT SESSION
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


          
          const { url, sessionId } = await response.json();
          localStorage.setItem("session-id", sessionId)
          window.location = url;



        } catch (error) {
          console.error("Ett fel uppstod:", error);
        }


        HandlePayment()


      }


         
  return (

    <div className='checkoutContainer'>
      
      { validateCheckout ? <p> Är du redo att checka ut din order {username}? Tryck på "gå till kassan"- knappen. </p> : "Du behöver logga in för att kunna checka ut."}
      { validateCheckout ? <button className='purchasebutton' onClick={HandlePayment}> Gå till kassan </button> : "" }

    </div>
  );
  }



export default Checkout