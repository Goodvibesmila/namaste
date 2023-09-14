
// //importerar context
// import {useUsersContext, IcartItems} from "../Context/NamasteContext"


// // visar en kundvagn för användaren
// function ShoppingCart() {

//     // detructuring av värden.
//     // hämtar cart kundvagnsdata, setcart en funktion för att uppdatera kundvagnsdata.
//     const {
//         cart,
//         setCart,
//     } = useUsersContext();

//     // funktion som tar argumentet cartItem, typen IcartItem som innehåller information om en produkt som ska läggas till i kundvagnen.
//     // addcartitem anropas, och lägger till cartItem till kundvagnen genom att kopera den aktuella kundvagnen cart och lägga till cartItem till ny kopia med setCart ...cart,cartItem.

//     function AddCartItem(cartItem: IcartItems) {
//         setCart([...cart, cartItem]);

//         // höj upp quantity.
//         // Gör en ifsats.
//     }

//     //Listar produkterna i kundvagnen.
//     // Map går igenom varje cartItem renderar information om produkten
//     // key - ger carje li element en unik identifierare baserat på produktid
//     // produktnamn och pris hämtas från cartItem, visas i varje Li
//     // en knapp lägg till i kassa renderas för var produkt
//     // vid klick anropas addcartitem med produkt som argument

//   return (
//     <div>
//       <h2>Shopping Cart</h2>
    //   <ul>
    //     {cart.map((cartItem: IcartItems) => (
    //       <li key={cartItem.quantity.id}>
    //         {cartItem.quantity.name} - {cartItem.id.unit_amount} SEK{' '}
    //         <button onClick={() => AddCartItem(cartItem.id)}>Lägg till i kassa</button>
    //         {console.log(AddCartItem)}
    //       </li>
    //     ))}
    //   </ul>
//     </div>
//   );
// }

// export default ShoppingCart;