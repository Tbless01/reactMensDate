import Home from './pages/dashboard/components/Home';
import MenstrualCycle from "../src/pages/dashboard/components/Menstruation";
import Login from '../src/pages/authentications/login/components/login';
import SignUp from '../../nw_react_app/src/pages/authentications/signup/components/signup';
import{BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home></Home>} ></Route>
          <Route path='checkDate' element={<MenstrualCycle></MenstrualCycle>}></Route>
          <Route path='SignIn' element={<Login></Login>}></Route>
          <Route path='SignUp' element={<SignUp></SignUp>}></Route>
        </Routes>
      </BrowserRouter>
    
  );
}

export default App;
