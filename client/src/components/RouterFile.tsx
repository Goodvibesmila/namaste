
import { Routes, Route} from 'react-router-dom'
import Home from "../components/Home";
import ManageUsers from '../components/ManageUsers';
import Products from './Products';
import Checkout from './checkout';
import Confirmation from './confirmation';
import Mypages from './mypages';




function RouterFile() {

  return (

  <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/ManageUsers' element={<ManageUsers />}/>
    <Route path='/Products' element={< Products />}/>
    <Route path='/checkout' element={< Checkout />}/>
    <Route path='/confirmation' element={< Confirmation />}/>
    <Route path='/Mypages' element={< Mypages />}/>
  </Routes>
  )
}

export default RouterFile;