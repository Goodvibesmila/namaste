import { Link } from "react-router-dom"
import  { useEffect } from "react"
import { IOrderProduct, IUserOrders, useUsersContext } from "../Context/NamasteContext";




function Mypages() {

   const {
    username,
    userOrders,
    setUserOrders,
   } = useUsersContext();




    useEffect(() => {

    async function orderList() {

        try {
            const ListAllOrders = await fetch(`http://localhost:3000/api/orders/${username}`, {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                },
              });

              const data = await ListAllOrders.json();
              setUserOrders(data);


          } catch (error) {
          console.error("Ett fel uppstod:", error);
        }
      }

      orderList();

// eslint-disable-next-line react-hooks/exhaustive-deps
}, [username] );



  return (

    <div>

        <h1> Mina ordrar </h1>

        <ul>
            {userOrders.map((order: IUserOrders) => (
            <li key={order.customer}>
            {order.products.map((product: IOrderProduct) => (
            <div key={product.product}>
                Product: {product.product} - Antal: {product.quantity} - Pris: {product.price} kr
            </div>
            ))}
            </li>
            ))}
        </ul>

        <Link to="/"><button>Tillbaka till startsidan</button></Link>

    </div>
  )
}



export default Mypages