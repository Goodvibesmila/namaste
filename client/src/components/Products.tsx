
import { useUsersContext } from "../Context/NamasteContext";
import {useEffect} from "react"




function Products() {

    const {
       products,
       setProducts,
       cart,
       setCart,
    } = useUsersContext();

    
    useEffect(() => {
  
        async function productslist() {

            try {
                const listAllproducts = await fetch("/api/listAllProducts", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                  });

                  const data = await listAllproducts.json();
                  setProducts(data);


              } catch (error) {
              console.error("Ett fel uppstod:", error);
            }
          }

          productslist();

    }, [setProducts]);






    function AddCartItem(cartItem: string) {

        const ItemExistInCart = cart.findIndex((item) =>
         item.product === cartItem);

        if(ItemExistInCart !== -1) {

            const updatedCart = [...cart]
            updatedCart[ItemExistInCart].quantity++
            setCart(updatedCart);
            

        } else {

            setCart([
                ...cart, 
                {
                    product: cartItem,
                    quantity: 1,
                },
            ]);
        }
    }




    return (

    <div>

        <ul>
            {products.map((product) => (
            <li key={product.id}>
                {product.name}
                <img src={product.images[0]}/>
                {product.description}
                <p>{(product.default_price.unit_amount / 100).toFixed(2)} kr</p>
                <button  onClick={() => AddCartItem(product.default_price.id)}>Lägg till i kundkorg</button>
            </li>
            ))}
        </ul>


        <ul>
        {cart.map((cartItem) => (
          <li key={cartItem.product}>
            {cartItem.product}
            ({cartItem.quantity} st)
          </li>
        ))}
      </ul>

    </div>
  );
  }



export default Products