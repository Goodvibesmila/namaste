
import { useUsersContext } from "../Context/NamasteContext";
import {useEffect} from "react"



function Products() {

    const {
       products,
       setProducts
    } = useUsersContext();

    useEffect(() => {
        async function productslist() {
            try {
                const listAllproducts = await fetch("api/listAllProducts", {
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
            </li>
            ))}
           
        </ul>
    </div>
  );
  }

export default Products