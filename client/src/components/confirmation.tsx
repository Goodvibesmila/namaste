import {useState, useEffect} from "react";



function Confirmation() {



  const [isPaymentVerified, setIsPaymentVerified] = useState(false)



  useEffect(() => {
  
    const sessionId = localStorage.getItem("session-id");

    const verifyPayment = async () => {
        const response = await fetch(
          "/api/verify-checkout-session",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({sessionId}),
          }
        );


        const {verified} = await response.json()


        if (verified) {
          setIsPaymentVerified(true)
          localStorage.removeItem("session-id");
        } else {
          setIsPaymentVerified(false);
        }
      }

      verifyPayment();

  }, [])


  return isPaymentVerified ? (
  <h1>Tack för ditt köp</h1> )
  : ( 
  <h2>Oops... Något gick fel med betalningen.</h2>
  );
}

export default Confirmation