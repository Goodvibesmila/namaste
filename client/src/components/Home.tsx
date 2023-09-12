// importerar css-fil
import "../style.css"
import ManageUsers from './ManageUsers'
import Products from "./Products";
// import ShoppingCart from "./ShoppingCart";


function Home() {

  return (
    <div>
<button className='purchasebutton' /*onClick={handlePayment}*/  /*onChange={(e) => Enfunktion(e.target.value)}*/>Gå till kassan</button>
    <ManageUsers/>
    <Products/>
    {/* <ShoppingCart/> */}
    
    </div>
  );
  }

export default Home