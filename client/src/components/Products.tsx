
import { useUsersContext } from "../Context/NamasteContext";
import {useEffect} from "react"


function Products() {

    const {
       products,
       setProducts,
       cart,
       setCart,
    } = useUsersContext();

    console.log(cart);
    
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

    // funktion som tar argumentet cartItem, typen IcartItem som innehåller information om en produkt som ska läggas till i kundvagnen.
    // addcartitem anropas, och lägger till cartItem till kundvagnen genom att kopera den aktuella kundvagnen cart och lägga till cartItem till ny kopia med setCart ...cart,cartItem.

    function AddCartItem(cartItem: string) {
        const ItemExistInCart = cart.findIndex((item) =>
         item.product === cartItem);
         // läs.

         // findIndex.
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
                <br />{product.name}
                <br />
                <br />{product.images}
                <br />
                <br />{product.description}
                <br />
                <br />{product.default_price.id}
                <button  onClick={() => AddCartItem(product.default_price.id)}>Lägg till i kassa</button>
            
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