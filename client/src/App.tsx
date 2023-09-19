import { BrowserRouter} from "react-router-dom";
import RouterFile from "./components/RouterFile";
import UserProvider from "./Context/NamasteContext";



function App() {


  return (
  <div>

    <UserProvider>
      <BrowserRouter>
        <RouterFile/>
      </BrowserRouter>
    </UserProvider>
  
  </div>
  )
}



export default App