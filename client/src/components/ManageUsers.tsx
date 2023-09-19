import {useUsersContext} from "../Context/NamasteContext"
import "../style.css"


function ManageUsers() {

    const {
        email,
        setEmail,
        setUsername,
        password,
        setPassword,
        registerUser,
        setregisterUser,
        registerPassword,
        setregisterPassword,
        registerEmail,
        setregisterEmail,
        setIsLoggedin,
    } = useUsersContext();



    
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
            setUsername(result.name)
            setIsLoggedin(true);
          })

          .catch((error) => {
            console.error(error);
          });
      };




    const submitRegisterUser = () => {

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
  


  return (

    <div>

        <p> Logga in </p>
        <input type="email" placeholder="E-post" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Skriv" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button className='loginbutton'  onClick={() => handleSubmit()}> Logga in </button>


        <p> Registera dig</p>
        <input type="name" placeholder="Namn" value={registerUser} onChange={(e) => setregisterUser(e.target.value)} />
        <input type="email" placeholder="Epost" value={registerEmail} onChange={(e) => setregisterEmail(e.target.value)} />
        <input type="password" placeholder="Lösenord" value={registerPassword} onChange={(e) => setregisterPassword(e.target.value)} />
        <button className='loginbutton'  onClick={() => submitRegisterUser()}> Skapa </button>

    </div>
  )
}



export default ManageUsers