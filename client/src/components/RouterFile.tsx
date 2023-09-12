

// Det här är en separat fil/komponent där jag samlat alla mina routes.
// I routes-filen har jag alla mina komponenters routes, dvs hur olika URL:er kopplas till var komponent. Route-vägen.
// React-router talar om vilka komponenter som ska visas när en viss URL besöks.

// Importerar Routes och Route från paketet react-router-dom
import { Routes, Route} from 'react-router-dom'

// Importerar mina komponenter/sidor Home och Confirmation
import Home from "../components/Home";
import ManageUsers from '../components/ManageUsers';
import Products from './Products';
// import ShoppingCart from './ShoppingCart';

function RouterFile() {
  return (

    // Hjälper till att organisera logik/visning.
    // Delat upp koden i mindre delar och en bätter struktur
    // Genom att lägga alla URL-komponent-kopplingar i routes-komponenten.
    // Routes hjälper användaren att navigera mellan olika sidor - olika komponenter.
    // Routes kan aktiveras genom länkar, knappar, bokmärken eller url:en i webbläsaren.
    // Visar olika information beroende på vilken route som är aktiv.
    // Kör routes och route

    <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='../components/ManageUsers' element={<ManageUsers />}/>
    <Route path='../components/Products' element={< Products />}/>
    {/* <Route path='../components/ShoppingCart' element={< ShoppingCart />}/> */}



  </Routes>
  )
}

export default RouterFile;