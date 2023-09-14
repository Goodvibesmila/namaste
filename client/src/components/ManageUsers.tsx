import {useUsersContext} from "../Context/NamasteContext"

import "../style.css"

function ManageUsers() {

    const {
        email,
        setEmail,
        password,
        setPassword,
        registerUser,
        setregisterUser,
        registerPassword,
        setregisterPassword,
        registerEmail,
        setregisterEmail,
    } = useUsersContext();



    // Logga in
    const handleSubmit = () => {

        const userData = { email, password};
      
        fetch("api/login", {
          method: "POST",
          body: JSON.stringify( userData ),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => response.json())
          .then((result) => {
            
            console.log(result);
          })
          .catch((error) => {
          
            console.error(error);
          });
      };


      // Registrera 

      const submitRegisterUser = () => {
        // Ger dom namnen som servern vill ha.
        const registerUserData = { name:registerUser, password:registerPassword, email: registerEmail};
      
        fetch("api/registerUser", {
          method: "POST",
          body: JSON.stringify( registerUserData ),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => response.json())
          .then((result) => {
            
            console.log(result);
          })
          .catch((error) => {
          
            console.error(error);
          });
      };
  

    // Skapa funktioner här för vad som ska ske med informationen en användare registrerar
    // Eller när en användare försöker logga in.
  return (
    // Jag behöver spara inputinformationen i ett state, som jag sedan skickar med till servern, så att arrayen dynamiskt uppdateras.
    <div>
        <p> Logga in </p>
        <input type="email" placeholder="E-post" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Skriv" value={password} onChange={(e) => setPassword(e.target.value)} />
    <br />
    <button className='loginbutton'  onClick={() => handleSubmit()}> Logga in </button>
    <br />

    <p> Registera dig</p>
    <input type="name" placeholder="Namn" value={registerUser} onChange={(e) => setregisterUser(e.target.value)} />
    <br/>
    <input type="email" placeholder="Epost" value={registerEmail} onChange={(e) => setregisterEmail(e.target.value)} />
    <br/>
    <input type="password" placeholder="Lösenord" value={registerPassword} onChange={(e) => setregisterPassword(e.target.value)} />
    
    <br />
    <button className='loginbutton'  onClick={() => submitRegisterUser()}> Skapa </button>
    <br />
        </div>
  )
}

export default ManageUsers