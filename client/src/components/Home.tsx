
import "../style.css"
import ManageUsers from './ManageUsers'
import Products from "./Products";
import Checkout from "./checkout";
import { useUsersContext } from "../Context/NamasteContext";
import {Link} from "react-router-dom";



function Home() {

  const {
    isLoggedin,
    username,
    } = useUsersContext (); 

    const validateMypages = isLoggedin;

  return (
    <div>

      <header> 
        {validateMypages ? <p> Välkommen {username} </p> : ""}
        {validateMypages ? <Link to="/mypages"><button> Dina Ordrar </button></Link> : "" }
      </header>
      <ManageUsers/>
      <Products/>
      <Checkout/>

    </div>
  );
  }

export default Home