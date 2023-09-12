// import {useUsersContext} from "../Context/NamasteContext"



// function ShoppingCart() {

//     const {
//         cart,
//         setCart,
//         products,
//         setProducts,
//     } = useUsersContext();

//   const addToCart = (products) => {
//     setCart([...cart, products]);
//   };

//   const removeFromCart = (products) => {
//     const updatedCart = cart.filter((item) => item.id !== products.id);
//     setCart(updatedCart);
//   };

//   return (
//     <div>
//       <h2>Shopping Cart</h2>
//       <ul>
//         {cart.map((product) => (
//           <li key={product.id}>
//             {product.name} - {products.price} SEK{' '}
//             <button onClick={() => removeFromCart(product)}>Remove</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default ShoppingCart;