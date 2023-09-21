
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


    const cartCondition =  cart.length > 0;

    return (

    <div className="Container">

        <div className="productContainer">
        <ul>
            {products.map((product) => (
            <li key={product.id}>
                <p className="productTitle">{product.name}</p>
                <img src={product.images[0]} className="image" alt="produktbild"/>
                <p className="productDescription">{product.description}</p>
                <p className="productPrice">{(product.default_price.unit_amount / 100).toFixed(2)} kr</p>
                <button  onClick={() => AddCartItem(product.default_price.id)}>Lägg till i kundkorg</button>
            </li>
            ))}
        </ul>
        </div>
      
      <div className="cartContainer">
        <ul>
          <h3>KundKorg</h3>
          { cartCondition ? (
              <p>{cart.length} st</p>
              )  : null}
              
      </ul>
      </div>

    </div>
  );
  }



export default Products