// importerar css-fil
import "../style.css"
import ManageUsers from './ManageUsers'
import Products from "./Products";
import Checkout from "./checkout";

function Home() {

  return (
    <div>
    <ManageUsers/>
    <Products/>
    <Checkout/>
    
    </div>
  );
  }

export default Home