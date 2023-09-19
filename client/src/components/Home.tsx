
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
        <h1> NAMASTE STORE </h1>
      <div className="LoggedinContainer">
        {validateMypages ? <p> Välkommen {username} </p> : ""}
        {validateMypages ? <Link to="/mypages"><button> Dina Ordrar </button></Link> : "" }
      </div>
        <ManageUsers/>
        <h3> Få 10% rabbat med rabattkoden "halloween10" när du checkar ut.</h3>
        <img src="./IMAGES/header.jpg" />
      </header>
    <div className="bodyContainer">
      <Products/>
      <Checkout/>
    </div>
    </div>
  );
  }

export default Home